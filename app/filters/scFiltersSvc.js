'use strict';

(function(){

    angular.module('scSurfShack').factory('scFiltersSvc', ['$http', '$q', function($http, $q){

        var getVendors = function(){
            var deferred = $q.defer();

            $http.get('/Assignment%203/mockData/surfboards.json')
                .success(function(data){
                    var vendors = _.uniq(data, 'vendor');
                    deferred.resolve(vendors);
                })
                .error(function(reason){
                    deferred.reject(reason);
                });

            return deferred.promise;
        }

        var getCategories = function(){
            var deferred = $q.defer();

            $http.get('/Assignment%203/mockData/surfboards.json')
                .success(function(data){
                    var categories = _.uniq(data, 'category');
                    deferred.resolve(categories);
                })
                .error(function(reason){
                    deferred.reject(reason);
                });

            return deferred.promise;
        }

        return {
            getVendors: getVendors,
            getCategories: getCategories
        };

    }]);

})();