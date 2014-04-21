'use strict';

(function(){

    angular.module('scSurfShack')

        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

            $stateProvider

                .state('surfboard', {
                    url: '/surfboard/:sku',
                    templateUrl: 'app/selected/scSelected.html',
                    controller: ['$scope', '$stateParams', 'scSurfboardSvc', 'scCartSvc', function($scope, $stateParams, scSurfboardSvc, scCartSvc){

                        $scope.browse = scSurfboardSvc.getAll();

                        $scope.quantity = 0;

                        $scope.hasEnoughStock = true;
                        $scope.isGreaterThanZero = true;

                        scSurfboardSvc.getBySku($stateParams.sku).then(
                            function(data) {
                                $scope.selectedBoard = data[0];
                            },
                            function(reason){
                                // error
                            }
                        );

                        $scope.addToCart = function(board){
                            if($scope.quantity > 0 && $scope.hasEnoughStock) {
                                $scope.isGreaterThanZero = true;
                                scCartSvc.addItems(board, +$scope.quantity);
                            }
                            else if ($scope.quantity < 1){
                                $scope.isGreaterThanZero = false;
                            }
                        };

                    }]
                })

        }]);

})();