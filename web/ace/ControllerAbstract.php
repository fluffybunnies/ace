<?php

namespace ace;

abstract class ControllerAbstract {

	private $params = null;

	protected function getParams(){
		if ($this->params !== null)
			return $this->params;
		return $this->params = array_merge($_POST,$_GET);
	}

	protected function getInput($input) {
		$params = $this->getParams();
		$opts = array();
		foreach ($input as $k => $required) {
			if ($required && !array_key_exists($k,$params))
				throw new \Exception('missing '.$k);
			$opts[$k] = isset($params[$k]) ? $params[$k] : null;
		}
		return $opts;
	}

}