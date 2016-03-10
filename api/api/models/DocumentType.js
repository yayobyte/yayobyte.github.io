/**
* DocumentType.js
*
* @description :: This is the model for storing the
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  tableName: 'document_type',

  attributes: {
    'id' : {
      type: 'integer',
      primaryKey: true,
      autoIncrement : true,
      unique : true,
      columnName: 'id_document_type'
    },
    'name' : {
      type: 'string',
      columnName: 'name',
      required: true,
      unique : true
    }
  }
};
