/*
	This file owns window.fbAsyncInit!
*/

ace.fb = {
	config: {
		key: 'fb'
	}

	/*,init: function(){
		var z = this;
		if (z.inited) return false;
		z.inited = true;

		return true;
	}*/

	,ready: function(cb){
		ace.bus.ready('fb-sdk-loaded',cb);
	}

	,loadSdk: function(cnf){
		var z = this,s,fjs;
		window.fbAsyncInit = function(){
			FB.init(cnf);
			ace.bus.trigger('fb-sdk-loaded');
		}
		s = document.createElement('script');
		s.id = 'facebook-jssdk';
		s.async = true;
		s.src = 'https://connect.facebook.net/en_US/sdk.js';
		fjs = document.getElementsByTagName('script')[0];
		fjs.parentNode.insertBefore(s, fjs)
	}

	,isLoggedIn: function(cb){
		FB.getLoginStatus(function(res){
			cb(res.status == 'connected');
		});
	}

	,login: function(cb, opts){
		opts = $.extend({scope: scope}, opts);
		this.ready(function(){
			FB.login(cb,opts);
		});
	}
}
//ace.fb.init();
