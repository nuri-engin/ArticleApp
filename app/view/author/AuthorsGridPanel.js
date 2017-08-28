Ext.define('MyApp.view.author.AuthorsGridPanel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.authorsgrid',

    requires: [
        'Ext.grid.View',
        'Ext.grid.column.Column'
    ],

    width: 230,
    collapsible: true,
    title: 'Authors',
    columnLines: false,
    hideHeaders: true,
    store: 'Authors',

    columns: [
        {
            xtype: 'gridcolumn',
            renderer: function (value, metaData, record, rowIndex, colIndex, store, view) {
                return '<img src="' + value + '?s=40"></img>';
            },
            width: 50,
            dataIndex: 'gavtar_url'
        }, {
            xtype: 'gridcolumn',
            renderer: function (value, metaData, record, rowIndex, colIndex, store, view) {
                metaData.style = 'font-size: 1.2em; padding-top: 20px; color: #495E88;';
                return value;
            },
            dataIndex: 'full_name',
            text: 'Author',
            flex: 1
        }
    ]
});