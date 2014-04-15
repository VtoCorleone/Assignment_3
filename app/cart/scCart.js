'use strict';

(function(){

    angular.module('scSurfShack')

        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

            $stateProvider

                .state('cart', {
                    url: '/cart',
                    templateUrl: 'app/cart/scCart.html',
                    controller: ['$scope', '$stateParams', 'scCartSvc', function($scope, $stateParams, scCartSvc){

                        $scope.boards = scCartSvc.getAll();
                        $scope.merchTotal = scCartSvc.getMerchandiseTotal();
                        $scope.total = scCartSvc.getTotal();

                    }]
                })

        }]);

})();