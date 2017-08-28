Ext.define('MyApp.store.Authors', {
    extend: 'Ext.data.Store',

    requires: [
        'MyApp.model.Author',
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json'
    ],

    constructor: function (cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'Authors',
            autoLoad: true,
            model: 'MyApp.model.Author',
            proxy: {
                type: 'jsonp',
                url: 'http://touchdemo.walkingtree.in/Training/?json=get_author_index&author_meta=email',
                reader: {
                    type: 'json',
                    rootProperty: 'authors'
                }
            }
        }, cfg)]);
    }
});