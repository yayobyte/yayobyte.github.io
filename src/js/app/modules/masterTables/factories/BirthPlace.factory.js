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
