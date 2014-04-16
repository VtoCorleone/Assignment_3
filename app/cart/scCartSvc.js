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

        var getMerchandiseTotal = function(){
            getSurfCartCookie();
            var amount = 0;
            _(merchandise).forEach(function (merch) {
                amount += (merch.surfboard.price * merch.quantity);
            });
            return amount;
        }

        var getTotal = function(){
            getSurfCartCookie();
            if (merchandise.length === 0)
                return 0;

            var amount = 0;
            _(merchandise).forEach(function (merch) {
                amount += (merch.surfboard.price * merch.quantity);
            });
            return ((amount + 5) * .08) + (amount + 5);
        }

        var addItems = function(surfboard, quantity){
            merchandise.push({'surfboard': surfboard, 'quantity': quantity});
            setSurfCartCookie();
        }

        var updateItem = function(surfboard, quantity){
            getSurfCartCookie();
            _(merchandise).forEach(function(merch){
                if (merch.surfboard == surfboard) {
                    merch.quantity = quantity;
                    return;
                }
            });
            setSurfCartCookie();
        }

        var removeItem = function(sku){
            var deferred = $q.defer();

            getSurfCartCookie();
            _.remove(merchandise, function(merch){
                return merch.surfboard.sku == sku;
            });
            setSurfCartCookie();

            deferred.resolve();
            // Return the merchandise object to update the UI
            return deferred.promise;
        }

        return {
            getAll: getAll,
            getNumberOfItems: getNumberOfItems,
            getMerchandiseTotal: getMerchandiseTotal,
            getTotal: getTotal,
            addItems: addItems,
            updateItem: updateItem,
            removeItem: removeItem
        };

    }]);
})();