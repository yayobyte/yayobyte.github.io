/**
 * Consumes the EPS Table
 */

(function (){
    angular.module('Humanity')
        .factory("EpsFactory", epsApi);

    var sailsEndpoint = "http://humanityback-yayobyte.rhcloud.com";
    var epsEndPoint = sailsEndpoint + "/eps/:id";

    function epsApi ($resource) {
        return $resource (epsEndPoint, {id:'@id'}, { update: {method:'PUT' }});
    }
})();
