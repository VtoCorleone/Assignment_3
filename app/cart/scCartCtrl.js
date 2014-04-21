'use strict';

(function(){

    angular.module('scSurfShack').controller('scCartCtrl', ['$scope', '$state', 'scCartSvc', function($scope, $state, scCartSvc){

        $scope.boards = scCartSvc.getAll();
        $scope.merchTotal = scCartSvc.getMerchandiseTotal();
        $scope.total = scCartSvc.getTotal();
        $scope.hasEnoughQuantity = true;
        $scope.update = function(board, quantity){
            if (quantity > 0 && $scope.hasEnoughQuantity)
                scCartSvc.updateItem(board, quantity).then(
                    function(){
                        $scope.merchTotal = scCartSvc.getMerchandiseTotal();
                        $scope.total = scCartSvc.getTotal();
                    }
                );
        };
        $scope.delete = function(board){
            scCartSvc.removeItem(board).then(
                function(){
                    $scope.boards = scCartSvc.getAll();
                    $scope.merchTotal = scCartSvc.getMerchandiseTotal();
                    $scope.total = scCartSvc.getTotal();
                },
                function(reason){
                    //error
                }
            );
        };
        $scope.checkoutClicked = function(){
            debugger;
            if (scCartSvc.getAll().length > 0)
                $state.go('checkout');
        };


    }]);
})();
