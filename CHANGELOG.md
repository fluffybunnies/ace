## 0.1.0 (2015-07-25)
[https://github.com/fluffybunnies/ace/compare/519a838cce7121b766599bd529750cf1a08a5245...3de3fbf0e85d2737c278ced48c42806134223ae3](diff)

Features

	- Bumped to 0.1.0: New API scaffolding, paving the path for v1.0.0
		- Design pattern: CAO( Controller > Adapter > DAO < DTO )
	- New to `\ace\Ace`
		- `setAssetHeadersForFilename()`, `sphericalDistance()`, date/time helpers
	- Codified Exceptions	
	- Routes split by request method
	- New to `ace.js`
		- `ace.util.formatDate`
		- `ace.getAppVersion`
		- `ace.log`
	- `ace.loader.js`
		- No more finickyness re overlapping loader animations
	- `ace.highlight.js`
		- Try it, it's fun. Probably turn it into a jQ extension later
	- `ace.resource.js`
		- On-demand versioned asset loading. Think require with packs and css.
	- `ace.req.js`
		- Wrapper for calling api: `ace.req('comments','post',{msg:'sup!'})`
	- New shorthand: `ace.pop('Message body', 'Message header')`
	- Some new button stylez
	- Node webserver: `test_php_server.js`


Bugs

	- Patched XSS and CSRF vulnerabilities
	- Fixed issue with the event bus' `ready()` implementation
	- Fixed tooltip y positioning when !opts.fixed



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
