<?php
namespace ace;


class Ace {

	public static $config = array();
	public static $cache = array();
	protected static $TMZ = null;
	protected static $db = null;

	const EARTH_RADIUS_MILES = 3956;
	//const EARTH_RADIUS_MILES = 3961; // optimized for ~39deg latitude (washington dc)
	//const EARTH_RADIUS_MILES = 3953.42801058; // forget where i got this, google maps api?

	private function __clone(){}
	private function __construct(){}
	
	public static function loadConfig() {
		extract(self::$config);
		$args = func_get_args();
		foreach ($args as $a){
			if (is_array($a)) 
				extract($a);
			else if (is_file($a))
				include $a;
		}
		self::$config = get_defined_vars();
	}

	/**
		Request value loaded from config.php / config.local.php
	*/
	public static function getConfig($k) {
		return self::g(self::$config,$k);
	}


	/*
	public static function getDb(){
		if (!self::$db)
			self::$db = DB::getPdo();
		return self::$db;
	}
	*/


	// BEGIN utils

	/**
		Example:
			if (Ace::g($_POST,'param') == 'abc') ...
			instead of
			if (isset($_POST['param']) && $_POST['param'] == 'abc') ...
		Example:
			$host = Ace::g($_SERVER,array('HOST_NAME','SERVER_NAME'));
			instead of
			$host = isset($_SERVER['HOST_NAME']) ? $_SERVER['HOST_NAME'] : isset($_SERVER['SERVER_NAME']) ? $_SERVER['SERVER_NAME'] : null;
	*/
	public static function g($p,$k,$d=null) {
		if (is_array($p)) {
			if (!is_array($k))
				return array_key_exists($k,$p) ? $p[$k] : $d;
			for ($i=0,$c=count($k);$i<$c;$i++)
				if (array_key_exists($k[$i],$p))
					return $p[$k[$i]];
		} else if (is_object($p)) {
			if (!is_array($k))
				return property_exists($p,$k) ? $p->$k : $d;
			for ($i=0,$c=count($k);$i<$c;$i++)
				if (property_exists($p,$k[$i]))
					return $p->$k[$i];
		}
		return $d;
	}

	/**
		Works behind ELB using HTTP_X_FORWARDED_PROTO
	*/
	public static function onHttps(){
		return self::g($_SERVER,'HTTP_X_FORWARDED_PROTO') == 'https' || self::g($_SERVER,'HTTPS');
	}

	/**
		Redirect to https://self
	*/
	public static function enforceHttps(){
		if (!self::onHttps()) {
			$redirect = 'https://'.self::g($_SERVER,array('HTTP_HOST','SERVER_NAME')).$_SERVER['REQUEST_URI'];
			header("Location: $redirect");
			exit;
		}
	}

	/**
		Optimize asset caching by marking url with file-modified-time
	*/
	public static function vres($path, $return=false) {
		$p = $path . (strpos($path,'?') === false ? '?' : '&') . filemtime(WEBROOT.$path);
		if ($return)
			return $p;
		echo $p;
	}

	/**
		For debugging: exit with $message
	*/
	public static function e(){
		echo "\n---- debug ----\n\n";
		$args = func_get_args();
		foreach ($args as $arg) {
			self::varDump($arg);
			echo "\n\n";
		}
		try{throw new \Exception;}catch(\Exception $e){exit("$e");}
	}

	/**
		Returns true if array does not have continuously ascending numeric keys
	*/
	public static function isAssoc($arr) {
		return array_keys($arr) !== range(0, count($arr) - 1);
	}

	/**
		HTML-formatted alternative to var_dump
	*/
	public static function varDump($v, $exit=false) {
		echo '<div style="margin:4px;border:1px dotted #000;padding:4px;background:#eee;color:#000;font-size:12px;font-family:monospace;clear:both;">'."\n";
		echo self::_varDump($v);
		echo "\n</div>";
		if ($exit)
			exit;
	}

