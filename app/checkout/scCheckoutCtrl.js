'use strict';

(function(){

    angular.module('scSurfShack').controller('scCheckoutCtrl', ['$scope', 'scCheckoutSvc', '$state', function($scope, scCheckoutSvc, $state){

        $scope.isSameAsBilling = false;

        $scope.submitted = false;

        $scope.validateForm = function($event){

            $scope.submitted = true;

            if ($scope.checkout_form.$valid)
                $state.go('confirmation');
//         $scope.ccType
//         $scope.ccName
//         $scope.ccNumber
//         $scope.ccExpiration
//         $scope.ccSecurity
//         $scope.billName
//         $scope.billAddress1
//         $scope.billAddress2
//         $scope.billCity
//         $scope.billState
//         $scope.billZip
//         $scope.billPhone
//         $scope.shipName
//         $scope.shipAddress1
//         $scope.shipAddress2
//         $scope.shipCity
//         $scope.shipState
//         $scope.shipZip
//         $scope.shipPhone

//            if ($scope.isValidForm) {
//                $state.go('confirmation');
//            }

        };

        $scope.sameAsBillingClicked = function(){
            $scope.isSameAsBilling = !$scope.isSameAsBilling;

            if ($scope.isSameAsBilling){
                $scope.nameWatcher = $scope.$watch('billName', function(bName){
                   $scope.shipName = bName;
                });
                $scope.address1Watcher = $scope.$watch('billAddress1', function(bAddress1){
                    $scope.shipAddress1 = bAddress1;
                });
                $scope.address2Watcher = $scope.$watch('billAddress2', function(bAddress2){
                    $scope.shipAddress2 = bAddress2;
                });
                $scope.cityWatcher = $scope.$watch('billCity', function(bCity){
                    $scope.shipCity = bCity;
                });
                $scope.stateWatcher = $scope.$watch('billState', function(bState){
                    $scope.shipState = bState;
                });
                $scope.zipWatcher = $scope.$watch('billZip', function(bZip){
                    $scope.shipZip = bZip;
                });
                $scope.phoneWatcher = $scope.$watch('billPhone', function(bPhone){
                    $scope.shipPhone = bPhone;
                });
            }
            else{
                $scope.nameWatcher();
                $scope.shipName = '';
                $scope.address1Watcher();
                $scope.shipAddress1 = '';
                $scope.address2Watcher();
                $scope.shipAddress2 = '';
                $scope.cityWatcher();
                $scope.shipCity = '';
                $scope.stateWatcher();
                $scope.shipState = '';
                $scope.zipWatcher();
                $scope.shipZip = '';
                $scope.phoneWatcher();
                $scope.shipPhone = '';
            }
        };

        $scope.placeOrderClick = function(){

            var order = {
                'creditCard': {
                    'type': $scope.ccType,
                    'name': $scope.ccName,
                    'number': $scope.ccNumber,
                    'expiration': $scope.ccExpiration,
                    'security': $scope.ccSecurity
                },
                'billing': {
                    'name': $scope.billName,
                    'address1': $scope.billAddress1,
                    'address2': $scope.billAddress2,
                    'city': $scope.billCity,
                    'state': $scope.billState,
                    'zip': $scope.billZip,
                    'phone': $scope.billPhone
                },
                'shipping': {
                    'name': $scope.shipName,
                    'address1': $scope.shipAddress1,
                    'address2': $scope.shipAddress2,
                    'city': $scope.shipCity,
                    'state': $scope.shipState,
                    'zip': $scope.shipZip,
                    'phone': $scope.shipPhone
                }
            };

            scCheckoutSvc.submitOrder(order);
        };

    }]);
})();
