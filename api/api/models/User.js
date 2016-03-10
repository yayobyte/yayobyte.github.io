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
      type: 'boolean',
      required: true
    },
    'documentType' : {
      required: true,
      type : 'integer',
      model : 'DocumentType',
      columnName : 'document_type'
    },
    'documentNumber' : {
      required: true,
      type : 'integer',
      columnName : 'document_number',
      unique : true
    },
    'name' : {
      type : 'string',
      required : true
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
      columnName: 'birth_place',
      model: 'BirthPlace'
    },
    'nationality' : {
      type : 'integer',
      required : true,
      model : 'Country'
    },
    'nOfChildren' : {
      type : 'integer',
      required : true,
      columnName: 'n_of_children'
    },
    'maritalStatus' : {
      type : 'integer',
      required : true,
      columnName: 'marital_status',
      model : 'MaritalStatus'
    },
    'scholarship' : {
      type : 'integer',
      required : true,
      model : 'Scholarship'
    },
    'rh' : {
      type : 'integer',
      required : true,
      model : 'Rh'
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
      columnName: 'contact_name'
    },
    'contactPhone' : {
      type : 'integer',
      columnName: 'contact_phone'
    },
    'seniority' : {
      type : 'integer',
      required : true,
      model : 'Seniority'
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
      required : true,
      model : 'Project'
    },
    'skill' : {
      type : 'array',
      required : true,
      columnName: 'skills_array'
    },
    'afp' : {
      type : 'integer',
      required : true,
      model : 'Afp'
    },
    'eps' : {
      type : 'integer',
      required : true,
      model : 'Eps'
    }
  }
};
