'use strict';

(function(){

    angular.module('scSurfShack')

        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

            $stateProvider

                .state('checkout', {
                    url: '/checkout',
                    templateUrl: 'app/checkout/scCheckout.html',
                    controller: 'scCheckoutCtrl'
                })
        }]);

})();
