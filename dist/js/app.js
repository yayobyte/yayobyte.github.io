'use strict';
(function(){
    angular.module('Humanity',[
        'usersModule'
       // 'ui.bootstrap'
    ]);
})();

'use strict';
(function (){
    angular.module('certificate',[]);
})();

'use strict';
(function () {
    angular.module('usersModule',['ngResource']);
})();

'use strict';
(function(){
    angular.module('certificateModule',[])
        .controller('certificateCtrl', certificateCtrl);

    function certificateCtrl(){

    }
})();

'use strict';
(function(){
    angular.module('usersModule',['ngResource'])
        .controller('AdminUsersController',adminUsersController)
        .factory("BirthPlaceList", birthPlaceApi)
        .factory("NationalityList", nationalityApi)
        .factory("DocumentTypeList", documentTypeApi)
        .factory("MaritalStatusList", maritalStatusApi)
        .factory("RhList", rhApi)
        .factory("ScholarshipList", scholarshipApi)
        .factory("AfpList", afpApi)
        .factory("EpsList", epsApi)
        .factory("ProjectList", projectApi)
        .factory("SeniorityList", seniorityApi)
        .factory("SkillsList", skillsApi);

    var moduleName = "User";

    var sailsEndpoint = "http://localhost:1337";
    //Config Tables
    var afpEndpoint = sailsEndpoint + "/afp" ;
    var epsEndPoint = sailsEndpoint + "/eps";
    var projectEndPoint = sailsEndpoint + '/project';
    var seniorityEndPoint = sailsEndpoint + "/seniority";
    var skillsEndPoint = sailsEndpoint + '/skills';

    //Master Tables
    var usersApiEndpoint = sailsEndpoint + "/birthplace" ;
    var nationalityEndPoint = sailsEndpoint + "/country";
    var documentTypeEndPoint = sailsEndpoint + '/documenttype';
    var maritalStatusEndPoint = sailsEndpoint + "/maritalstatus";
    var rhEndPoint = sailsEndpoint + '/rh';
    var scholarshipEndPoint = sailsEndpoint + "/scholarship";



    //Config Tables
    function afpApi ($resource) {
        return $resource(afpEndpoint);
    }
    function epsApi ($resource) {
        return $resource (epsEndPoint);
    }
    function projectApi ($resource){
        return $resource (projectEndPoint);
    }
    function seniorityApi ($resource){
        return $resource (seniorityEndPoint);
    }
    function skillsApi ($resource){
        return $resource (skillsEndPoint);
    }


    //Master Tables
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

    function adminUsersController (
        BirthPlaceList, NationalityList, DocumentTypeList, MaritalStatusList, RhList, ScholarshipList,
        AfpList, EpsList, ProjectList, SeniorityList, SkillsList
    )
    {
        var vm = this;


        vm.moduleName = moduleName;


        //Config Tables
        AfpList.query(function(data){
            vm.afpTableData = data;
        });
        EpsList.query(function(data){
            vm.epsTableData = data;
        });
        ProjectList.query(function(data){
            vm.projectTableData = data;
        });
        SeniorityList.query(function(data){
            vm.seniorityTableData = data;
        });
        SkillsList.query(function(data){
            vm.skillsTableData = data;
        });




        //Master Tables
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

        vm.arrayToString = function(string){
            return string.join(", ");
        };

    }
})();

'use strict';
(function(){
    angular.module('usersModule')
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

'use strict';
(function(){
    angular.module('usersModule')
        .controller('ListUsersController',listUsersController)
        .factory("UserList", usersApi);

    var usersApiEndpoint = "http://localhost:1337/user" ;
    var moduleName = "Users";

    function usersApi ($resource) {
        return $resource(usersApiEndpoint);
    }

    function listUsersController (UserList){
        var vm = this;

        vm.moduleName = moduleName;
        vm.tableFields = {
            "id" : "#",
            "name" : "name",
            "lastName" : "Last Name",
            "status" : "Status",
            "projectName" : "Project Name"
        };

        UserList.query(function(data){
            vm.tableData = data;
        });


    }
})();

'use strict';
(function (){
    angular.module('usersModule',[])
        .directive("insertModal",insertModal);

    function insertModal (){
        return {
            template : 'Nombre y direccion'
        };
    }
})();
