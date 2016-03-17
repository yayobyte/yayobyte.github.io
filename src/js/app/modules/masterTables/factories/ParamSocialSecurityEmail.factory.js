(function (){
    'use strict';
    angular.module('Humanity')
        .factory('ParamSocialSecurityEmailFactory', ParamSocialSecurityEmailFactory);

    var sailsEndpoint = "http://humanityback-yayobyte.rhcloud.com";
    var paramSocialSecurityEmailEndpoint = sailsEndpoint + "/paramsocialsecurityemail/:id" ;

    function ParamSocialSecurityEmailFactory ($resource){
        return $resource(paramSocialSecurityEmailEndpoint, {id:'@id'}, { update: {method:'PUT' }});
    }
})();
