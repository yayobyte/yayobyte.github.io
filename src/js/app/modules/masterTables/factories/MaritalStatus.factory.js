/**
 * Consumes the Marital Status Master Table
 */
(function(){
    angular.module('Humanity')
        .factory('MaritalStatusFactory', maritalStatusApi);


    var sailsEndpoint = "http://humanityback-yayobyte.rhcloud.com";
    var maritalStatusEndPoint = sailsEndpoint + "/maritalstatus/:id";

    function maritalStatusApi ($resource){
        return $resource (maritalStatusEndPoint, {id:'@id'}, { update: {method:'PUT' }});
    }
})();
