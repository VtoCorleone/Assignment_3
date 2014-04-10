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

                        $scope.addToCart = function(){
                            scCartSvc.addItems(scSurfboardSvc.getShowcase(1), +$scope.quantity);
                        }

                    }]
                })

        }]);

})();