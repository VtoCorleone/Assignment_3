'use strict';

(function(){

    angular.module('scSurfShack')

        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

            $stateProvider

                .state('confirmation', {
                    url: '/confirmation',
                    templateUrl: 'app/confirmation/scConfirmation.html',
                    controller: 'scConfirmationCtrl'
                })
        }]);

})();
