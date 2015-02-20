<?php

namespace ace\helpers;
use \ace\Ace;
use \ace\HelperAbstract;


class Protect extends HelperAbstract {

	public static function preventBruteForce($cap=1, $usePath=true, $bank=50){
		try {
			$key = md5($usePath ? REQUEST_PATH : $_SERVER['REQUEST_URI']);
			$fn = WEBROOT."/public-out/protect.preventBruteForce.$key";
			if (is_file($fn)) {
				$log = json_decode(file_get_contents($fn), true);
				if (!is_array($log))
					throw new \Exception('corrupted log file; decode');
			} else {
				$log = array();
			}
			$call = array(
				't' => microtime(true),
				'r' => $_SERVER['REQUEST_URI'],
				'ip' => Ace::clientIp(),
				's' => 1,
			);
			if (!empty($log)) {
				$lastCall = end($log);
				if (!is_array($lastCall) || !is_numeric(Ace::g($lastCall,'t')))
					throw new \Exception('corrupted log file; item');
				if ($call['t'] < $lastCall['t']+$cap)
					$call['s'] = 0;
			}
			$log[] = $call;
			if (($numLogs = count($log)) > $bank)
				$log = array_splice($log, $numLogs-$bank);
			if (!file_put_contents($fn, json_encode($log)))
				throw new \Exception('failed to write log file');
			//if (!empty($_GET['debug'])) Ace::varDump($log);
			if ($call['s'] == 0)
				throw new \Exception('too many requests');
		} catch (\Exception $e) {
			echo $e->getMessage();
			exit;
		}
	}

}
