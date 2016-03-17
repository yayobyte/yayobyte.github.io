/**
 * Consumes the Rh master table
 */

(function (){
    angular.module('Humanity')
        .factory('RhFactory',rhApi);

    var sailsEndpoint = "http://humanityback-yayobyte.rhcloud.com";
    var rhEndPoint = sailsEndpoint + '/rh/:id';

    function rhApi ($resource){
        return $resource (rhEndPoint, {id:'@id'}, { update: {method:'PUT' }});
    }
})();