	private static function _varDump($v) {
		$nl = "<br />\n";
		if (is_null($v)) $type = 'null';
		else if (is_bool($v)) $type = 'bool';
		else if (is_int($v)) $type = 'int';
		else if (is_float($v)) $type = 'float';
		else if (is_string($v)) $type= 'string';
		else if (is_resource($v)) $type = 'resource';
		else if (is_array($v)) $type = 'array';
		else if (is_object($v)) $type = 'object';

		$ftype = $type.' ';

		if ($type == 'null') $val = 'null';
		else if ($type == 'bool') $val = $ftype.($v ? 'true' : 'false');
		else if ($type == 'int' || $type == 'float') $val = $ftype.$v;
		else if ($type == 'string') $val = $type.'('.strlen($v).') "'.$v.'"';
		else if ($type == 'resource') $val = $type.' ['.get_resource_type($v).']';
		else if ($type == 'array') {
			$val = array();
			foreach ($v as $key => $elm) {
				$key_str = is_int($key) ? $key : '"'.$key.'"';
				$val[] = '[' . $key_str . '] => ' . self::_varDump($elm);
			}
			$val = $type.' (<div style="padding-left:3em;">' . implode(','.$nl,$val) . '</div>)';
		} else if ($type == 'object') {
			$class = get_class($v);
			$val = array();
			foreach ($v as $key => $elm) $val[] = "'".$key . "' => " . self::_varDump($elm);
			$val = $type.'['.$class.'] {<div style="padding-left:3em;">' . implode(','.$nl,$val) . '</div>}';
		}

		return $val;
	}

	/**
		Insert into an array without checking isset()
		Example:
			$house = array(
				'bedroom' => array('bed','dresser'=>array('pants')),
			);
			Ace::putDeep($house,'kitchen>oven','bread');
			Ace::putDeep($house,'bedroom>dresser[]','shirt');
			Ace::varDump($house);
	*/
	public static function putDeep(&$root, $where, $what) {
		/**
			Ex:
				$house = array(
					'bedroom' => array('bed','dresser'=>array('pants')),
				);
				\ace\Ace::putDeep($house,'kitchen>oven','bread');
				\ace\Ace::putDeep($house,'bedroom>dresser[]','shirt');
				\ace\Ace::putDeep($house,'kitchen>cabinets[]>corner','salt');
			Note:
				For simplicity, adjoined square brackets ('[]') are not allowed in key names
		**/
		$keys = explode('>',$where);
		for ($i=0,$c=count($keys);$i<$c;$i++) {
			$k = $keys[$i];
			if (($ccat = $k) == ($k = str_replace('[]','',$k)))
				$ccat = false;
			if (!isset($root[$k]))
				$root[$k] = array();
			$root = &$root[$k];
			if ($ccat) {
				$root[] = null;
				end($root);
				$root = &$root[key($root)];
			}
		}
		return $root = $what;
	}

	/**
		Uses list from http://detectmobilebrowsers.com/ against HTTP_USER_AGENT
	*/
	public static function onMobile($devKey=null) {
		// list taken from http://detectmobilebrowsers.com/
		if ($devKey !== null && !empty($_GET[$devKey]))
			return true;
		if (array_key_exists('onMobile', self::$cache))
			return self::$cache['onMobile'];
		$useragent = self::g($_SERVER,'HTTP_USER_AGENT','');
		return self::$cache['onMobile'] = !!preg_match('/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i',$useragent)||preg_match('/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i',
			substr($useragent,0,4)
		);
	}

	/**
		Works behind ELB and other proxies
	*/
	public static function clientIp() {
		if (array_key_exists('clientIp', self::$cache))
			return self::$cache['clientIp'];
		$check = array('X-Forwarded-For','HTTP_CLIENT_IP','HTTP_X_FORWARDED_FOR','HTTP_X_FORWARDED','HTTP_X_CLUSTER_CLIENT_IP','HTTP_FORWARDED_FOR','HTTP_FORWARDED','REMOTE_ADDR');
		$ip = null;
		for ($i=0,$c=count($check);$i<$c;$i++) {
			$k = $check[$i];
			if (!isset($_SERVER[$k]) || !is_string($_SERVER[$k]))
				continue;
			$possibles = explode(',', $_SERVER[$k]);
			for ($n=0,$m=count($possibles);$n<$m;$n++) {
				if (filter_var($possibles[$n],FILTER_VALIDATE_IP) !== false) {
					$ip = $possibles[$n];
					break 2;
				}
			}
		}
		return self::$cache['clientIp'] = $ip;
	}

	/**
		curlGet( $url [, $params [, $curlOpts ]] )
	*/
	public static function curlGet($url, $params=array(), $curlOpts=array()) {
		$ch = curl_init();
		if (!empty($params))
			$url .= (strpos($url,'?') === false ? '?' : '&') . http_build_query($params);
		//curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch, CURLOPT_URL, $url);
		foreach ($curlOpts as $k => $v)
			curl_setopt($ch, $k, $v);
		return curl_exec($ch);
	}

	/**
		curlPost( $url [, $params [, $curlOpts [, $urlEncodedParams = false ]]] )
	*/
	public static function curlPost($url, $params=array(), $curlOpts=array(), $urlEncodedParams=false) {
		$args = func_get_args();
		for ($i=1,$c=count($args);$i<$c;$i++)
			if ($args[$i] === true)
				$urlEncodedParams = true;

		$ch = curl_init();
		//curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_POST, true);

		if ($urlEncodedParams) // application/x-www-form-urlencoded
			curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($params));
		else // multipart/form-data
			curl_setopt($ch, CURLOPT_POSTFIELDS, $params);

