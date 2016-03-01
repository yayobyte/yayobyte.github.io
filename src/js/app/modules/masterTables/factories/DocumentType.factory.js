/**
 * Consumes the Document Type table
 */
'use strict';
(function (){
    angular.module('Humanity')
        .factory('DocumentTypeFactory',nationalityApi);

    var sailsEndpoint = "http://localhost:1337";
    var nationalityApiEndpoint = sailsEndpoint + "/documenttype" ;

    function nationalityApi ($resource) {
        return $resource(nationalityApiEndpoint);
    }

})();
