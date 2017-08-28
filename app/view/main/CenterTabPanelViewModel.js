Ext.define('MyApp.view.main.CenterTabPanelViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.centertabpanel',

    requires: [
        'Ext.app.bind.Formula'
    ],

    config: {
        author: null
    },

    data: {
        author: null
    },

    formulas: {
        tabtitle: {
            get: function (data) {
                if (!data) {
                    return 'Recent Articles';
                }

                return 'Recent Articles By - ' + data;
            },
            bind: '{author}'
        }
    },

    updateAuthor: function(newVal, oldVal) {
        this.setData({author: newVal.get('full_name')});
    }
});