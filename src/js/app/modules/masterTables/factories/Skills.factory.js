/**
 * Consumes the Skills table
 */
(function (){
    angular.module('Humanity')
        .factory("SkillsFactory", skillsApi);

    var sailsEndpoint = "http://humanityback-yayobyte.rhcloud.com";
    var skillsEndPoint = sailsEndpoint + '/skills/:id';

    function skillsApi ($resource){
        return $resource (skillsEndPoint, {id:'@id'}, { update: {method:'PUT' }});
    }
})();
