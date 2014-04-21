'use strict';

(function(){

    angular.module('scSurfShack')

        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

            $stateProvider

                .state('cart', {
                    url: '/cart',
                    templateUrl: 'app/cart/scCart.html',
                    controller: 'scCartCtrl'
                })

        }]);

})();