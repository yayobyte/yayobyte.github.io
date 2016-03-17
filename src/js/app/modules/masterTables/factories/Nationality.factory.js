/**
 * Consumes the Country table
 */
'use strict';
(function (){
    angular.module('Humanity')
        .factory('NationalityFactory',nationalityApi);

    var sailsEndpoint = "http://humanityback-yayobyte.rhcloud.com";
    var nationalityApiEndpoint = sailsEndpoint + "/country/:id" ;

    function nationalityApi ($resource) {
        return $resource(nationalityApiEndpoint, {id:'@id'}, { update: {method:'PUT' }});
    }

})();
