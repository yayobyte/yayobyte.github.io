/**
* User.js
*
* @description :: Stores the information about the users
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    'id' : {
      type: 'integer',
      primaryKey: true,
      autoIncrement : true,
      unique : true,
      columnName: 'id_user'
    },
    'status' : {
      type: 'binary',
      required: true,
    },
    'documentType' : {
      type : 'integer',
      required: true,
      columnName: 'document_type'
    },
    'name' : {
      type : 'string',
      required : true,
    },
    'firstLastName' : {
      type : 'string',
      required : true,
      columnName: 'first_last_name'
    },
    'secondLastName' : {
      type : 'string',
      required : true,
      columnName: 'second_last_name'
    },
    'address' : {
      type : 'string',
      required : true
    },
    'birthday' : {
      type : 'date',
      required : false
    },
    'age' : {
      type : 'integer',
      required : true
    },
    'birthPlace' : {
      type : 'integer',
      required : true,
      columnName: 'birth_place'
    },
    'nationality' : {
      type : 'integer',
      required : true
    },
    'nOfChildren' : {
      type : 'integer',
      required : true,
      columnName: 'n_of_children'
    },
    'maritalStatus' : {
      type : 'integer',
      required : true,
      columnName: 'marital_status'
    },
    'scholarship' : {
      type : 'integer',
      required : true
    },
    'rh' : {
      type : 'integer',
      required : true
    },
    'bloodType' : {
      type : 'binary',
      required : true,
      columnName: 'blood_type'
    },
    'peopleInCharge' : {
      type : 'integer',
      required : true,
      columnName: 'people_in_charge'
    },
    'socialStratum' : {
      type : 'integer',
      required : true,
      columnName: 'social_stratum'
    },
    'skype' : {
      type : 'string',
      required : true
    },
    'personalEmail' : {
      type : 'string',
      required : true,
      columnName: 'personal_email'
    },
    'cellphone' : {
      type : 'integer',
      required : true
    },
    'contactName' : {
      type : 'string',
      required : true,
      columnName: 'contact_name'
    },
    'contactPhone' : {
      type : 'integer',
      required : true,
      columnName: 'contact_phone'
    },
    'seniority' : {
      type : 'integer',
      required : true
    },
    'hiredTime' : {
      type : 'date',
      required : true,
      columnName: 'hired_date'
    },
    'salary' : {
      type : 'integer',
      required : true
    },
    'corporateEmail' : {
      type : 'string',
      required : true,
      columnName: 'corporate_email'
    },
    'project' : {
      type : 'integer',
      required : true
    },
    'skill' : {
      type : 'json',
      required : true,
      columnName: 'skills'
    },
    'afp' : {
      type : 'integer',
      required : true
    },
    'eps' : {
      type : 'integer',
      required : true
    }
  }
};
