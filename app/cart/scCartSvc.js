'use strict';

(function(){

    angular.module('scSurfShack').factory('scCartSvc', ['$http', '$q', '$cookieStore', function($http, $q, $cookieStore){

        var merchandise = [];

        var getSurfCartCookie = function(){
            var cookie = $cookieStore.get('SurfCart');
            merchandise = (cookie === undefined) ? [] : angular.fromJson(cookie);
        }

        var setSurfCartCookie = function(){
            $cookieStore.put('SurfCart', angular.toJson(merchandise));
        }

        var getAll = function(){
            getSurfCartCookie();
            return merchandise;
        }

        var getNumberOfItems = function(){
            getSurfCartCookie();
            var numItems = 0;
            _(merchandise).forEach(function(merch){
                numItems += merch.quantity;
            });
            return numItems;
        }

        var getTotalAmount = function(){
            getSurfCartCookie();
            var amount = 0;
            _(merchandise).forEach(function (merch) {
                amount += (merch.surfboard.price * merch.quantity);
            });
            return amount;
        }

        var addItems = function(surfboard, quantity){
            merchandise.push({'surfboard': surfboard, 'quantity': quantity});
            setSurfCartCookie();
        }

        var removeItems = function(sku, quantity){
            getSurfCartCookie();
            _(merchandise).forEach(function(board){

            });
        }

        return {
            getAll: getAll,
            getNumberOfItems: getNumberOfItems,
            getTotalAmount: getTotalAmount,
            addItems: addItems,
            removeItems: removeItems
        };

    }]);
})();