'use strict';
(function(){
    angular.module('Humanity')
        .service('Users', apiSrv);

    function Users(){
        var prop = 'some';

        function some (){
            return true
        }

        this.prop = prop;
        this.some = some;

    }
})();
