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
