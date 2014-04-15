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