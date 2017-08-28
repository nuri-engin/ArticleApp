Ext.define('MyApp.model.Article', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.field.Field'
    ],

    fields: [
        {name: 'id'},
        {name: 'url'},
        {name: 'title'},
        {name: 'content'},
        {
            convert: function (v, rec) {
                var author = rec.get("author");
                return author.first_name + ' ' + author.last_name;
            },
            name: 'author'
        },
        {name: 'date'}
    ]
});