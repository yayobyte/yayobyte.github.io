'use strict';
(function(){
    angular.module('usersModule')
        .controller('titleFactory', titleFactory);

    function titleFactory(){
        var exports = {};

        exports.prop = 'a prop';

        exports.some = function (){
            return true;
        };

        return exports;
    }
})();

