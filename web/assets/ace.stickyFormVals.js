/*
	To Do
		- Currently this works only once per page load and could collide if page changes based on querystring
			- Support any number of calls and remove uniqueness based on pathname if practically feasible
			- Identify what makes a field unique within scope of $elms
			- Identify what makes a the $elms set unique within the scope of universe
			- Might only be possible if a unique key is required from client
		- Support dynamically-added form fields
			- If arguments change, consider making backwards-compatible
				- i.e. if old arguments passed, dynamically-added field support goes away, but original functionality remains

	ace.stickyFormVals($('#add-walker-form,#edit-walker-form').find('input[type=text],input[type=checkbox]'));

*/

ace.stickyFormVals = function($elms){
	var z = ace.stickyFormVals
		,cookieKey = z.getCookieKey()
		,currentData
	;
	try {
		currentData = JSON.parse(ace.util.getCookie(cookieKey));
	} catch (e) {}
	if (typeof currentData != 'object') {
		currentData = {};
	}
	//z.log('currentData', currentData);

	$.each(currentData,function(k,v){
		var keySplit = k.split('ÿ')
			,name = keySplit[0]
			,index = keySplit[1]
			,$elm = $elms.filter('[name='+name+']').eq(index)
		if ($elm.length != 1)
			return z.log('cant uniquely identify '+k, $elm);
		z.log('setting field value', k, v.v);
		if (v.t == 'checkbox') {
			v.v ? $elm.attr('checked','checked') : $elm.removeAttr('checked');
		} else {
			$elm.val(v.v);
		}
	});

	$elms.bind('change',function(){
		var $elm = $(this)
			,name = $elm.attr('name')
			,type = $elm.attr('type')
			,index = $elms.filter('[name='+name+']').index($elm)
			,key = name+'ÿ'+index
		;
		if (!name || !type)
			return z.log('elm is missing name or type', $elm);
		currentData[key] = {
			t: type
		};
		if (type == 'checkbox') {
			currentData[key].v = $elm.is(':checked');
		} else {
			currentData[key].v = $elm.val();
		}
		//z.log('saving data', currentData);
		ace.util.setCookie(cookieKey, JSON.stringify(currentData), z.cookieExpires);
	});
}
ace.stickyFormVals.config = {
	key: 'stickyFormVals'
	,cookieExpires: 1000*60*60*24*30
}
ace.stickyFormVals.getCookieKey = function(){
	return this.config.key+'-'+ace.util.hash(window.location.pathname)
}
ace.stickyFormVals.log = AceBase.prototype.log;

