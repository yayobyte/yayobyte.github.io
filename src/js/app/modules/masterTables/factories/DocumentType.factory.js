/**
 * Consumes the Document Type table
 */
'use strict';
(function (){
    angular.module('Humanity')
        .factory('DocumentTypeFactory',nationalityApi);

    var sailsEndpoint = "http://humanityback-yayobyte.rhcloud.com";
    var nationalityApiEndpoint = sailsEndpoint + "/documenttype/:id" ;

    function nationalityApi ($resource) {
        return $resource(nationalityApiEndpoint, {id:'@id'}, { update: {method:'PUT' }});
    }

})();
