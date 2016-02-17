'use strict';
(function(){
    angular.module('usersModule')
        .service('apiSrv', apiSrv);

    function apiSvr(){
        var prop = 'some';

        function some (){
            return true
        }

        this.prop = prop;
        this.some = some;

    }
})();
