/*
	To Do
		- get working on https and remove long polling hack
		- http is still sending logout event. fix this too #hack00
		- clean up old decks in node so doesnt take up mem
			- do this async

Test old system:
http://www.jewelmint.com/terms-of-service?local=1
amint.resource.fetch(['http://static-start.jewelmint.com/AB_Resources/amint/pv2/amint.chat.css','http://static-start.jewelmint.com/AB_Resources/amint/pv2/amint.chat.js'],function(){amint.chat.init()})
*/

ace.chat = {
	config: {
		key: 'chat'
		,enabled: true

		// doesnt have to be same domain, ex:
		//,socket: 'https://sup.beachmintdev.com'
		//,socketJs: '//sup.beachmintdev.com/socket.io/socket.io.js'
		// if socket/socketJs is a number, will use local domain with the # as the port
		,socket: 8001
		,socketJs: 8001

		// checks whitelist first if not null
		//,routesWhitelist: null
		,routesWhitelist: /(^\/demo\/?)/
		,routesBlacklist: /(^\/?$)|(^\/checkout\/?$)/i

		,characterLimit: 117
		,teaserHeight: 4
		,tempUserCookie: 'chat-user'
		,tempUserCookieLifetime: 180*1000*60*60*24 // 180 days
		,openStateCookie: 'chat-open'
		,openStateCookieLifetime: 1000*60*60*24 // 1 day
		,usersTab: true
		,longPollHackFix: true
		,showSystemMessages: true
	}
	,$: {}
	,socket: null
	,open: false

	,init: function(){
		var z = this;
		if (z.inited) return false;
		z.inited = true;
		//ace.bus.trigger(z.config.key+':loaded');

		if (!z.config.enabled) {
			console.log(z.config.key, 'disabled');
			return;
		}
		if (z.config.routesWhitelist && !window.location.pathname.match(z.config.routesWhitelist)) {
			console.log(z.config.key, 'route not whitelisted');
			return;
		}
		if (z.config.routesBlacklist && window.location.pathname.match(z.config.routesBlacklist)) {
			console.log(z.config.key, 'route blacklisted');
			return;
		}

		z.deck = z._getDeck();
		if (!z.deck) {
			console.log(z.config.key, 'room not configured');
			return;
		}

		z.resolveSocketConfig();

		z.protocol = window.location.protocol;

		z.authenticateUser(function(){
			$.ajax({
				url: z.config.socketJs
				,dataType: 'script'
				,cache: true
				,success: function(){
					$(function(){
						z._build();
						z._functionalize();
						z._setUpSocket();
						if (ace.util.getCookie(z.config.openStateCookie)) {
							z._toggleOpen();
						}
					});
				}
			});
		});

		return true;
	}

	,resolveSocketConfig: function(){
		var z = this;
		if (typeof z.config.socket == 'number') {
			z.config.socket = window.location.protocol+'//'+window.location.hostname+':'+z.config.socket;
			console.log(z.config.key, 'setting socket to '+z.config.socket);
		}
		if (typeof z.config.socketJs == 'number') {
			z.config.socketJs = window.location.protocol+'//'+window.location.hostname+':'+z.config.socketJs+'/socket.io/socket.io.js';
			console.log(z.config.key, 'setting socketJs to '+z.config.socketJs);
		}

		// for local devving...
		if (ace.util.getParameterByName('local')) {
			z.config.socket = 'http://localhost:3000';
			z.config.socketJs = 'http://localhost:3000/socket.io/socket.io.js';
		}
	}

	,authenticateUser: function(cb){
		// make sure user is logged in to your real system
		// at the minimum, this method should set this.user.id
		var z = this;
		z.user = z.getTempUser();
		z.saveTempUser(z.user);
		setTimeout(cb,0);
	}

	,getTempUser: function(){
		var z = this
			,userId = ace.util.getCookie(z.config.tempUserCookie)
		;
		return {
			//id: userId ? userId : Math.round((+new Date)/1000)
			id: userId ? userId : ace.util.rand(100,999999)
		};
	}

	,saveTempUser: function(user){
		var z = this;
		ace.util.setCookie(z.config.tempUserCookie, user.id, {expires: z.config.tempUserCookieLifetime});
	}

	,_getDeck: function(){
		var z = this
			,deck
		;
		deck = {
			id: '*'
			,name: 'Public'
		};
		if (!window.location.hostname.match(/^www/) || ace.util.getParameterByName('local'))
			deck.id = 'dev/'+deck.id;
		console.log(z.config.key,'deck',deck);
		return deck;
	}

	,_build: function(){
		var z = this
			,x = ace.cssKey(z)
		;

		z.$.cont = $('<div class="'+x+' is-inactive">'
			+ '<a class="'+x+'-open-btn" href="#"></a>'
			+ '<div class="'+x+'-chat"><div class="'+x+'-chat-inner">'
				+ '<div class="'+x+'-title">'
					+ '<div class="'+x+'-title-title">'+z.deck.name+' Chat</div>'
					+ '<div class="'+x+'-stats"></div>'
				+ '</div>'
				+ '<div class="'+x+'-out"><div class="'+x+'-out-inner"></div></div>'
				+ '<div class="'+x+'-type">'
					+ '<input class="'+x+'-type-input" maxlength="'+z.config.characterLimit+'" type="text" />'
				+ '</div>'
			+ '</div></div>'
			+ (z.config.usersTab ? '<div class="'+x+'-utab">'
				+ '<a class="'+x+'-utab-open-btn" href="#"></a>'
				+ '<div class="'+x+'-utab-inner">'
					+ '<div class="'+x+'-utab-title">Users</div>'
					+ '<div class="'+x+'-utab-content"></div>'
				+ '</div>'
			+ '</div>'
			: '')
		+ '</div>');
		z.$.inner = z.$.cont.find('div.'+x+'-inner');
		z.$.title = z.$.cont.find('div.'+x+'-title');
		z.$.stats = z.$.cont.find('div.'+x+'-stats');
		z.$.open = z.$.cont.find('a.'+x+'-open-btn');
		z.$.chat = z.$.cont.find('div.'+x+'-chat');
		z.$.chat_inner = z.$.chat.find('div.'+x+'-chat-inner');
		z.$.out_cont = z.$.chat.find('div.'+x+'-out');
		z.$.out = z.$.out_cont.find('div.'+x+'-out-inner');
		z.$.type = z.$.chat.find('input.'+x+'-type-input');

		if (z.config.usersTab) {
			z.$.utab = z.$.cont.find('div.'+x+'-utab');
			z.$.utab_inner = z.$.utab.find('div.'+x+'-utab-inner');
			z.$.utab_open = z.$.utab.find('a.'+x+'-utab-open-btn');
			z.$.utab_content = z.$.utab.find('div.'+x+'-utab-content');
			z.$.utab_inner.css('height','0');
		}

		z.$.cont.css('height',z.config.teaserHeight+'px');

		$('body').append(z.$.cont);
	}

	,_functionalize: function(){
		var z = this;

		z.$.open.bind('click',function(e){
			e.preventDefault();
			z._toggleOpen();
		});

		z.$.open.bind('mouseover mouseout',function(e){
			if (z.open)
				return;
			if (typeof z._mouseoutTimeout == 'number') {
				clearTimeout(z._mouseoutTimeout);
			}
			if (e.type == 'mouseover') {
				z.$.cont.stop().animate({
					height: ace.util.trueDim(z.$.title).h+'px'
				},{
					duration: 100
				});
			} else {
				z._mouseoutTimeout = setTimeout(function(){
					z.$.cont.stop().animate({
						height: z.config.teaserHeight+'px'
					},{
						duration: 100
					});
				},800);
			}
		});

		if (z.config.usersTab)
			z.setUpUsersTab();
	}

	,setUpUsersTab: function(){
		var z = this;
		z.$.utab.bind('click',function(e){
			e.preventDefault();
			z._toggleOpen();
		});
		z.$.utab.bind('mouseover mouseout',function(e){
			var height;
			if (typeof z._utabMouseoutTimeout == 'number')
				clearTimeout(z._utabMouseoutTimeout);
			if (e.type == 'mouseover') {
				if (z._utab_open || !z.open)
					return;
				z._utab_open = true;
				height = ace.util.trueDim(z.$.utab_inner.css({
					visibility: 'hidden'
					,height: 'auto'
				})).h;
				z.$.utab_inner.css({
					height: 0
					,visibility: ''
				});
				z.$.utab_inner.stop().animate({
					height: height+'px'
				},{
					duration: 100
					,complete: function(){
						// just in case content gets re-rendered during animation
						z.$.utab_inner.css('height','auto');
					}
				});
			} else {
				z._utabMouseoutTimeout = setTimeout(function(){
					z._utab_open = false;
					z.$.utab_inner.stop().animate({
						height: 0
					},{
						duration: 100
					});
				},800);
			}
		});	
	}

	,_setUpSocket: function(){
		var z = this
			,x = ace.cssKey(z)
		;
		z.$.cont.removeClass('is-inactive');
		z.$.out.html('<div class="'+x+'-out-loading">loading...</div>');

		if (z.config.longPollHackFix && z.protocol == 'https:') {
			$.getJSON(z.config.socket+'/api/get/deck?callback=?',{
				deck_id: z.deck.id
			},function(res){
				if (!res.success)
					return;
				console.log(z.config.key, 'long poll hack','rendering via api');
				z._data = res.data;
				z._data.mateys[z.user.id] = $.extend({_active:true},z.user);
				z._data.coffer_i = -9999;
				z._renderOutput(res.data);
			});
			// prevent timeout disconnect from doing anything
			setInterval(function(){
				console.log(z.config.key, 'long poll hack','re sending en guarde');
				z.socket.emit('en_guarde',{
					deck: z.deck.id
					,matey: z.user
				});
			},15000);
		} else {
			//#hack00
			setInterval(function(){
				console.log(z.config.key, 'lazy hack','re sending en guarde');
				z.socket.emit('en_guarde',{
					deck: z.deck.id
					,matey: z.user
				});
			},15000);
		}

		z.socket = io.connect(z.config.socket);
		z.socket.on('touche',function(data){
			if (!data)
				return z._handleBreakingError();
			if (typeof data == 'object')
				z._renderOutput(data);
		});
		z.$.type.bind('keyup',function(e){
			if (!z._first_rendered || e.which != 13) {
				return;
			}
			var msg = $.trim(z.$.type.val());
			if (!msg) {
				return;
			}
			z.socket.emit('missive',{
				deck: z.deck.id
				,matey_id: z.user.id
				,treatise: msg
			});
			z.$.type.val('');

			if (z.config.longPollHackFix && z.protocol == 'https:') {
				if (!z._first_report_received) {
					z._data.coffer.push({
						matey_id: z.user.id
						,treatise: msg
					});
					++z._data.coffer_i;
					z._renderOutput(z._data);
				}
			}
		});
		z.socket.on('report_'+z.deck.id,function(data){
			console.log(z.config.key,'report',data);
			if (!z._validateAndClean(data)) {
				return;
			}
			z._data = data;
			z._renderOutput(data);

			if (z.config.longPollHackFix && z.protocol == 'https:') {
				z._first_report_received = true;
			}
		});

		z.socket.emit('en_guarde',{
			deck: z.deck.id
			,matey: z.user
		});
	}

	,_renderOutput: function(data){
		var z = this
			,x = ace.cssKey(z)
			,numPeeps = 0
			,lastUser,lastJMsg,lastMsg
		;
		if (z._last_coffer_i !== data.coffer_i) {
			z._last_coffer_i = data.coffer_i;
			preRenderBottomScroll = z.$.out.height()-z.$.out_cont.scrollTop()-z.$.out_cont.height();
			z.$.out.empty();
			$.each(data.coffer,function(i,m){
				var user = data.mateys[m.matey_id]
					,name = ((name = z.getDisplayName(user)) ? name : 'unknown')
					,url = z.makeProfileUrl(user)
					,msg = ace.util.escapeHtml(m.treatise)
					,system = false
					,userOwnsMsg = z.user.id == user.id
					,jThumb
				;
				if (m.type == 'system') {
					system = true;
					msg = msg.replace(/%user%/g,name);
				}
				if (m.type != 'system' && lastUser && user.id == lastUser.id) {
					lastJMsg.find('div.'+x+'-text').append('<br />'+msg);
				} else if (!system || z.config.showSystemMessages) {
					jThumb = '<a class="'+x+'-uthumb-link" href="'+url+'"><img class="'+x+'-uthumb" src="'+z.getProfileThumb(user)+'" alt="" /></a>';
					z.$.out.append(lastJMsg=$('<div class="'+x+'-msg '+(system?x+'-msg-system':'')+' '+(userOwnsMsg?x+'-msg-user_owns':'')+'">'
						+ '<div class="'+x+'-uname"><a class="'+x+'-uname-link" href="'+url+'">'+name+'</a></div>'
						+ (userOwnsMsg ? '' : jThumb)
						+ '<div class="'+x+'-text">'+msg+'</div>'
						+ (userOwnsMsg ? jThumb : '')
						+ '<div class="clear">&nbsp;</div>'
					+ '</div>'));
				}
				lastUser = m.type == 'system' ? null : user;
				lastMsg = m;
			});

			if ((data.coffer.length && data.coffer[data.coffer.length-1].matey_id == z.user.id)
				|| preRenderBottomScroll <= 1
				|| !z._first_rendered) {
				z.$.out_cont.scrollTop(z.$.out.height());
			}

			if (!z.open && lastMsg && lastMsg.matey_id != z.user.id && (lastMsg.type != 'system' || lastMsg.treatise.indexOf('left') == -1)) {
				z._blink();
			}
		}

		$.each(data.mateys,function(k,matey){
			if (matey._active) {
				++numPeeps;
			}
		});
		z.$.stats.html('In Room: '+numPeeps);
		if (z.config.usersTab) {
			z.$.utab_content.empty();
			$.each(data.mateys,function(k,matey){
				if (!matey._active) {
					return true;
				}
				z.$.utab_content.append('<div class="'+x+'-utab-user">'
					+ '<a class="'+x+'-utab-user-link" href="'+z.makeProfileUrl(matey)+'">'
						+ '<img class="'+x+'-utab-user-thumb" src="'+z.getProfileThumb(matey)+'" alt="" />'
						+ '<span class="'+x+'-utab-user-name">'+z.getDisplayName(matey)+'</span>'
					+ '</a>'
				+ '</div>');
			});
			z.$.utab_content.append('<div class="clear">&nbsp;</div>');
		}

		z._first_rendered = true;
	}

	,_blink: function(){
		var z = this
			,x = ace.cssKey(z)
			,cls = x+'-blink'
			,on = false
			,num = 4
			,i = 0
		;
		if (typeof z._blinking_interval == 'number')
			clearInterval(z._blinking_interval);
		z.$.title.addClass(cls);
		on = true;
		z._blinking_interval = setInterval(function(){
			if (i%2)
				z.$.title.addClass(cls);
			else
				z.$.title.removeClass(cls);
			on = !on;
			if (++i == num) {
				z.$.title.removeClass(cls);
				clearInterval(z._blinking_interval);
			}
		},500);
	}

	,_toggleOpen: function(){
		var z = this;
		if (typeof z._mouseoutTimeout == 'number')
			clearTimeout(z._mouseoutTimeout);
		if (z.open) {
			z.$.cont.stop().animate({
				height: z.config.teaserHeight+'px'
			},{
				duration: 200
			});
			ace.util.setCookie(z.config.openStateCookie,null);
		} else {
			if (!z.socket) {
				z._setUpSocket();
			}
			z.$.cont.stop().animate({
				height: ace.util.trueDim(z.$.chat_inner).h+'px'
			},{
				duration: 300
			});
			z.$.type.focus();
			ace.util.setCookie(z.config.openStateCookie,1,{expires:z.config.openStateCookieLifetime});
		}
		z.open = !z.open;
	}

	,_handleBreakingError: function(){
		var z = this
			,x = ace.cssKey(z)
		;
		if (z.$.out) {
			z.$.out.html('<div class="'+x+'-breaking_error">There was an error loading chat *this way to the pit of despair*</div>');
			setTimeout(function(){
				z.$.cont.stop().animate({
					height: 0
				},{
					duration: 200
					,complete: function(){
						z.$.cont.remove();
					}
				});
			},2500);
		} else {
			z.$.cont.remove();
		}
	}

	,_validateAndClean: function(data){
		if (!(data && data.mateys && data.coffer && $.isPlainObject(data.mateys) && $.isArray(data.coffer)))
			return false;
		ace.util.arrayFilter(data.coffer,function(m){
			return !!(m && m.matey_id && typeof m.treatise == 'string');
		});
		return true;
	}

	,makeProfileUrl: function(user){
		return '/user/'+user.id;
	}
	,getProfileThumb: function(user){
		return user.facebook_id
			? 'https://graph.facebook.com/'+user.facebook_id+'/picture?type=square'
			: 'data:image/gif;base64,R0lGODlhtAC0AMQAAO7s7Onn5ePh3ufk4d/d2OLg3OHf2t/d2ePh3fPx8ezq6OHe2ubk4ebj3+De2fDu7uXj4PHv7+Ti3ubj4O3r6uro5+Th3ejm4+Lf2+Xi3+jl4t7c1/Ty8wAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjAgNjEuMTM0Nzc3LCAyMDEwLzAyLzEyLTE3OjMyOjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjAzODAxMTc0MDcyMDY4MTE4MDgzRTEyNTdBRUEyMkQ4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjMxOEM1NzEwMTNFRjExRTJBMEI3RjY2NURCMzgzMTE1IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjMxOEM1NzBGMTNFRjExRTJBMEI3RjY2NURCMzgzMTE1IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUuMSBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowMTgwMTE3NDA3MjA2ODExOTJCMEZGRkQ4NzQ1NTg4QSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowMzgwMTE3NDA3MjA2ODExODA4M0UxMjU3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'
		;
	}
	,getDisplayName: function(user){
		return 'user'+user.id;
	}

};
ace.chat.init();