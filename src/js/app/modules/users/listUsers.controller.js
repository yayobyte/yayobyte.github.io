'use strict';
(function(){
    angular.module('usersModule',[])
        .controller('ListUsersController',listUsersController);

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

    function listUsersController (){
        var vm = this;

        vm.moduleName = "User";
        vm.tableFields = {
            "id" : "#",
            "name" : "name",
            "lastName" : "Last Name",
            "status" : "Status"
        };
        vm.tableData = tableData;

    }
})();
