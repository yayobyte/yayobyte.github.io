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
