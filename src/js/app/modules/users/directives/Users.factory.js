(function (){
    angular.module('Humanity')
        .factory('UsersFactory', usersFactory );

    var sailsEndpoint = "http://localhost:1337";
    var usersEndpoint = sailsEndpoint + "/user" ;

    function usersFactory ($resource){
         return $resource(usersEndpoint);
    }
})();