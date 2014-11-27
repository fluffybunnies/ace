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
        //,dependencies: []
        ,enabled: true
        ,socketjs: {
            'http:': 'http://ec2-184-169-233-158.us-west-1.compute.amazonaws.com:3000/socket.io/socket.io.js'
            ,'https:': '//sup.beachmintdev.com/socket.io/socket.io.js'
        }
        ,socket: {
            'http:': 'http://ec2-184-169-233-158.us-west-1.compute.amazonaws.com:3000'
            ,'https:': 'https://sup.beachmintdev.com'
        }
        ,exclude_from: /(^\/?$)|(^\/checkout\/?$)/gi
        ,character_limit: 117
        ,teaser_height: 4
        ,open_state_cookie: 'chat-open'
        ,users_tab: true
        ,min_rank: 50
        ,long_poll_hackfix: true
    },
    $: {},
    socket: null,
    open: false,

    init: function(){
        var z = this;
        if (z._inited) return false;
        z._inited = true;
        //ace.bus.trigger(z.config.key+':loaded');

        if (!z.config.enabled) {
            console.log(z.config.key, 'disabled');
            return;
        }
        if (window.location.pathname.match(z.config.exclude_from)) {
            console.log(z.config.key, 'page excluded');
            return;
        }
        z.deck = z._getDeck();
        if (!z.deck) {
            console.log(z.config.key, 'room not configured');
            return;
        }

        z.protocol = window.location.protocol;

        //z.protocol = 'https:';
        if (ace.util.getParameterByName('local')) {
            z.config.socketjs = {
                'http:': 'http://localhost:3000/socket.io/socket.io.js'
                ,'https:': 'http://localhost:3000/socket.io/socket.io.js'
            };
            z.config.socket = {
                'http:': 'http://localhost:3000'
                ,'https:': 'http://localhost:3000'
            };
        }


        z.user = {
            id: ace.util.rand(1000,10000)
        };
        $.ajax({
            url: z.config.socketjs[z.protocol]
            ,dataType: 'script'
            ,cache: true
            ,success: function(){
                $(function(){
                    z._build();
                    z._functionalize();
                    z._setUpSocket();
                    if (ace.util.cookie(z.config.open_state_cookie)) {
                        z._toggleOpen();
                    }
                });
            }
        });

        return true;
    },

    _getDeck: function(){
        var z = this
            ,deck
        ;
        deck = {
            id: '*'
            ,name: 'Public'
        };
        if (!window.location.hostname.match(/^www/) || ace.util.getParameterByName('local')) {
            deck.id = 'dev/'+deck.id;
        }
        console.log(z.config.key,'deck',deck);
        return deck;
    },

    _build: function(){
        var z = this
            ,x = ace.getCssKey(z)
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
                    + '<input class="'+x+'-type-input" maxlength="'+z.config.character_limit+'" type="text" />'
                + '</div>'
            + '</div></div>'
            + (z.config.users_tab ? '<div class="'+x+'-utab">'
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

        if (z.config.users_tab) {
            z.$.utab = z.$.cont.find('div.'+x+'-utab');
            z.$.utab_inner = z.$.utab.find('div.'+x+'-utab-inner');
            z.$.utab_open = z.$.utab.find('a.'+x+'-utab-open-btn');
            z.$.utab_content = z.$.utab.find('div.'+x+'-utab-content');
            z.$.utab_inner.css('height','0');
        }

        z.$.cont.css('height',z.config.teaser_height+'px');

        $('body').append(z.$.cont);
    },

    _functionalize: function(){
        var z = this;

        z.$.open.bind('click',function(e){
            e.preventDefault();
            z._toggleOpen();
        });

        z.$.open.bind('mouseover mouseout',function(e){
            if (z.open) {
                return;
            }
            if (typeof(z._mouseoutTimeout) == 'number') {
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
                        height: z.config.teaser_height+'px'
                    },{
                        duration: 100
                    });
                },800);
            }
        });

        if (z.config.users_tab) {
            z.$.utab.bind('click',function(e){
                e.preventDefault();
                z._toggleOpen();
            });
            z.$.utab.bind('mouseover mouseout',function(e){
                var height;
                if (typeof(z._utabMouseoutTimeout) == 'number') {
                    clearTimeout(z._utabMouseoutTimeout);
                }
                if (e.type == 'mouseover') {
                    if (z._utab_open) {
                        return;
                    }
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
    },

    _setUpSocket: function(){
        var z = this
            ,x = ace.getCssKey(z)
        ;
        z.$.cont.removeClass('is-inactive');
        z.$.out.html('<div class="'+x+'-out-loading">loading...</div>');

        if (z.config.long_poll_hackfix && z.protocol == 'https:') {
            $.getJSON('//sup.beachmintdev.com/api/get/deck?callback=?',{
                deck_id: z.deck.id
            },function(res){
                if (!res.success) {
                    return;
                }
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

        z.socket = io.connect(z.config.socket[z.protocol]);
        z.socket.on('touche',function(data){
            if (!data) {
                z._handleBreakingError();
                return;
            }
            if (typeof(data) == 'object') z._renderOutput(data);
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

            if (z.config.long_poll_hackfix && z.protocol == 'https:') {
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

            if (z.config.long_poll_hackfix && z.protocol == 'https:') {
                z._first_report_received = true;
            }
        });

        z.socket.emit('en_guarde',{
            deck: z.deck.id
            ,matey: z.user
        });
    },

    _renderOutput: function(data){
        var z = this
            ,x = ace.getCssKey(z)
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
                } else {
                    if (!system) {
                        jThumb = '<a class="'+x+'-uthumb-link" href="'+url+'"><img class="'+x+'-uthumb" src="'+z.getProfileThumb(user)+'" alt="" /></a>';
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
        if (z.config.users_tab) {
            z.$.utab_content.empty();
            $.each(data.mateys,function(k,matey){
                if (!matey._active) {
                    return true;
                }
                z.$.utab_content.append('<div class="'+x+'-utab-user">'
                    + '<a class="'+x+'-utab-user-link" href="'+z.makeProfileUrl(matey)+'">'
                        + '<img class="'+x+'-utab-user-thumb" src="'+z.getProfileThumb(matey)+'" alt="" />'
                        + '<span class="'+x+'-utab-user-name">'+z..getDisplayName(matey)+'</span>'
                    + '</a>'
                + '</div>');
            });
            z.$.utab_content.append('<div class="clear">&nbsp;</div>');
        }

        z._first_rendered = true;
    },

    _blink: function(){
        var z = this
            ,x = ace.getCssKey(z)
            ,cls = x+'-blink'
            ,on = false
            ,num = 4
            ,i = 0
        ;
        if (typeof(z._blinking_interval) == 'number') {
            clearInterval(z._blinking_interval);
        }
        z.$.title.addClass(cls);
        on = true;
        z._blinking_interval = setInterval(function(){
            if (i%2) {
                z.$.title.addClass(cls);
            } else {
                z.$.title.removeClass(cls);
            }
            on = !on;
            if (++i == num) {
                z.$.title.removeClass(cls);
                clearInterval(z._blinking_interval);
            }
        },500);
    },

    _toggleOpen: function(){
        var z = this;
        if (typeof(z._mouseoutTimeout) == 'number') {
            clearTimeout(z._mouseoutTimeout);
        }
        if (z.open) {
            z.$.cont.stop().animate({
                height: z.config.teaser_height+'px'
            },{
                duration: 200
            });
            ace.util.cookie(z.config.open_state_cookie,null);
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
            ace.util.cookie(z.config.open_state_cookie,1,{expires:1});
        }
        z.open = !z.open;
    },

    _handleBreakingError: function(){
        var z = this
            ,x = ace.getCssKey(z)
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

    _validateAndClean: function(data){
        if (!(data && data.mateys && data.coffer && $.isPlainObject(data.mateys) && $.isArray(data.coffer))) {
            return false;
        }
        ace.util.arrayFilter(data.coffer,function(m){
            if (m && m.matey_id && typeof(m.treatise) == 'string') {
                return true;
            }
        });
        return true;
    }

};
ace.chat.init();