		if (is_array($curlOpts)) {
			foreach ($curlOpts as $k => $v)
				curl_setopt($ch, $k, $v);
		}

		return curl_exec($ch);
	}

	/**
		curlDelete( $url [, $params [, $curlOpts ]] )
	*/
	public static function curlDelete($url, $params=array(), $curlOpts=array()) {
		$curlOpts[CURLOPT_CUSTOMREQUEST] = 'DELETE';
		return self::simpleCurlGet($url, $params, $curlOpts);
	}

	/**
		For use when loading a file via php instead of webserver
	*/
	public static function setAssetHeadersForFilename($filename){
		if (preg_match('/\.(jpe?g|png|gif|svg|ico|swf|css|js)$/', $filename, $m)) {
			if ($m[1] == 'css') header('content-type: text/css');
			else if ($m[1] == 'js') header('content-type: application/javascript');
			else if ($m[1] == 'swf') header('content-type: application/x-shockwave-flash');
			else header('content-type: image/'.$m[1]);
			header('cache-control: max-age=3600');
		} else if (preg_match('/\.(html?)$/', $filename)) {
			header('content-type: text/html; charset=utf-8');
		}
	}


	/**
		Calculate the distance between 2 lat/lng points
	*/
	public static function sphericalDistance($lat1, $lng1, $lat2, $lng2, $units='miles'){
		$lat1 = deg2rad($lat1);
		$lng1 = deg2rad($lng1);
		$lat2 = deg2rad($lat2);
		$lng2 = deg2rad($lng2);
		$distance = acos(cos($lat1) * cos($lat2) * cos($lng2-$lng1) + sin($lat1) * sin($lat2));
		if ($units == 'miles')
			$distance *= self::EARTH_RADIUS_MILES;
		return $distance;
	}

/* First method appeared mildly faster in a rushed benchmark test
	public static function sphericalDistance($lat1, $lng1, $lat2, $lng2, $units='miles'){
		$lat1 = deg2rad($lat1);
		$lng1 = deg2rad($lng1);
		$lat2 = deg2rad($lat2);
		$lng2 = deg2rad($lng2);
		$dlat = $lat2-$lat1;
		$dlng = $lng2-$lng1;
		$distance = asin(sqrt(
			pow(sin($dlat/2), 2) + cos($latFrom) * cos($latTo) * pow(sin($dlng/2), 2)
		));
		if ($units == 'miles')
			$distance *= self::EARTH_RADIUS_MILES;
		return $distance;
	}
*/

	/**
		Enforce app-consistent timezone reference
	*/
	public static function strToTime($str, $time=null) {
		if ($time === null)
			$time = self::time();
		$origTmz = @date_default_timezone_get();
		date_default_timezone_set(self::aceTmz());
		$time = strtotime($str, $time);
		date_default_timezone_set($origTmz);
		return $time;
	}

	public static function strToTimeUtc($str, $time=null) {
		if ($time === null)
			$time = self::time();
		$origTmz = @date_default_timezone_get();
		date_default_timezone_set('UTC');
		$time = strtotime($str, $time);
		date_default_timezone_set($origTmz);
		return $time;
	}

	public static function date($format, $time=null) {
		if ($time === null)
			$time = self::time();
		$origTmz = @date_default_timezone_get();
		date_default_timezone_set(self::aceTmz());
		$date = date($format, $time);
		date_default_timezone_set($origTmz);
		return $date;
	}

	public static function dateUtc($format, $time=null) {
		if ($time === null)
			$time = self::time();
		$origTmz = @date_default_timezone_get();
		date_default_timezone_set('UTC');
		$date = date($format, $time);
		date_default_timezone_set($origTmz);
		return $date;
	}

	public static function dbTime($time=null) {
		if ($time === null) $time = self::time();
		return self::date('Y-m-d H:i:s', $time);
	}

	public static function dbTimeUtc($time=null) {
		if ($time === null) $time = self::time();
		return self::dateUtc('Y-m-d H:i:s', $time);
	}

	public static function aceTmz() {
		if (isset(self::$TMZ))
			return self::$TMZ;
		$defaultTmz = self::getConfig('defaultTmz');
		if (empty($defaultTmz))
			$defaultTmz = 'America/Los_Angeles';
		return self::$TMZ = $defaultTmz;
	}

	/**
	* Use this in place of time() so we can write unit tests
	*/
	public static $time = null;
	public static function time() {
		return isset(self::$time) ? self::$time : time();
	}

	// END utils


}
