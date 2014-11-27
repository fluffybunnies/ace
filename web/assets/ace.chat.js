
amint.sup = {
    config: {
        key: 'sup'
        //,dependencies: []
    },
    $: {},

    init: function(){
        var z = this;
        if (z._inited) return false;
        z._inited = true;
        //amint.evt.trigger(z.config.key+':loaded');

        amint.mReady(z,function(){
            if (!mint.utils.getParameterByName('test'))
                return
        });

        return true;
    }
};
amint.sup.init();