'use strict';
(function(){
    angular.module('Humanity')
        .controller('CreateUsersController', CreateUsersController)

    var moduleName = "Users";

    var statusApi = [
        { "id" : 0, "name" : "Inactive" },
        { "id" : 1, "name" : "Active" }
    ];

    var socialStratumApi = [
        { "id" : 1, "name" : "1" },
        { "id" : 2, "name" : "2" },
        { "id" : 3, "name" : "3" },
        { "id" : 4, "name" : "4" },
        { "id" : 5, "name" : "5" },
        { "id" : 6, "name" : "6" }
    ];



    function CreateUsersController(DocumentTypeFactory, BirthPlaceFactory, NationalityFactory, MaritalStatusFactory,
                                   ScholarshipFactory, RhFactory, SeniorityFactory, ProjectFactory, AfpFactory,
                                   EpsFactory){
        var vm = this;
        vm.moduleName = moduleName;
        vm.pageName = "create";

        //Select lists
        vm.documentTypeApi = "";
        vm.birthPlaceApi = "";
        vm.nationalityApi = "";
        vm.maritalStatusApi = "";
        vm.scholarshipApi = "";
        vm.rhApi = "";

        vm.seniorityApi = "";
        vm.projectApi = "";
        vm.afpApi = "";
        vm.epsApi = "";


        //Hard-coded selects
        vm.socialStratumApi = socialStratumApi;
        vm.statusApi = statusApi;


        DocumentTypeFactory.query(function (data){
            vm.documentTypeApi = data;
        });
        BirthPlaceFactory.query(function (data){
            vm.birthPlaceApi = data;
        });
        NationalityFactory.query(function (data){
            vm.nationalityApi = data;
        });
        MaritalStatusFactory.query(function (data){
            vm.maritalStatusApi = data;
        });
        ScholarshipFactory.query(function (data){
            vm.scholarshipApi = data;
        });
        RhFactory.query(function (data){
            vm.rhApi = data;
        });
        SeniorityFactory.query(function (data){
            vm.seniorityApi = data;
        });
        ProjectFactory.query(function (data){
            vm.projectApi = data;
        });
        AfpFactory.query(function (data){
            vm.afpApi = data;
        });
        EpsFactory.query(function (data){
            vm.epsApi = data;
        });

        //Personal Info
        vm.id = 123;
        vm.status = "";
        vm.documentType = "";
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

        vm.validateFormData = function (){
            console.log('We are ok');
        };
    }
})();
