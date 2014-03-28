'use strict';

(function(){

    angular.module('scSurfShack').factory('scPriceSvc', ['$http', '$q', function($http, $q){

        var getAll = function(){
            return [
                {"1": [ { "low": 0 }, { "high": 999 } ] },
                {"2": [ { "low": 1000 }, { "high": 1499 } ] },
                {"3": [ { "low": 1500 }, { "high": 1999 } ] },
                {"4": [ { "low": 2000 }, { "high": 4000 } ] }
            ];
        };

        return{
            getAll: getAll
        };

    }]);
})();