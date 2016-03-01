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
