<?php
namespace ace\core;

use \ace\Ace;
use \ace\controllers\Exception as ApiControllerException;

abstract class ApiControllerAbstract {

	protected $_options;
	protected $_data = array();
	protected $_headers = array();

	public function __construct(){
		$this->_options = array_merge($_POST, $_GET);
		if (isset($_SERVER['HTTP_IF_NONE_MATCH'])) {
			$this->_options['data_version'] = trim($_SERVER['HTTP_IF_NONE_MATCH'],'"');
		}
	}

	public function __destruct(){
		$this->_data = null;
		$this->_options = null;
		$this->_headers = null;
	}


	protected function requireAuth($role=null){} // #stub


	protected function setOptions($opts){
		$this->_options = array_merge($this->_options, $opts);
	}

	public function getOptions(){
		return $this->_options;
	}


	protected function getInput($input) {
		$options = $this->getOptions();
		$opts = array();
		foreach ($input as $k => $required) {
			if ($required && !array_key_exists($k,$options))
				throw new ApiControllerException(2002, null, $k);
			$opts[$k] = isset($options[$k]) ? $options[$k] : null;
		}
		return $opts;
	}


	/**
	* Strips all properties from each item in passed array except $keep
	* Creates array copies of each item (does not modify them in place)
	*
	* @param array $items
	* @return array $strippedItems
	*/
	protected function stripListForJson(&$items, Array $keep) {
		foreach ($items as $key => &$item) {
			$newObj = array();
			foreach ($keep as $k) {
				if (is_object($item))
					if (property_exists($item,$k))
						$newObj[$k] = $item->$k;
				else if (array_key_exists($k,$item))
					$newObj[$k] = $item[$k];
			}
			$items[$key] = $newObj;
		}
		return $items;
	}


}