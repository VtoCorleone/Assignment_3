'use strict';

(function(){

    angular.module('scSurfShack').controller('scConfirmationCtrl', ['$scope', 'scCheckoutSvc', function($scope, scCheckoutSvc){

        scCheckoutSvc.getOrder().then(function(data){

            $scope.orderDetails = data;

        });

    }]);

})();