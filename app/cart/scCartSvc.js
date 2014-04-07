'use strict';

(function(){

    angular.module('scSurfShack').factory('scCartSvc', ['$http', '$q', function($http, $q){

        var numberOfItems = 0;

        var totalCost = 0;

        var getNumberOfItems = function(){
            return numberOfItems;
        }

        var addItems = function(surfboard, quantity){
            numberOfItems += quantity;
            totalCost += (surfboard.price * quantity);
        }

        return {
            getNumberOfItems: getNumberOfItems,
            totalCost: totalCost,
            addItems: addItems
        };

    }]);
})();