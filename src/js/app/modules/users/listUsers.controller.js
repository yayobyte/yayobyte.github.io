'use strict';
(function(){
    angular.module('usersModule',['ngResource'])
        .controller('ListUsersController',listUsersController)
        .factory("UserList", usersApi);

    var usersApiEndpoint = "http://localhost:1337/user" ;
    var tableData = [{
        "id": 1,
        "name": "Cristian",
        "lastName": "Gutiérrez",
        "status": 1
        },
        {
            "id": 2,
            "name": "Ximena",
            "lastName": "Tarazona",
            "status": 0
        },
        {
            "id": 3,
            "name": "Daniel",
            "lastName": "Chavez",
            "status": 1
        },
        {
            "id": 4,
            "name": "Cosme",
            "lastName": "Fulanito",
            "status": 0
        }
    ];

    function usersApi ($resource) {
        return $resource(usersApiEndpoint);
    }

    function listUsersController (UserList){
        var vm = this;

        vm.moduleName = "User";
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
