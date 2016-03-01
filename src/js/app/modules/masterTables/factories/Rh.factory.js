/**
 * Consumes the Rh master table
 */

(function (){
    angular.module('Humanity')
        .factory('RhFactory',rhApi);

    var sailsEndpoint = "http://localhost:1337";
    var rhEndPoint = sailsEndpoint + '/rh';

    function rhApi ($resource){
        return $resource (rhEndPoint);
    }
})();
