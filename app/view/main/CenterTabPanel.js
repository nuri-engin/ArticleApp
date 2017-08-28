Ext.define('MyApp.view.main.CenterTabPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.centertabpanel',

    requires: [
        'MyApp.view.main.CenterTabPanelViewModel',
        'MyApp.view.main.CenterTabPanelViewController',
        'MyApp.view.article.ArticlesGridPanel',
        'Ext.grid.Panel',
        'Ext.tab.Tab'
    ],

    config: {
        author: null
    },

    controller: 'centertabpanel',

    viewModel: {
        type: 'centertabpanel'
    },

    items: [
        {
            xtype: 'articlesgrid',
            reference: 'recentarticles',
            bind: {
                title: '{tabtitle}'
            },
            listeners: {
                select: 'onGridpanelSelect'
            }
        }
    ],

    updateAuthor: function (newVal, oldVal) {
        this.getViewModel().setAuthor(newVal);

        this.lookupReference('recentarticles').setAuthor(newVal);
    }
});