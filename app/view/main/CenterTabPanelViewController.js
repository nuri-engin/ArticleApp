Ext.define('MyApp.view.main.CenterTabPanelViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.centertabpanel',

    onGridpanelSelect: function (rowmodel, record, index, eOpts) {
        var tab = this.getView().add({
            title: record.get('title'),
            closable: true,
            html: record.get('content'),
            bodyPadding: 10,
            autoScroll: true
        });

        this.getView().setActiveTab(tab);
    }
});