'use strict';
(function(){
    angular.module('Humanity')
        .controller('CreateUsersController', CreateUsersController)

    var moduleName = "Users";


    var status = [
        {
            "id" : 0,
            "name" : "Inactive"
        },
        {
            "id" : 1,
            "name" : "Active"
        },
        {
            "id" : 2,
            "name" : "Not Sure now"
        }
    ];

    var masterData = {
        "documentType" : [
            {
                "id": 0,
                "name": "CC"
            },
            {
                "id": 1,
                "name": "NIT"
            },
            {
                "id": 2,
                "name": "CE"
            },
            {
                "id": 3,
                "name": "Passport"
            }
        ]
    };


    function ListUsersController (){
        var vm = this;

        vm.moduleName = moduleName;
    }





    function CreateUsersController(){
        var vm = this;
        vm.moduleName = moduleName;
        vm.pageName = "create";

        //Personal Info
        vm.id = 123;
        vm.status = status;
        vm.documentType = masterData.documentType;
        vm.name = '';
        vm.firstLastName = '';
        vm.secondLastName = "";
        vm.address = "";
        vm.birthday = "";
        vm.age = "";
        vm.birthPlace = "";
        vm.nationality = "";
        vm.nOfChildren = "";
        vm.maritalStatus = "";
        vm.scholarship = "";
        vm.rh = "";
        vm.bloodType = "";
        vm.peopleInCharge = "";
        vm.socialStratum = "";

        //Contact Info
        vm.skype = "";
        vm.personalEmail = "";
        vm.cellphone = "";
        vm.contactName = "";
        vm.contactPhone = "";

        //Corporate Info
        vm.seniority = "";
        vm.hiredTime = "";
        vm.salary = "";
        vm.corporateEmail = "";
        vm.project = "";
        vm.skill = "";

        //Social Security
        vm.afp = "";
        vm.eps = "";

        vm.validateForData = function (){
            console.log('We are ok');
        };
    }
})();
