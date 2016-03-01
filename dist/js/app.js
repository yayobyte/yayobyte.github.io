'use strict';
(function(){
    angular.module('usersModule',[]);
    angular.module('masterTables',[
        'ngResource'
    ]);

    angular.module('Humanity',[
        'usersModule',
        'masterTables',
        'ngResource'
       // 'ui.bootstrap'
    ]);
})();

/**
 * Consumes the AFP Table
 */

(function (){
    angular.module('Humanity')
        .factory("AfpFactory", afpApi);

    var sailsEndpoint = "http://localhost:1337";
    var afpEndpoint = sailsEndpoint + "/afp" ;

    function afpApi ($resource) {
        return $resource(afpEndpoint);
    }
})();

/**
 * Consumes the birthplace table
 */
'use strict';
(function (){
    angular.module('Humanity')
        .factory('BirthPlaceFactory',birthPlaceApi);

    var sailsEndpoint = "http://localhost:1337";
    var birthPlaceApiEndpoint = sailsEndpoint + "/birthplace" ;

    function birthPlaceApi ($resource) {
        return $resource(birthPlaceApiEndpoint);
    }

})();

/**
 * Consumes the Document Type table
 */
'use strict';
(function (){
    angular.module('Humanity')
        .factory('DocumentTypeFactory',nationalityApi);

    var sailsEndpoint = "http://localhost:1337";
    var nationalityApiEndpoint = sailsEndpoint + "/country" ;

    function nationalityApi ($resource) {
        return $resource(nationalityApiEndpoint);
    }

})();

/**
 * Consumes the EPS Table
 */

(function (){
    angular.module('Humanity')
        .factory("EpsFactory", epsApi);

    var sailsEndpoint = "http://localhost:1337";
    var epsEndPoint = sailsEndpoint + "/eps";

    function epsApi ($resource) {
        return $resource (epsEndPoint);
    }
})();

/**
 * Consumes the Marital Status Master Table
 */
(function(){
    angular.module('Humanity')
        .factory('MaritalStatusFactory', maritalStatusApi);


    var sailsEndpoint = "http://localhost:1337";
    var maritalStatusEndPoint = sailsEndpoint + "/maritalstatus";

    function maritalStatusApi ($resource){
        return $resource (maritalStatusEndPoint);
    }
})();

/**
 * Consumes the Country table
 */
'use strict';
(function (){
    angular.module('Humanity')
        .factory('NationalityFactory',nationalityApi);

    var sailsEndpoint = "http://localhost:1337";
    var nationalityApiEndpoint = sailsEndpoint + "/country" ;

    function nationalityApi ($resource) {
        return $resource(nationalityApiEndpoint);
    }

})();

/**
 * Consumes the Project Table
 */

(function (){
    angular.module('Humanity')
        .factory("ProjectFactory", projectApi)

    var sailsEndpoint = "http://localhost:1337";
    var projectEndPoint = sailsEndpoint + '/project';

    function projectApi ($resource){
        return $resource (projectEndPoint);
    }
})();

/**
 * Consumes the Rh master table
 */

(function (){
    angular.module('Humanity')
        .factory('RhFactory',rhApi);

    var sailsEndpoint = "http://localhost:1337";
    var rhEndPoint = sailsEndpoint + '/rh';

    function rhApi ($resource){
        return $resource (rhEndPoint);
    }
})();

/**
 * Consumes the Scholarship Master Table
 */
(function (){
    angular.module('Humanity')
        .factory("ScholarshipFactory", scholarshipApi);

    var sailsEndpoint = "http://localhost:1337";
    var scholarshipEndPoint = sailsEndpoint + "/scholarship";

    function scholarshipApi ($resource){
        return $resource (scholarshipEndPoint);
    }
})();

/**
 * Consumes the Seniority Table
 */

(function (){
    angular.module('Humanity')
        .factory("SeniorityFactory", seniorityApi);

    var sailsEndpoint = "http://localhost:1337";
    var seniorityEndPoint = sailsEndpoint + "/seniority";

    function seniorityApi ($resource){
        return $resource (seniorityEndPoint);
    }
})();

/**
 * Consumes the Skills table
 */
(function (){
    angular.module('Humanity')
        .factory("SkillsFactory", skillsApi);

    var sailsEndpoint = "http://localhost:1337";
    var skillsEndPoint = sailsEndpoint + '/skills';

    function skillsApi ($resource){
        return $resource (skillsEndPoint);
    }
})();

'use strict';
(function(){
    angular.module('Humanity')
        .controller('AdminUsersController',adminUsersController);

    var moduleName = "User";

    function adminUsersController (
        BirthPlaceFactory, NationalityFactory, DocumentTypeFactory, MaritalStatusFactory, RhFactory, ScholarshipFactory,
        AfpFactory, EpsFactory, ProjectFactory, SeniorityFactory, SkillsFactory
    )
    {
        var vm = this;

        vm.moduleName = moduleName;

        //Config Tables
        AfpFactory.query(function(data){
            vm.afpTableData = data;
        });
        EpsFactory.query(function(data){
            vm.epsTableData = data;
        });
        ProjectFactory.query(function(data){
            vm.projectTableData = data;
        });
        SeniorityFactory.query(function(data){
            vm.seniorityTableData = data;
        });
        SkillsFactory.query(function(data){
            vm.skillsTableData = data;
        });


        //Master Tables
        BirthPlaceFactory.query(function(data){
            vm.birthPlaceTableData = data;
        });
        NationalityFactory.query(function (data){
            vm.nationalityTableData = data;
        });
        DocumentTypeFactory.query(function (data) {
            vm.documentTypeTableData = data;
        });
        MaritalStatusFactory.query(function (data) {
            vm.maritalStatusTableData = data;
        });
        RhFactory.query(function (data) {
            vm.rhTableData = data;
        });
        ScholarshipFactory.query(function (data) {
            vm.scholarshipTableData = data;
        });

        vm.arrayToString = function(string){
            return string.join(", ");
        };

    }
})();

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

'use strict';
(function(){
    angular.module('Humanity')
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
