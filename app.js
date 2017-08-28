Ext.Loader.setConfig({
    disableCaching: true
});

Ext.application({
    models: [
        'Author',
        'Article'
    ],
    stores: [
        'Authors',
        'Articles'
    ],
    views: [
        'MyViewport'
    ],
    name: 'MyApp',

    launch: function() {
        Ext.create('MyApp.view.MyViewport');
    }

});