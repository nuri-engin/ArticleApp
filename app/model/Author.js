Ext.define('MyApp.model.Author', {
    extend: 'Ext.data.Model',
    
    requires: [
        Ext.data.field.Field
    ],

    fields: [
        {name: 'id'},
        {name: 'first_name'},
        {name: 'last_name'},
        {name: 'nickname'},
        {name: 'email'},
        {
            convert: function (v, rec) {
                return rec.get('first_name') + ' ' + rec.get('last_name');
            },
            name: 'full_name'
        },
        {
            convert: function (v, rec) {
                return 'http://www.gravatar.com/avatar/' + rec.get('email');
            },
            name: 'gavtar_url'
        }
    ]
});