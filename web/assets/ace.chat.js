
/*
	To Do
		- get working on https and remove long polling hack
		- http is still sending logout event. fix this too #hack00
		- clean up old decks in node so doesnt take up mem
			- do this async
*/

ace.chat = {
	config: {
		key: 'chat'
		,enabled: true
		,socketjs: {
			'http:': 'http://ec2-184-169-233-158.us-west-1.compute.amazonaws.com:3000/socket.io/socket.io.js'
			,'https:': '//sup.beachmintdev.com/socket.io/socket.io.js'
		}
		,socket: {
			'http:': 'http://ec2-184-169-233-158.us-west-1.compute.amazonaws.com:3000'
			,'https:': 'https://sup.beachmintdev.com'
		}
		,excludeFrom: /(^\/?$)|(^\/checkout\/?$)/gi
		,characterLimit: 117
		,teaserHeight: 4
		,openStateCookie: 'chat-open'
		,usersTabEnabled: true
		,longPollHackfix: true
		,whitelist: {
			1346799799: 1
			,100003013286805: 1
		}
	}
	,$: {}
	,socket: null
	,open: false
	,data: null
	,firstReportReceived: false
	,lastCofferIndex: null

	init: function(){
		var z = this;
		if (z.inited)
			return false;
		z.inited = true;
		//ace.evt.trigger(z.config.key+':loaded');

		if (!z.config.enabled) {
			console.log(z.config.key, 'disabled');
			return;
		}
		if (window.location.pathname.match(z.config.excludeFrom)) {
			console.log(z.config.key, 'page excluded');
			return;
		}
		z.deck = z.getDeck();
		if (!z.deck) {
			console.log(z.config.key, 'room not configured');
			return;
		}

		z.protocol = window.location.protocol;

		if (mint.util.getParameterByName('local')) {
			z.config.socketjs = {
				'http:': 'http://localhost:3000/socket.io/socket.io.js'
				,'https:': 'http://localhost:3000/socket.io/socket.io.js'
			};
			z.config.socket = {
				'http:': 'http://localhost:3000'
				,'https:': 'http://localhost:3000'
			};
		}

		$.ajax({
			url: z.config.socketjs[z.protocol]
			,dataType: 'script'
			,cache: true
			,success: function(){
				$(function(){
					z.build();
					z.functionalize();
					z.setUpSocket();
					if (ace.util.cookie(z.config.openStateCookie))
						z.toggleOpen();
				});
			}
		});

		return true;
	},

	getDeck: function(){
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
	},

	build: function(){
		var z = this
			,x = z.cssKey(z)
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
			+ (z.config.usersTabEnabled ? '<div class="'+x+'-utab">'
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

		if (z.config.usersTabEnabled) {
			z.$.utab = z.$.cont.find('div.'+x+'-utab');
			z.$.utabInner = z.$.utab.find('div.'+x+'-utab-inner');
			z.$.utabOpen = z.$.utab.find('a.'+x+'-utab-open-btn');
			z.$.utabContent = z.$.utab.find('div.'+x+'-utab-content');
			z.$.utabInner.css('height','0');
		}

		z.$.cont.css('height',z.config.teaserHeight+'px');

		$('body').append(z.$.cont);
	},

	functionalize: function(){
		var z = this;

		z.$.open.bind('click',function(e){
			e.preventDefault();
			z.toggleOpen();
		});

		z.$.open.bind('mouseover mouseout',function(e){
			if (z.open)
				return;
			if (typeof z.mouseoutTimeout == 'number')
				clearTimeout(z.mouseoutTimeout);
			if (e.type == 'mouseover') {
				z.$.cont.stop().animate({
					height: ace.util.trueDim(z.$.title).h+'px'
				},{
					duration: 100
				});
			} else {
				z.mouseoutTimeout = setTimeout(function(){
					z.$.cont.stop().animate({
						height: z.config.teaserHeight+'px'
					},{
						duration: 100
					});
				},800);
			}
		});

		if (z.config.usersTabEnabled) {
			z.$.utab.bind('click',function(e){
				e.preventDefault();
				z.toggleOpen();
			});
			z.$.utab.bind('mouseover mouseout',function(e){
				var height;
				if (typeof z.utabMouseoutTimeout == 'number')
					clearTimeout(z.utabMouseoutTimeout);
				if (e.type == 'mouseover') {
					if (z.userTabIsOpen)
						return;
					z.userTabIsOpen = true;
					height = ace.util.trueDim(z.$.utabInner.css({
						visibility: 'hidden'
						,height: 'auto'
					})).h;
					z.$.utabInner.css({
						height: 0
						,visibility: ''
					});
					z.$.utabInner.stop().animate({
						height: height+'px'
					},{
						duration: 100
						,complete: function(){
							// just in case content gets re-rendered during animation
							z.$.utabInner.css('height','auto');
						}
					});
				} else {
					z.utabMouseoutTimeout = setTimeout(function(){
						z.userTabIsOpen = false;
						z.$.utabInner.stop().animate({
							height: 0
						},{
							duration: 100
						});
					},800);
				}
			});
		}
	},

	setUpSocket: function(){
		var z = this
			,x = ace.cssKey(z)
		;
		z.$.cont.removeClass('is-inactive');
		z.$.out.html('<div class="'+x+'-out-loading">loading...</div>');

		if (z.config.longPollHackFix && z.protocol == 'https:') {
			$.getJSON('//sup.beachmintdev.com/api/get/deck?callback=?',{
				deck_id: z.deck.id
			},function(res){
				if (!res.success) {
					return;
				}
				console.log(z.config.key, 'long poll hack','rendering via api');
				z.data = res.data;
				z.data.mateys[z.user.id] = $.extend({_active:true},z.user);
				z.data.cofferIndex = -9999;
				z.renderOutput(res.data);
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

		z.socket = io.connect(z.config.socket[z.protocol]);
		z.socket.on('touche',function(data){
			if (!data)
				return z.handleBreakingError();
			if (typeof data == 'object')
				z.renderOutput(data);
		});
		z.$.type.bind('keyup',function(e){
			if (!z.firstRendered || e.which != 13)
				return;
			var msg = $.trim(z.$.type.val());
			if (!msg)
				return;
			z.socket.emit('missive',{
				deck: z.deck.id
				,matey_id: z.user.id
				,treatise: msg
			});
			z.$.type.val('');

			if (z.config.long_poll_hackfix && z.protocol == 'https:') {
				if (!z.firstReportReceived) {
					z.data.coffer.push({
						matey_id: z.user.id
						,treatise: msg
					});
					++z.data.lastCofferIndex;
					z.renderOutput(z.data);
				}
			}
		});
		z.socket.on('report_'+z.deck.id,function(data){
			console.log(z.config.key,'report',data);
			if (!z.validateAndClean(data))
				return;
			z.data = data;
			z.renderOutput(data);

			if (z.config.long_poll_hackfix && z.protocol == 'https:')
				z.firstReportReceived = true;
		});

		z.socket.emit('en_guarde',{
			deck: z.deck.id
			,matey: z.user
		});
	},

	renderOutput: function(data){
		var z = this
			,x = ace.cssKey(z)
			,numPeeps = 0
			,lastUser,lastJMsg,lastMsg
		;
		if (z.lastCofferIndex !== data.lastCofferIndex) {
			z.lastCofferIndex = data.lastCofferIndex;
			preRenderBottomScroll = z.$.out.height()-z.$.out_cont.scrollTop()-z.$.out_cont.height();
			z.$.out.empty();
			$.each(data.coffer,function(i,m){
				var user = data.mateys[m.matey_id]
					,name = ((name = ace.customer.getDisplayName(user)) ? name : 'unknown')
					,url = ace.customer.makeProfileUrl(user)
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
				} else {
					if (!system) {
						jThumb = '<a class="'+x+'-uthumb-link" href="'+url+'"><img class="'+x+'-uthumb" src="'+ace.customer.getProfileThumb(user)+'" alt="" /></a>';
						z.$.out.append(lastJMsg=$('<div class="'+x+'-msg '+(system?x+'-msg-system':'')+' '+(userOwnsMsg?x+'-msg-user_owns':'')+'">'
							+ '<div class="'+x+'-uname"><a class="'+x+'-uname-link" href="'+url+'">'+name+'</a></div>'
							+ (userOwnsMsg ? '' : jThumb)
							+ '<div class="'+x+'-text">'+msg+'</div>'
							+ (userOwnsMsg ? jThumb : '')
							+ '<div class="clear">&nbsp;</div>'
						+ '</div>'));
					}
				}
				lastUser = m.type == 'system' ? null : user;
				lastMsg = m;
			});

			if ((data.coffer.length && data.coffer[data.coffer.length-1].matey_id == z.user.id)
				|| preRenderBottomScroll <= 1
				|| !z.firstRendered) {
				z.$.out_cont.scrollTop(z.$.out.height());
			}

			if (!z.open && lastMsg && lastMsg.matey_id != z.user.id && (lastMsg.type != 'system' || lastMsg.treatise.indexOf('left') == -1))
				z.blink();
		}

		$.each(data.mateys,function(k,matey){
			if (matey._active)
				++numPeeps;
		});
		z.$.stats.html('In Room: '+numPeeps);
		if (z.config.usersTabEnabled) {
			z.$.utabContent.empty();
			$.each(data.mateys,function(k,matey){
				if (!matey._active)
					return true;
				z.$.utabContent.append('<div class="'+x+'-utab-user">'
					+ '<a class="'+x+'-utab-user-link" href="'+ace.customer.makeProfileUrl(matey)+'">'
						+ '<img class="'+x+'-utab-user-thumb" src="'+ace.customer.getProfileThumb(matey)+'" alt="" />'
						+ '<span class="'+x+'-utab-user-name">'+ace.customer.getDisplayName(matey)+'</span>'
					+ '</a>'
				+ '</div>');
			});
			z.$.utabContent.append('<div class="clear">&nbsp;</div>');
		}

		z.firstRendered = true;
	},

	blink: function(){
		var z = this
			,x = ace.cssKey(z)
			,cls = x+'-blink'
			,on = false
			,num = 4
			,i = 0
		;
		if (typeof z.blinkingInterval == 'number')
			clearInterval(z.blinkingInterval);
		z.$.title.addClass(cls);
		on = true;
		z.blinkingInterval = setInterval(function(){
			i%2 ? z.$.title.addClass(cls) : z.$.title.removeClass(cls);
			on = !on;
			if (++i == num) {
				z.$.title.removeClass(cls);
				clearInterval(z.blinkingInterval);
			}
		},500);
	},

	toggleOpen: function(){
		var z = this;
		if (typeof z.mouseoutTimeout == 'number')
			clearTimeout(z.mouseoutTimeout);
		if (z.open) {
			z.$.cont.stop().animate({
				height: z.config.teaserHeight+'px'
			},{
				duration: 200
			});
			ace.util.cookie(z.config.openStateCookie,null);
		} else {
			if (!z.socket) {
				z.setUpSocket();
			}
			z.$.cont.stop().animate({
				height: ace.util.trueDim(z.$.chat_inner).h+'px'
			},{
				duration: 300
			});
			z.$.type.focus();
			ace.util.cookie(z.config.openStateCookie,1,{expires:1});
		}
		z.open = !z.open;
	},

	handleBreakingError: function(){
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
	},

	validateAndClean: function(data){
		if (!(data && data.mateys && data.coffer && $.isPlainObject(data.mateys) && $.isArray(data.coffer)))
			return false;
		ace.util.arrayFilter(data.coffer,function(m){
			if (m && m.matey_id && typeof m.treatise == 'string')
				return true;
		});
		return true;
	}

};
ace.chat.init();