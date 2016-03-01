/**
 * Consumes the Project Table
 */

(function (){
    angular.module('Humanity')
        .factory("ProjectFactory", projectApi)

    var sailsEndpoint = "http://localhost:1337";
    var projectEndPoint = sailsEndpoint + '/project';

    function projectApi ($resource){
        return $resource (projectEndPoint);
    }
})();
