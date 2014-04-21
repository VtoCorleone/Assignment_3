'use strict';

(function(){

    angular.module('scSurfShack').controller('scButtonCtrl', ['$scope', function($scope){
        $scope.buttonNormal = true;
        $scope.isButtonHover = false;
        $scope.isButtonClick = false;

        $scope.mouseEnter = function(){
            $scope.buttonNormal = false;
            $scope.isButtonHover = true;
            $scope.isButtonClick = false;
        };

        $scope.mouseLeave = function(){
            $scope.buttonNormal = true;
            $scope.isButtonHover = false;
            $scope.isButtonClick = false;
        };

        $scope.mouseDown = function(){
            $scope.buttonNormal = false;
            $scope.isButtonHover = false;
            $scope.isButtonClick = true;
        };

        $scope.mouseUp = function(){
            $scope.buttonNormal = true;
            $scope.isButtonHover = false;
            $scope.isButtonClick = false;
        };
    }]);

})();
