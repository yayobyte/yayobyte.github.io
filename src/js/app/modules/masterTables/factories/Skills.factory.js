/**
 * Consumes the Skills table
 */
(function (){
    angular.module('Humanity')
        .factory("SkillsFactory", skillsApi);

    var sailsEndpoint = "http://localhost:1337";
    var skillsEndPoint = sailsEndpoint + '/skills';

    function skillsApi ($resource){
        return $resource (skillsEndPoint);
    }
})();
