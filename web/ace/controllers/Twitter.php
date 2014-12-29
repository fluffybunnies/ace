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
		$key = Ace::getConfig('twitterAppKey');
		$secret = Ace::getConfig('twitterAppSecret');
		$creds = base64_encode(rawurlencode($key).':'.rawurlencode($secret));

		$r = Ace::curlPost('https://api.twitter.com/oauth2/token', array(
			'grant_type' => 'client_credentials',
		), array(
			CURLOPT_HTTPHEADER => array("Authorization: Basic $creds"),
		), true);
		//if (!empty($_GET['debug'])) { echo "_getAppToken()\n<br />"; echo "$r\n<br />"; }
		$r = json_decode($r, true);

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

		$r = Ace::curlGet($url, null, array(
			CURLOPT_HTTPHEADER => array("Authorization: Bearer $creds"),
		));
		//if (!empty($_GET['debug'])) { echo "get()\n<br />"; echo "$r\n<br />"; }
		$r = json_decode($r, true);

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
