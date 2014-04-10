'use strict';

(function(){

    angular.module('scSurfShack').controller('scNavCtrl', ['$scope', 'scCartSvc', function($scope, scCartSvc){

        //Update the number of items in the cart
        $scope.$watch(
            function() {
                return scCartSvc.getNumberOfItems();
            },
            function (numberOfCartItems){
                $scope.itemsInCart = numberOfCartItems;
            }
        );

    }]);
})();
