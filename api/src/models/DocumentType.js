/**
* DocumentType.js
*
* @description :: This is the model for storing the
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    'id' : {
      type: 'integer',
      primaryKey: true,
      autoIncrement : true,
      unique : true,
      columnName: 'id_document_type'
    },
    'documentName' : {
      type: 'string',
      columnName: 'document_name',
      required: true
    }
  }
};

