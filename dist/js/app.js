'use strict';
(function(){
    angular.module('usersModule',[]);
    angular.module('masterTables',[
        'ngResource'
    ]);

    angular.module('Humanity',[
        'usersModule',
        'masterTables',
        'ngResource',
        'ngRoute'
       // 'ui.bootstrap'
    ]);
})();

(function (){
    angular.module('Humanity')
        .config(function ($routeProvider){
            $routeProvider
                .when('/', {
                    templateUrl: 'html/generic/index.html'
                })
                .when('/users/admin', {
                    templateUrl : 'html/users/admin.html'
                })
                .when('/users/create',{
                    templateUrl: 'html/users/create.html'
                })
                .when('/users/list',{
                    templateUrl: 'html/users/list.html'
                })
                .otherwise({
                    templateUrl : 'html/generic/error.html'
                });
        });
})();

(function () {
    'use strict';
    angular.module('Humanity')
        .directive('ieValidation', ieValidation);

    function ieValidation () {
        return {
            restrict : 'E',
            templateUrl : 'html/generic/directives/ie-validation.html'
        };
    }
})();

(function () {
    'use strict';
    angular.module('Humanity')
        .directive('navigationBar', navigationBar);

    function navigationBar () {
        return {
            restrict : 'E',
            templateUrl : 'html/generic/directives/navigation-bar.html'
        }
    }
})();

/**
 * Consumes the AFP Table
 */

(function (){
    angular.module('Humanity')
        .factory("AfpFactory", afpApi);

    var sailsEndpoint = "http://humanityback-yayobyte.rhcloud.com";
    var afpEndpoint = sailsEndpoint + "/afp/:id" ;

    function afpApi ($resource) {
        return $resource(afpEndpoint, {id:'@id'}, {
            update: {
                method:'PUT'
            },
            get : {
                method: 'GET',
                headers : {
                    'Access-Control-Allow-Origin' : '*'
                }
            }
        });
    }
})();

/**
 * Consumes the birthplace table
 */
'use strict';
(function (){
    angular.module('Humanity')
        .factory('BirthPlaceFactory',birthPlaceApi);

    var sailsEndpoint = "http://humanityback-yayobyte.rhcloud.com";
    var birthPlaceApiEndpoint = sailsEndpoint + "/birthplace/:id" ;

    function birthPlaceApi ($resource) {
        return $resource(birthPlaceApiEndpoint, {id:'@id'}, { update: {method:'PUT' }});
    }

})();

/**
 * Consumes the Document Type table
 */
'use strict';
(function (){
    angular.module('Humanity')
        .factory('DocumentTypeFactory',nationalityApi);

    var sailsEndpoint = "http://humanityback-yayobyte.rhcloud.com";
    var nationalityApiEndpoint = sailsEndpoint + "/documenttype/:id" ;

    function nationalityApi ($resource) {
        return $resource(nationalityApiEndpoint, {id:'@id'}, { update: {method:'PUT' }});
    }

})();

/**
 * Consumes the EPS Table
 */

(function (){
    angular.module('Humanity')
        .factory("EpsFactory", epsApi);

    var sailsEndpoint = "http://humanityback-yayobyte.rhcloud.com";
    var epsEndPoint = sailsEndpoint + "/eps/:id";

    function epsApi ($resource) {
        return $resource (epsEndPoint, {id:'@id'}, { update: {method:'PUT' }});
    }
})();

/**
 * Consumes the Marital Status Master Table
 */
(function(){
    angular.module('Humanity')
        .factory('MaritalStatusFactory', maritalStatusApi);


    var sailsEndpoint = "http://humanityback-yayobyte.rhcloud.com";
    var maritalStatusEndPoint = sailsEndpoint + "/maritalstatus/:id";

    function maritalStatusApi ($resource){
        return $resource (maritalStatusEndPoint, {id:'@id'}, { update: {method:'PUT' }});
    }
})();

/**
 * Consumes the Country table
 */
'use strict';
(function (){
    angular.module('Humanity')
        .factory('NationalityFactory',nationalityApi);

    var sailsEndpoint = "http://humanityback-yayobyte.rhcloud.com";
    var nationalityApiEndpoint = sailsEndpoint + "/country/:id" ;

    function nationalityApi ($resource) {
        return $resource(nationalityApiEndpoint, {id:'@id'}, { update: {method:'PUT' }});
    }

})();

(function (){
    'use strict';
    angular.module('Humanity')
        .factory('ParamSocialSecurityEmailFactory', ParamSocialSecurityEmailFactory);

    var sailsEndpoint = "http://humanityback-yayobyte.rhcloud.com";
    var paramSocialSecurityEmailEndpoint = sailsEndpoint + "/paramsocialsecurityemail/:id" ;

    function ParamSocialSecurityEmailFactory ($resource){
        return $resource(paramSocialSecurityEmailEndpoint, {id:'@id'}, { update: {method:'PUT' }});
    }
})();

/**
 * Consumes the Project Table
 */

