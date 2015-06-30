## 0.0.21 (2015-06-30)

Features

	- +ace.utils: `isWithinViewport()`, `isFullyWithinViewport()`, `hash()`, `obfu()`, `deobfu()`, `deleteCookie()`, `padZ()`
	- +ace.fb.js
	- Improved performance for `ace.util.formatInteger()`
	- Reorganized libs


Bugs

	- Fixed bug with `ace.ui.twitter` when metadata was missing from tweets



## 0.0.20 (2015-04-09)

Features

	- Improved detail in README.md
	- Hyperlink media urls in Twitter feed


Bugs

	- Fixed encoding method for Twitter OAuth



## 0.0.16 (2015-02-22)

Features

	- + Ability to query Instagram by screename instead of numeric id


Bugs

	- Handle missing caption in Instagram api response



## 0.0.15 (2015-02-20)

Features

	- New helper Protect. First method preventBruteForce() provides protection against DOS or brute-force attacks against specific routes (e.g. wp-login.php for wordpress).


Bugs

	- Helper SES was broken when sending normal emails due to lack of backwards compatibility with new AWS SDK.



## 0.0.12 (2014-12-06)

Features

	- Option for more intelligent ace.util.capitalize when passed a proper name
