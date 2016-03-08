(function (){
    'use strict';
    angular.module('Humanity')
        .directive('updateModal', updateModal);

    function updateModal (){
        return {
            restrict : 'E',
            templateUrl : 'directives/modal-directive.html',
            scope : {
                modalName: '@'
            },
            bindToController: true,
            controller: updateModalController,
            controllerAs : "modalCtrl"
        };
    }

    function updateModalController (AfpFactory, EpsFactory, ProjectFactory, SeniorityFactory, SkillsFactory){
        var vm = this;
        vm.postStatus = {};
        vm.submitted = false;
        vm.tablePrefix = "";

        vm.validateFormData = function (prefix){
            vm.tablePrefix = prefix;
            switch (prefix) {
                case 'Afp' :
                    AfpFactory.save({"name": vm.name}, vm.postSuccess, vm.postError);
                    break;
                case 'Eps':
                    EpsFactory.save({"name": vm.name}, vm.postSuccess, vm.postError);
                    break;
                case 'Project' :
                    ProjectFactory.save({"name": vm.name}, vm.postSuccess, vm.postError);
                    break;
                case 'Seniority' :
                    SeniorityFactory.save({"name": vm.name}, vm.postSuccess, vm.postError);
                    break;
                case 'Skills' :
                    SkillsFactory.save({"name": vm.name}, vm.postSuccess, vm.postError);
                    break;
                default :
                    vm.postError({status: 503 , data: {summary:"Error finding provider"}});

            }
            return true;
        };

        vm.resetInfo = function (){
            vm.name = "";

        };

        vm.reLoadModal = function (){
            window.location.reload(false);
        };

        vm.postSuccess = function (response){
            vm.postStatus  =  response;
            vm.postStatus.message = vm.tablePrefix + " successfully created";
            vm.postStatus.error = false;
            vm.resetInfo();
            vm.postStatus.submitted = true;
        };

        vm.postError = function (error){
            vm.postStatus = error;
            vm.postStatus.message = "Error " + error.status + " " + error.statusText + " | Message: " + error.data.summary;
            vm.postStatus.error = true;
        };
    }
})();