(function (){
    angular.module('Humanity')
        .factory("ProjectFactory", projectApi)

    var sailsEndpoint = "http://humanityback-yayobyte.rhcloud.com";
    var projectEndPoint = sailsEndpoint + '/project/:id';

    function projectApi ($resource){
        return $resource (projectEndPoint, {id:'@id'}, { update: {method:'PUT' }});
    }
})();

/**
 * Consumes the Rh master table
 */

(function (){
    angular.module('Humanity')
        .factory('RhFactory',rhApi);

    var sailsEndpoint = "http://humanityback-yayobyte.rhcloud.com";
    var rhEndPoint = sailsEndpoint + '/rh/:id';

    function rhApi ($resource){
        return $resource (rhEndPoint, {id:'@id'}, { update: {method:'PUT' }});
    }
})();

/**
 * Consumes the Scholarship Master Table
 */
(function (){
    angular.module('Humanity')
        .factory("ScholarshipFactory", scholarshipApi);

    var sailsEndpoint = "http://humanityback-yayobyte.rhcloud.com";
    var scholarshipEndPoint = sailsEndpoint + "/scholarship/:id";

    function scholarshipApi ($resource){
        return $resource (scholarshipEndPoint, {id:'@id'}, { update: {method:'PUT' }});
    }
})();

/**
 * Consumes the Seniority Table
 */

(function (){
    angular.module('Humanity')
        .factory("SeniorityFactory", seniorityApi);

    var sailsEndpoint = "http://humanityback-yayobyte.rhcloud.com";
    var seniorityEndPoint = sailsEndpoint + "/seniority/:id";

    function seniorityApi ($resource){
        return $resource (seniorityEndPoint, {id:'@id'}, { update: {method:'PUT' }});
    }
})();

/**
 * Consumes the Skills table
 */
(function (){
    angular.module('Humanity')
        .factory("SkillsFactory", skillsApi);

    var sailsEndpoint = "http://humanityback-yayobyte.rhcloud.com";
    var skillsEndPoint = sailsEndpoint + '/skills/:id';

    function skillsApi ($resource){
        return $resource (skillsEndPoint, {id:'@id'}, { update: {method:'PUT' }});
    }
})();

'use strict';
(function(){
    angular.module('Humanity')
        .controller('AdminUsersController',adminUsersController);

    var moduleName = "User";

    function adminUsersController (
        BirthPlaceFactory, NationalityFactory, DocumentTypeFactory, MaritalStatusFactory, RhFactory, ScholarshipFactory,
        AfpFactory, EpsFactory, ProjectFactory, SeniorityFactory, SkillsFactory, ParamSocialSecurityEmailFactory
    )
    {
        var vm = this;

        vm.moduleName = moduleName;
        vm.modal = {};

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
        ParamSocialSecurityEmailFactory.query(function (data){
            vm.socialSecutiryEmailTableData = data;
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

        vm.setupModal = function (modalName,id,name) {
            vm.modal.ModalHeader = modalName;
            vm.modal.id = id;
            vm.modal.name = name;
        };

        vm.createNewConfigRecord = function (tableName){

        };

    }
})();

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
                                   EpsFactory, SkillsFactory, UsersFactory){
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
        vm.skillsApi = "";

        vm.postObject = {};
        vm.postStatus = {};
        vm.postStatus.error = false;
        vm.postStatus.message = false;
        vm.postStatus.postedForm = false;
        vm.personalInfo = {};
        vm.contactInfo = {};
        vm.corporateInfo = {};
        vm.securityInfo = {};

        //Personal Info
        vm.personalInfo.status = true;

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
        SkillsFactory.query(function (data){
            vm.skillsApi = data;
        });

        vm.extractSkills = function (){

            vm.postObject.skill = [];
            for (var property in vm.corporateInfo.skills){
                if(vm.corporateInfo.skills[property] == true){
                    vm.postObject.skill.push(property);
                }
            }
        };

        vm.validateFormData = function (){
            console.log('Creating new user');

            angular.extend(vm.postObject, vm.personalInfo);
            vm.postObject.documentType = vm.personalInfo.documentType.id ;
            vm.postObject.birthPlace = vm.personalInfo.birthPlace.id;
            vm.postObject.nationality =  vm.personalInfo.nationality.id;
            vm.postObject.maritalStatus = vm.personalInfo.maritalStatus.id;
            vm.postObject.scholarship = vm.personalInfo.scholarship.id;
            vm.postObject.socialStratum = vm.personalInfo.socialStratum.id;
            vm.postObject.rh = vm.personalInfo.rh.id;

            angular.extend(vm.postObject,vm.contactInfo);

            angular.extend(vm.postObject,vm.corporateInfo);
            vm.postObject.seniority = vm.corporateInfo.seniority.id;
            vm.postObject.project = vm.corporateInfo.project.id;

            vm.postObject.afp = vm.securityInfo.afp.id;
            vm.postObject.eps = vm.securityInfo.eps.id;

            UsersFactory.save(vm.postObject, function (response){
                vm.postStatus  =  response;
                vm.postStatus.message = "User successfully created";
                vm.postStatus.error = false;
                vm.resetInfo();
            },function (error){
                vm.postStatus = error;
                vm.postStatus.message = "Error " + error.status + " " + error.statusText + " | Message: " + error.data.summary;
                vm.postStatus.error = true;
                vm.postStatus.postedForm = true;
            });
            return true;
        };

        vm.resetInfo = function (){
            vm.personalInfo = {};
            vm.contactInfo = {};
            vm.corporateInfo = {};
            vm.securityInfo = {};
        }
    }
})();

