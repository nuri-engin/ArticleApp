Ext.define('MyApp.view.MyViewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.myviewport',

    requires: [
        'MyApp.view.MyViewportViewController',
        'MyApp.view.author.AuthorsGridPanel',
        'MyApp.view.main.CenterTabPanel',
        'Ext.grid.Panel',
        'Ext.tab.Panel'
    ],

    controller: 'myviewport',

    layout: 'border',

    items: [
        {
            xtype: 'authorsgrid',
            region: 'west',
            split: true,
            splitterResize: false,
            width: 230,
            reference: 'authorsgrid',
            listeners: {
                select: 'onGridpanelSelect'
            }
        }, {
            xtype: 'centertabpanel',
            region: 'center',
            reference: 'centertabpanel'
        }
    ]
});