<?php

$a = 1 ? 1 :
	(2 ? 2 :
	(3 ? 3 :
	4));
var_dump($a);

$a = 1 ? 1 :
	2 ? 2 :
	3 ? 3 :
	4;
var_dump($a);

$a = 1 ? 1 : 2 ? 2 : 3;
var_dump($a);
