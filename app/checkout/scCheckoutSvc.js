'use strict';

(function(){

    angular.module('scSurfShack').factory('scCheckoutSvc', ['$http', '$q', 'scCartSvc', function($http, $q, scCartSvc){

        var order = {};

        var submitOrder = function(details){
            order = details;
        };

        var getOrder = function(){
            var deferred = $q.defer();

            deferred.resolve(order);

            return deferred.promise;
        };

        return{
            submitOrder: submitOrder,
            getOrder: getOrder
        }

    }]);
})();