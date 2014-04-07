'use strict';

(function(){

    angular.module('scSurfShack').controller('scNavCtrl', ['$scope', 'scCartSvc', function($scope, scCartSvc){

        $scope.$watch(
            function() {
                return scCartSvc.getNumberOfItems();
            },
            function (numberOfCartItems){
                $scope.itemsInCart = numberOfCartItems;
            }
        );

    }]);
})();/**
 * Created by shanechapman on 4/6/14.
 */
