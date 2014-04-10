'use strict';

(function(){

    angular.module('scSurfShack').controller('scBrowseCtrl', ['$scope', '$stateParams', 'scSurfboardSvc', function($scope, $stateParams, scSurfboardSvc){

        $scope.browse = scSurfboardSvc.getAll();
        $scope.filteredBy = 'Vendor';

    }]);
})();