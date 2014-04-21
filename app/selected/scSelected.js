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

                        $scope.isButtonDisabled = true;
                        $scope.hasEnoughStock = true;

                        $scope.$watch('quantity', function(q){
                           if (q > 0){
                               $scope.isButtonDisabled = false;
                           }
                           else{
                               $scope.isButtonDisabled = true;
                           }
                        });

                        scSurfboardSvc.getBySku($stateParams.sku).then(
                            function(data) {
                                $scope.selectedBoard = data[0];
                            },
                            function(reason){
                                // error
                            }
                        );

                        $scope.addToCart = function(board){
                            scCartSvc.addItems(board, +$scope.quantity);
                        }

                    }]
                })

        }]);

})();