'use strict';
(function(){
    angular.module('Humanity')
        .controller('ListUsersController',listUsersController)
        .factory("UserList", usersApi);

    var usersApiEndpoint = "http://humanityback-yayobyte.rhcloud.com" ;
    var moduleName = "Users";

    function usersApi ($resource) {
        return $resource(usersApiEndpoint);
    }

    function listUsersController (UserList, UsersFactory){
        var vm = this;
        vm.postStatus = {};
        vm.postObject = {};
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

        vm.changeUserStatus = function (userId, userStatus) {
            vm.postObject.id = userId;
            vm.postObject.status = (userStatus == 1 ? 0 : 1);
            UsersFactory.save(vm.postObject, function (response){
                vm.postStatus  =  response;
                vm.postStatus.message = "User successfully created";
                vm.postStatus.error = false;
                UserList.query(function(data){
                    vm.tableData = data;
                });
            },function (error){
                vm.postStatus = error;
                vm.postStatus.message = "Error " + error.status + " " + error.statusText + " | Message: " + error.data.summary;
                vm.postStatus.error = true;
                vm.postStatus.postedForm = true;
            });
        };
    }
})();

'use strict';
(function (){
    angular.module('usersModule')
        .directive("insertModal",insertModal);

    function insertModal (){
        var directive = {
            restrict: 'E',
            scope: {
                modalName:'@',
                recordId : '@',
                recordName : '@'
            },
            templateUrl : "html/users/directives/modal-directive.html",
            controller : modalController,
            controllerAs: "modalCtrl",
            bindToController: true
        };

        return directive;
    }

    function modalController (AfpFactory, EpsFactory, ProjectFactory, SeniorityFactory, SkillsFactory,ParamSocialSecurityEmailFactory) {
        var vm = this;
        vm.postStatus = {};
        vm.submitted = false;
        vm.updating = false;
        vm.tablePrefix = "";
        if (vm.recordId!='' || vm.recordId!= undefined){
            vm.name = vm.recordName;
            vm.updating = true;
        }

        vm.validateFormData = function (prefix){
            vm.tablePrefix = prefix;
            if (vm.recordId){
                vm.postStatus.data = { "name": vm.name, "id" : vm.recordId };
            }else{
                vm.postStatus.data = { "name": vm.name };
            }
            switch (prefix) {
                case 'Afp' :
                    AfpFactory.save(vm.postStatus.data, vm.postSuccess, vm.postError);
                    break;
                case 'Eps':
                    EpsFactory.save(vm.postStatus.data, vm.postSuccess, vm.postError);
                    break;
                case 'Project' :
                    ProjectFactory.save(vm.postStatus.data, vm.postSuccess, vm.postError);
                    break;
                case 'Seniority' :
                    SeniorityFactory.save(vm.postStatus.data, vm.postSuccess, vm.postError);
                    break;
                case 'Skills' :
                    SkillsFactory.save(vm.postStatus.data, vm.postSuccess, vm.postError);
                    break;
                case 'SocialSecurityEmails' :
                    ParamSocialSecurityEmailFactory.save(vm.postStatus.data, vm.postSuccess, vm.postError);
                    break;
                default :
                    vm.postError({status: 503 , data: {summary:"Error finding provider"}});
            }
            return true;
        };

        vm.resetInfo = function (){
            vm.name = "";

        };

        vm.reLoadModal = function (){
            window.location.reload(false);
        };

        vm.postSuccess = function (response){
            vm.postStatus  =  response;
            vm.postStatus.message = vm.tablePrefix + " successfully created/created";
            vm.postStatus.error = false;
            vm.resetInfo();
            vm.postStatus.submitted = true;
        };

        vm.postError = function (error){
            vm.postStatus = error;
            vm.postStatus.message = "Error " + error.status + " " + error.statusText + " | Message: " + error.data.summary;
            vm.postStatus.error = true;
        };
    }
})();

(function (){
    angular.module('Humanity')
        .factory('UsersFactory', usersFactory );

    var sailsEndpoint = "http://humanityback-yayobyte.rhcloud.com";
    var usersEndpoint = sailsEndpoint + "/user/:id" ;

    function usersFactory ($resource){
         return $resource(usersEndpoint, {id:'@id'}, { update: {method:'PUT' }});
    }
})();
