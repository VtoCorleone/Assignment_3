'use strict';

(function(){

    angular.module('scSurfShack')

        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

            $stateProvider

                .state('browse/vendor', {
                    url: '/browse/vendor/:vendorId',
                    templateUrl: 'app/browse/scBrowse.html',
                    controller: ['$scope', '$stateParams', 'scSurfboardSvc', function($scope, $stateParams, scSurfboardSvc){

                        scSurfboardSvc.getByVendor($stateParams.vendorId).then(
                            function(data){
                                $scope.browse = data;
                            },
                            function(reason){
                                //error
                            }
                        )
                        $scope.filteredBy = 'Vendor';

                    }]
                })

                .state('browse/category', {
                    url: '/browse/category/:categoryId',
                    templateUrl: 'app/browse/scBrowse.html',
                    controller: ['$scope', '$stateParams', 'scSurfboardSvc', function($scope, $stateParams, scSurfboardSvc){
                        scSurfboardSvc.getByCategory($stateParams.categoryId).then(
                            function(data){
                                $scope.browse = data;
                            },
                            function(reason){
                                //error
                            }
                        )
                        $scope.filteredBy = 'Category';

                    }]
                })

        }]);

})();