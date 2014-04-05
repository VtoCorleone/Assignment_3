'use strict';

(function(){

    angular.module('scSurfShack').controller('scBrowseCtrl', ['$scope', 'scSurfboardSvc', function($scope, scSurfboardSvc){

        $scope.browse = scSurfboardSvc.getAll();

    }]);
})();