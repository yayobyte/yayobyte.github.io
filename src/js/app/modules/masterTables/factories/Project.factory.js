/**
 * Consumes the Project Table
 */

(function (){
    angular.module('Humanity')
        .factory("ProjectFactory", projectApi)

    var sailsEndpoint = "http://humanityback-yayobyte.rhcloud.com";
    var projectEndPoint = sailsEndpoint + '/project/:id';

    function projectApi ($resource){
        return $resource (projectEndPoint, {id:'@id'}, { update: {method:'PUT' }});
    }
})();
