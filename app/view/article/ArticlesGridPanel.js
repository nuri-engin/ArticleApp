Ext.define('MyApp.view.article.ArticlesGridPanel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.articlesgrid',

    requires: [
        'Ext.grid.View',
        'Ext.grid.column.Column'
    ],

    config: {
        author: null
    },

    hideHeaders: true,
    store: 'Articles',

    columns: [
        {
            xtype: 'gridcolumn',
            renderer: function (value, metaData, record, rowIndex, colIndex, store, view) {
                return '<h2 style="color: #64BD4F;">' + value + '</h2>' + 'Published By <span style="font-size:1.1em; color:#7495AB;">' + record.get('author') + '</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Published On <span style="font-size: 1.1em;color:#7495AB;">' + record.get('date') + '</span>';
            },
            dataIndex: 'title',
            text: 'Title',
            flex: 1
        }
    ],

    updateAuthor: function(newVal, oldVal) {
        this.getStore().load({url: 'http://touchdemo.walkingtree.in/Training/?json=get_posts&author='+ newVal.get('id') + '&count=20'});
    }

});