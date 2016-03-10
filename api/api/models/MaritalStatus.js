/**
* MaritalStatus.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  tableName: 'marital_status',
  attributes: {
    'id' : {
      type: 'integer',
      primaryKey: true,
      autoIncrement : true,
      unique : true,
      columnName: 'id_marital_status'
    },
    'name' : {
      type: 'string',
      required : true,
      unique : true
    }
  }
};

