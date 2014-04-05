'use strict';

(function(){

    angular.module('scSurfShack').controller('scShowcaseCtrl', ['$scope', 'scSurfboardSvc', function($scope, scSurfboardSvc){

        $scope.showcaseSurfboard = scSurfboardSvc.getShowcase();

        $scope.topThree = scSurfboardSvc.getTopThree();

    }]);
})();