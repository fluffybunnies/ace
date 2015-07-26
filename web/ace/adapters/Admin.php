<?php
/*
	@todo: Image stuff would be a better fit in a static Helper class
*/
namespace ace\adapters;

use \ace\Ace;
use \ace\core\AdapterAbstract;
use \ace\adapters\Exception as ApiAdapterException;

class Admin extends AdapterAbstract {

	/**
	* @todo: use $quality for gifs/pngs
	*/
	public static function resizeWalkerImage($source, $newWidth, $newHeight, $quality=100, $imageCenter=array(null,null)) {
		if (!is_int($quality) || $quality < 0 || $quality > 100) {
			throw new ApiAdapterException(3003, null, '$quality must be an integer (0-100)');
		}
		if (!is_file($source)) {
			throw new ApiAdapterException(3040); // Source file not found
		}
		if (!($getimagesize = getimagesize($source))) {
			throw new ApiAdapterException(3041, null, 'getimagesize() failed'); // Invalid file type
		}
		list($origWidth, $origHeight, $imageType) = $getimagesize;

		// handle this with ./install.sh + php.ini
		//self::increaseMemoryLimit();

		switch ($imageType) {
			case IMAGETYPE_GIF: $imageCopy = @imagecreatefromgif($source); break;
			case IMAGETYPE_PNG: $imageCopy = @imagecreatefrompng($source); break;
			default: $imageCopy = @imagecreatefromjpeg($source);
		}
		if (empty($imageCopy)) {
			throw new ApiAdapterException(3042); // Failed to imagecreate() file
		}

		$fit = self::getImageToWindowFit(array($newWidth,$newHeight), array($origWidth,$origHeight), $imageCenter);
		$newImage = imagecreatetruecolor($newWidth, $newHeight);
		//                                             $dX,             $dY,         $sX, $sY, $dW,           $dH,            $sW,        $sH
		if (!imagecopyresampled($newImage, $imageCopy, $fit['offsetX'], $fit['offsetY'], 0, 0, $fit['width'], $fit['height'], $origWidth, $origHeight)) {
			throw new ApiAdapterException(3043); // Failed to resample
		}

		switch ($imageType) {
			case IMAGETYPE_GIF: $res = imagegif($newImage, $source); break;
			case IMAGETYPE_PNG: $res = imagepng($newImage, $source); break;
			default: $res = imagejpeg($newImage, $source, $quality);
		}
		if (empty($res)) {
			throw new ApiAdapterException(3044); // Failed to save image
		}
	}

	/**
	* Resize image to fit inside viewport via cropping instead of stretching
	*
	* @param array $windowSize target viewport size
	* @param array $imgSize source image size
	* @param array $center optional x,y percentage coordinates, e.g. [null, 50/100] or [0.2, 0.8]
	* @return array $newProperties
	*/
	public static function getImageToWindowFit($windowSize, $imgSize, $center=array(null,null)) {
		//if (!$center) $center = array(null,null);
		$windowRatio = $windowSize[0]/$windowSize[1];
		$imgRatio = $imgSize[0]/$imgSize[1];
		$offsetX = $offsetY = 0;

		// this can be done in fewer lines, but for logic readability...
		if ($windowRatio > $imgRatio) {
			$newWidth = $windowSize[0];
			$newHeight = $newWidth/$imgRatio;
			if ($newHeight < $windowSize[1]) {
				$newHeight = $windowSize[1];
			}
			$offsetY = -1 * ($newHeight-$windowSize[1])/2;
			if ($center[1] !== null) {
				$offsetY += (.5-$center[1])*$newHeight;
			}
			if ($offsetY > 0) {
				$offsetY = 0;
			} else if ($offsetY < $windowSize[1]-$newHeight) {
				$offsetY = $windowSize[1]-$newHeight;
			}
		} else {
			$newHeight = $windowSize[1];
			$newWidth = $newHeight*$imgRatio;
			if ($newWidth < $windowSize[0]) $newWidth = $windowSize[0];
			$offsetX = -1*($newWidth-$windowSize[0])/2;
			if ($center[0] !== null) {
				$offsetX += (.5-$center[0])*$newWidth;
			}
			if ($offsetX > 0) {
				$offsetX = 0;
			} else if ($offsetX < $windowSize[0]-$newWidth) {
				$offsetX = $windowSize[0]-$newWidth;
			}
		}

		return array(
			'width' => $newWidth,
			'height' => $newHeight,
			'offsetX' => $offsetX,
			'offsetY' => $offsetY,
		);
	}

	protected static function increaseMemoryLimit($increaseTo=512){
		$currentLimit = ini_get('memory_limit');
		if (strpos(strtoupper($currentLimit),'G') === false && ((int) $currentLimit) < $increaseTo) {
			ini_set('memory_limit', $increaseTo.'m');
		}
	}

}

