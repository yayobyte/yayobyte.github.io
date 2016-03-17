/**
 * Consumes the AFP Table
 */

(function (){
    angular.module('Humanity')
        .factory("AfpFactory", afpApi);

    var sailsEndpoint = "http://humanityback-yayobyte.rhcloud.com";
    var afpEndpoint = sailsEndpoint + "/afp/:id" ;

    function afpApi ($resource) {
        return $resource(afpEndpoint, {id:'@id'}, { update: {method:'PUT' }});
    }
})();
