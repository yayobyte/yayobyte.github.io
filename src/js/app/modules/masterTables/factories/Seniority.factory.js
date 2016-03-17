/**
 * Consumes the Seniority Table
 */

(function (){
    angular.module('Humanity')
        .factory("SeniorityFactory", seniorityApi);

    var sailsEndpoint = "http://humanityback-yayobyte.rhcloud.com";
    var seniorityEndPoint = sailsEndpoint + "/seniority/:id";

    function seniorityApi ($resource){
        return $resource (seniorityEndPoint, {id:'@id'}, { update: {method:'PUT' }});
    }
})();
