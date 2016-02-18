/**
* DocumentType.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    'id' : {
      type: 'integer',
      required: true,
      primaryKey: true,
      autoincrement : true,
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

