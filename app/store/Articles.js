Ext.define('MyApp.store.Articles', {
    extend: 'Ext.data.Store',

    requires: [
        'MyApp.model.Article',
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json'
    ],

    constructor: function (cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'Articles',
            autoLoad: true,
            model: 'MyApp.model.Article',
            proxy: {
                type: 'jsonp',
                url: 'http://touchdemo.walkingtree.in/Training/?json=get_posts&count=20',
                reader:  {
                    type: 'json',
                    rootProperty: 'posts'
                }
            }
        }, cfg)]);
    }
});