/**
 * Consumes the EPS Table
 */

(function (){
    angular.module('Humanity')
        .factory("EpsFactory", epsApi);

    var sailsEndpoint = "http://localhost:1337";
    var epsEndPoint = sailsEndpoint + "/eps";

    function epsApi ($resource) {
        return $resource (epsEndPoint);
    }
})();
