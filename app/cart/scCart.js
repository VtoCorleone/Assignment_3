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
                        $scope.update = function(board, quantity){
                            if (quantity > 0)
                                scCartSvc.updateItem(board, quantity).then(
                                    function(){
                                        $scope.merchTotal = scCartSvc.getMerchandiseTotal();
                                        $scope.total = scCartSvc.getTotal();
                                    }
                                );
                        };
                        $scope.hasEnoughQuantity = true;
                        $scope.delete = function(board){
                            scCartSvc.removeItem(board).then(
                                function(){
                                    $scope.boards = scCartSvc.getAll();
                                    $scope.merchTotal = scCartSvc.getMerchandiseTotal();
                                    $scope.total = scCartSvc.getTotal();
                                },
                                function(reason){
                                    //error
                                }
                            );
                        };

                    }]
                })

        }]);

})();