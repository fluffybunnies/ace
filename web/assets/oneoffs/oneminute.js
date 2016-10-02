/*
<script src="http://ace.fabfitfun.com/assets/oneoffs/oneminute.js"></script>
*/

function OneMinuteContest(){
	var self = this
	self.$ = {}

	self.findParentWindow(function(err){
		if (err) return console.error('failed to find parent window',err)
		self.loadJquery(function(err,$){
			if (err) return console.error(self.key,'failed to load jquery',err)
			self.jQuery = $

			self.findAndInsertWidgetPlaceholder(function(err){
				if (err) return console.error(self.key,err)
				self.loadCss()
				self.loadExternalScripts()
				self.functionalize()
			})
		})
	})
}

OneMinuteContest.prototype.key = 'OneMinuteContest'
OneMinuteContest.prototype.WOOBOX_CAMPAIGN_ID = 'bd4rwu'

OneMinuteContest.prototype.findParentWindow = function(cb){
	var self = this
	setTimeout(function(){
		var reasonableLimit = 5
		self.parentWindow = window
		self.parentFrameElement = self.parentWindow.frameElement
		while (self.parentWindow.location != window.parent.location && --reasonableLimit) {
			self.parentFrameElement = self.parentWindow.frameElement
			self.parentWindow = window.parent
		}
		console.log('!! PARENT',reasonableLimit,self.parentWindow,self.parentFrameElement)
		if (reasonableLimit == 0) {
			return cb('too many recursions')
		}
		cb()
	},0)
}

OneMinuteContest.prototype.findAndInsertWidgetPlaceholder = function(cb){
	var self = this
	setTimeout(function(){
		var parentWindow = window
			,reasonableLimit = 5
		while (window.location != window.parent.location && --reasonableLimit) {
			parentWindow = window.parent
		}
		console.log('PARENT WINDOW',parentWindow)
		if (reasonableLimit == 0) {
			return cb('failed to find parent window, too many recursions')
		}
		self.$.insertCont = $('#OneMinuteContest-submit, #OneMinuteContest-vote')
		self.defaultPage = self.$.insertCont.attr('id') == 'OneMinuteContest-submit' ? 'submit' : 'vote'
		if (!self.$.insertCont.length) {
			return cb('could not find container element')
		}
		self.$.insertCont.attr('data-offer',self.WOOBOX_CAMPAIGN_ID)
		self.$.insertCont.addClass('woobox-offer')
		cb()
	},0)
}

OneMinuteContest.prototype.loadCss = function(){
	var self = this
	$('body').append('<style type="text/css">'
		+ '.woobox-offer{max-width:none !important}'
	+ '</style>')
}

OneMinuteContest.prototype.loadExternalScripts = function(){
	var self = this
	$.ajax({
		url: 'https://woobox.com/js/plugins/woo.js'
		,cache: true
		,dataType: 'script'
	})
}

OneMinuteContest.prototype.functionalize = function(){
	var self = this
	
}

OneMinuteContest.prototype.loadJquery = function(cb){
	if (window.jQuery) {
		setTimeout(gotIt,0)
	}
	this.getScript('https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js',gotIt)
	function gotIt(){
		cb(false,window.jQuery)
	}
}

OneMinuteContest.prototype.getScript = function(src,cb){
	var script = self.parentWindow.document.createElement('script')
	script.async = true
	script.onload = function(){cb()}
	script.onerror = cb
	script.src = src
	self.parentWindow.document.body.appendChild(script)
	function done(err){
		cb(err)
		cb = function(){}
	}
}

;(function(){
	new OneMinuteContest
}());
