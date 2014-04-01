/**
 * Created by Kell on 01.04.14.
 */
Ext.define('Lib.view.Authors', {
        extend: 'Ext.grid.Panel',
        alias: 'widget.authorgrid',
        title: 'Authors',
        store: 'Authors',
        columns: [{
            text: 'fname',
            width: 40,
            sortable: true,
            dataIndex: 'first_name'
        }, {
            text: 'middle_name',
            flex: 1,
            sortable: true,
            dataIndex: 'middle_name',
            field: {
                xtype: 'textfield'
            }
        }, {
            header: 'last_name',
            width: 80,
            sortable: true,
            dataIndex: 'last_name',
            field: {
                xtype: 'textfield'
            }
        }]
//        dockedItems: [{
//            xtype: 'toolbar',
//            items: [{
//                text: 'Add',
//                iconCls: 'icon-add',
//                handler: function(){
//                    // empty record
//                    store.insert(0, new Person());
//                    rowEditing.startEdit(0, 0);
//                }
//            }, '-', {
//                itemId: 'delete',
//                text: 'Delete',
//                iconCls: 'icon-delete',
//                disabled: true,
//                handler: function(){
//                    var selection = grid.getView().getSelectionModel().getSelection()[0];
//                    if (selection) {
//                        store.remove(selection);
//                    }
//                }
//            }]
//        }]
    });