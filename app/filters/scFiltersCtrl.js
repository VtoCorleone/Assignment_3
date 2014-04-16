'use strict';

(function(){

    angular.module('scSurfShack').controller('scFiltersCtrl', ['$scope', 'scFiltersSvc', function($scope, scFiltersSvc){

        scFiltersSvc.getVendors().then(
            function(data){
                $scope.vendors = data;
            },
            function(reason){
                // Error
                console.log(reason);
            }
        );

        scFiltersSvc.getCategories().then(
            function(data){
                $scope.categories = data;
            },
            function(reason){
                // Error
                console.log(reason);
            }
        );

    }]);

})();