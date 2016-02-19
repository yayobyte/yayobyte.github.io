/**
* Country.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    'id' : {
      type: 'integer',
      primaryKey: true,
      autoIncrement : true,
      unique : true,
      columnName: 'id_country'
    },
    'name' : {
      type: 'string',
      required : true
    },
    'nationality' : {
      type : 'string',
      required : true
    }
  }
};

