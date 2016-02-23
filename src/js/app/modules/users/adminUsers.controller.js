'use strict';
(function(){
    angular.module('usersModule',['ngResource'])
        .controller('AdminUsersController',adminUsersController)
        .factory("BirthPlaceList", birthPlaceApi)
        .factory("NationalityList", nationalityApi)
        .factory("DocumentTypeList", documentTypeApi)
        .factory("MaritalStatusList", maritalStatusApi)
        .factory("RhList", rhApi)
        .factory("ScholarshipList", scholarshipApi);

    var moduleName = "User";

    var sailsEndpoint = "http://localhost:1337";
    var usersApiEndpoint = sailsEndpoint + "/birthplace" ;
    var nationalityEndPoint = sailsEndpoint + "/country";
    var documentTypeEndPoint = sailsEndpoint + '/documenttype';
    var maritalStatusEndPoint = sailsEndpoint + "/maritalstatus";
    var rhEndPoint = sailsEndpoint + '/rh';
    var scholarshipEndPoint = sailsEndpoint + "/scholarship";


    function birthPlaceApi ($resource) {
        return $resource(usersApiEndpoint);
    }

    function nationalityApi ($resource) {
        return $resource (nationalityEndPoint);
    }

    function maritalStatusApi ($resource){
        return $resource (maritalStatusEndPoint);
    }

    function documentTypeApi ($resource){
        return $resource (documentTypeEndPoint);
    }

    function rhApi ($resource){
        return $resource (rhEndPoint);
    }

    function scholarshipApi ($resource){
        return $resource (scholarshipEndPoint);
    }


    function adminUsersController (BirthPlaceList, NationalityList, DocumentTypeList, MaritalStatusList, RhList, ScholarshipList){
        var vm = this;

        vm.moduleName = moduleName;

        BirthPlaceList.query(function(data){
            vm.birthPlaceTableData = data;
        });

        NationalityList.query(function (data){
            vm.nationalityTableData = data;
        });

        DocumentTypeList.query(function (data) {
            vm.documentTypeTableData = data;
        });

        MaritalStatusList.query(function (data) {
            vm.maritalStatusTableData = data;
        });

        RhList.query(function (data) {
            vm.rhTableData = data;
        });

        ScholarshipList.query(function (data) {
            vm.scholarshipTableData = data;
        });

    }
})();
