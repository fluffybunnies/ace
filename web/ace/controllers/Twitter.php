<?php
/*
https://dev.twitter.com/docs/auth/application-only-auth
*/

namespace ace\controllers;
use \ace\Ace;
use \ace\ControllerAbstract;

class Twitter extends ControllerAbstract {
	private $appToken = null;

	public function getAppToken(){
		if ($this->appToken !== null)
			return $this->appToken;
		return $this->_getAppToken();
	}

	private function _getAppToken(){
		$key = Ace::getConfig('hopeTwitterAppKey');
		$secret = Ace::getConfig('hopeTwitterAppSecret');
		$creds = base64_encode(rawurlencode($key).':'.rawurlencode($secret));

		$ch = curl_init();
		curl_setopt($ch, CURLOPT_POST, true);
		curl_setopt($ch, CURLOPT_POSTFIELDS, 'grant_type=client_credentials');
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch, CURLOPT_URL, 'https://api.twitter.com/oauth2/token');
		curl_setopt($ch, CURLOPT_HTTPHEADER, array(
			"Authorization: Basic $creds",
		));
		$r = json_decode(curl_exec($ch), true);
		//if (!empty($_GET['debug'])) echo json_encode($r)."\n<br />";
		if (!is_array($r))
			throw new \Exception('unexpected response from twitter');
		if (isset($r['errors'])) {
			if (isset($r['errors'][0]['message']))
				throw new \Exception($r['errors'][0]['message']);
			throw new \Exception(json_encode($r['errors']));
		}
		if (!isset($r['access_token']))
			throw new \Exception('missing access_token');
		return $r['access_token'];
	}

	public function get(){
		$params = $this->getInput(array(
			'route' => true,
			'p' => false,
		));
		if (!is_array($params['p']))
			$params['p'] = array();

		$url = 'https://api.twitter.com/1.1/'.$params['route'].'.json';
		$url .= '?'.http_build_query($params['p']);
		$creds = $this->getAppToken();

		$ch = curl_init();
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_HTTPHEADER, array(
			"Authorization: Bearer $creds",
		));
		$r = json_decode(curl_exec($ch), true);
		//if (!empty($_GET['debug'])) echo json_encode($r)."\n<br />";
		if (!is_object($r) && !is_array($r))
			throw new \Exception('unexpected response from twitter');
		if (isset($r['error']))
			throw new \Exception($r['error']);
		if (isset($r['errors'])) {
			if (isset($r['errors'][0]['message']))
				throw new \Exception($r['errors'][0]['message']);
			throw new \Exception(json_encode($r['errors']));
		}
		return $r;
	}

}
