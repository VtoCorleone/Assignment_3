'use strict';

(function(){

    angular.module('scSurfShack').controller('scCheckoutCtrl', ['$scope', 'scCartSvc', function($scope, scCartSvc){

        $scope.sameAsBilling = false;

        $scope.sameAsBillingClicked = function(){
            $scope.sameAsBilling = !$scope.sameAsBilling;


        };

        $scope.$watch('sameAsBilling', function(isSame){

            if ($scope.sameAsBilling) {

                var shipNameWatcher = $scope.$watch('billName', function (newShipName) {
                    $scope.shipName = $scope.billName;

                    var i = $scope.$watch('sameAsBilling', function(t){
                       if (!t){
                           shipNameWatcher();
                           i();
                       }
                    });

                });

            }

        });

//        $scope.sameAsBillingClicked = function(){
//            $scope.sameAsBilling = !$scope.sameAsBilling;
//
//            var shipNameWatcher;
//            if ($scope.sameAsBilling){
//                shipNameWatcher = $scope.$watch('billName', function(newShipName){
//                    $scope.shipName = $scope.billName;
//                });
////                $scope.shipName = $scope.billName;
//                $scope.shipAddress1 = $scope.billAddress1;
//                $scope.shipAddress2 = $scope.billAddress2;
//                $scope.shipCity = $scope.billCity;
//                $scope.shipState = $scope.billState;
//                $scope.shipZip = $scope.billZip;
//                $scope.shipPhone = $scope.billPhone;
//            }
//            else{
//                shipNameWatcher();
//                $scope.shipAddress1 = '';
//                $scope.shipAddress2 = '';
//                $scope.shipCity = '';
//                $scope.shipState = '';
//                $scope.shipZip = '';
//                $scope.shipPhone = '';
//            }
//        }

    }]);
})();
