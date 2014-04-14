'use strict';

(function(){

    angular.module('scSurfShack').controller('scShowcaseCtrl', ['$scope', 'scSurfboardSvc', 'scCartSvc', function($scope, scSurfboardSvc, scCartSvc){

        scSurfboardSvc.getShowcase().then(
            function(data){
                $scope.showcaseSurfboard = data;
            },
            function(reason){
                // Error
                console.log(reason);
            }
        );

        scSurfboardSvc.getTopThree('Short Board').then(
            function(data){
                $scope.topThreeShortBoards = data;
            },
            function(reason){
                // Error
                console.log(reason);
            }
        );
        scSurfboardSvc.getTopThree('Long Board').then(
            function(data){
                $scope.topThreeLongBoards = data;
            },
            function(reason){
                // Error
                console.log(reason);
            }
        );
        scSurfboardSvc.getTopThree('Fish').then(
            function(data){
                $scope.topThreeFishBoards = data;
            },
            function(reason){
                // Error
                console.log(reason);
            }
        );

    }]);
})();