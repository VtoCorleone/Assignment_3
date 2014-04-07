'use strict';

(function(){

    angular.module('scSurfShack').controller('scShowcaseCtrl', ['$scope', 'scSurfboardSvc', 'scCartSvc', function($scope, scSurfboardSvc, scCartSvc){

        $scope.showcaseSurfboard = scSurfboardSvc.getShowcase();

        $scope.topThree = scSurfboardSvc.getTopThree();

        //$scope.itemsInCart = scCartSvc.getNumberOfItems();

    }]);
})();