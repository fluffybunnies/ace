<?php
namespace ace\core;

use \ace\Ace;
use \ace\core\DaoAbstract;
use \ace\dao\Exception as ApiDaoException;


abstract class DaoSqlAbstract extends DaoAbstract {

	protected $tbls = array(/*
		keyed table list
			- null inputs dont pass required=>true check
	*/);


	protected function makeSqlSet($fields) {
		$db = Ace::getDb();
		$keys = $vals = $set = $where_and = array();
		foreach ($fields as $k => $v) {
			if (is_string($v)) {
				$v = $db->quote($v);
			} else if ($v === null) {
				$v = 'null';
			}
			$keys[] = $k;
			$vals[] = $v;
			$set[] = "$k=$v";
		}
		return array(
			'set' => implode(',',$set),
			'insert' => '('.implode(',',$keys).') values ('.implode(',',$vals).')',
		);
	}

	protected function parseAndValidateInput($tblKey,&$params,$ignoreUndefined=false) {
		$this->checkRequired($tblKey,$params,$ignoreUndefined);
		$this->parseInput($tblKey,$params);
		$this->validateInput($tblKey,$params);
	}

	protected function checkRequired($tblKey,&$params,$ignoreUndefined=true) {
		if (!isset($this->tbls[$tblKey])) {
			return;
		}
		foreach ($this->tbls[$tblKey]['fields'] as $k => $def) {
			if (empty($def['required'])) {
				continue;
			}
			if ($ignoreUndefined && !array_key_exists($k,$params)) {
				continue;
			}
			if (!isset($params[$k])) {
				throw new ApiDaoException(4002, null, $k);
			}
		}
	}

	/**
	* Format input so validateInput doesn't throw errors.
	* Each field will be a string, numeric, or null.
	*/
	protected function parseInput($tblKey,&$params) {
		if (!isset($this->tbls[$tblKey])) {
			return;
		}
		foreach ($this->tbls[$tblKey]['fields'] as $k => $def) {
			if (!array_key_exists($k,$params)) {
				continue;
			}
			$val = &$params[$k];

			if ($val === '' && array_key_exists('empty_string_defaults_to',$def)) {
				$val = $def['empty_string_defaults_to'];
			}

			if (!isset($def['type'])) {
				continue;
			}
			switch ($def['type']) {
				case 'json':
					if (($val = json_encode($val)) === false) {
						throw new ApiDaoException(4020, null, $k); // JSON input failed to parse
					}
				break;
				case 'timestamp':
					if ($val !== null) {
						if (is_numeric($val)) {
							$val = (int) $val;
						} else {
							$val = (string) $val;
							if (($val = Ace::strToTime($val)) === false) {
								throw new ApiDaoException(4021, null, $k); // Invalid timestamp input
							}
						}
					}
				break;
				default:
					if ($val !== null && !is_string($val) && !is_int($val) && !is_float($val)) {
						$val = (string) $val;
					}
			}
		}
	}

	protected function validateInput($tblKey,$params) {
		if (!isset($this->tbls[$tblKey])) {
			return;
		}
		foreach ($this->tbls[$tblKey]['fields'] as $k => $def) {
			if (!array_key_exists($k,$params) || !isset($def['type'])) {
				continue;
			}
			$val = $params[$k];

			// string, json maxlength
			if (($def['type'] == 'string' || $def['type'] == 'json') && isset($def['maxlength'])) {
				if (strlen($val) > $def['maxlength']) {
					throw new ApiDaoException(4022, null, $k); // Maxlength exceeded
				}	
			}

			// numerics
			if ($def['type'] == 'float' || $def['type'] == 'int' || $def['type'] == 'timestamp') {
				if ($val !== null && !is_numeric($val)) {
					throw new ApiDaoException(4023, null, $k); // Invalid number
				}
			}

			// string restrictions
			if (isset($def['regex']) && $def['type'] == 'string') {
				if ($val !== null) {
					if (!(is_string($val) || is_numeric($val))) {
						throw new ApiDaoException(4024, null, $k); // Invalid type
					}
					if (!preg_match($def['regex'],$val)) {
						throw new ApiDaoException(4025, null, "$k does not match ".$def['regex']); // Failed regex restriction
					}
				}
			}

			// enums
			if ($def['type'] == 'enum') {
				$pass_enum = false;
				for ($i=0,$c=count($def['vals']);$i<$c;$i++) {
					if ($val == $def['vals'][$i]) {
						$pass_enum = true;
						break;
					}
				}
				if (!$pass_enum) {
					throw new ApiDaoException(4026, null, $k); // Invalid enum
				}
			}

		}
	}

	protected function parseOutput($tblKey,$row) {
		if (!isset($this->tbls[$tblKey])) {
			return $row;
		}
		foreach ($row as $k => &$v) {
			if (!isset($this->tbls[$tblKey]['fields'][$k]['type'])) {
				continue;
			}
			if ($v === null) {
				continue;
			}
			switch ($this->tbls[$tblKey]['fields'][$k]['type']) {
				case 'int': $v = (int) $v; break;
				case 'timestamp': $v = (int) $v; break;
				case 'float': $v = (float) $v; break;
				case 'json': $v = json_decode($v); break;
			}
		}
		return $row;
	}

}
