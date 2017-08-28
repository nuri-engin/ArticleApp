Ext.define('MyApp.view.MyViewportViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.myviewport',

    onGridpanelSelect: function (rowmodel, record, index, eOpts) {
        this.lookupReference('centertabpanel').setAuthor(record);
    }
});