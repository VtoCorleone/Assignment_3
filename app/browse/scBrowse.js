'use strict';

(function(){

    angular.module('scSurfShack')

        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

            $stateProvider

                .state('browse/vendor', {
                    url: '/browse/vendor/{vendorId:[0-9]{1,4}}',
                    templateUrl: 'app/browse/scBrowse.html',
                    controller: ['$scope', '$stateParams', 'scSurfboardSvc', function($scope, $stateParams, scSurfboardSvc){

                        $scope.browse = scSurfboardSvc.getAll();
                        $scope.filteredBy = 'Vendor';

                    }]
                })

                .state('browse/category', {
                    url: '/browse/category/{categoryId:[0-9]{1,4}}',
                    templateUrl: 'app/browse/scBrowse.html',
                    controller: ['$scope', '$stateParams', 'scSurfboardSvc', function($scope, $stateParams, scSurfboardSvc){
                        debugger;
                        $scope.browse = scSurfboardSvc.getAll();
                        $scope.filteredBy = 'Category';

                    }]
                })

        }]);

})();