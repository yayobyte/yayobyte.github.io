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
