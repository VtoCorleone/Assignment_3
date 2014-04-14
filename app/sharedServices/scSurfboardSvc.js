'use strict';

(function(){

    angular.module('scSurfShack').factory('scSurfboardSvc', ['$http', '$q', function($http, $q){

        var templateBoard = function(id){

            var board =
            {
                'id': id,
                'sku': 'BDY-856',
                'vendor': 'Robert August',
                'category': 'Short Board',
                'identifier': 'Bud Llamax XGS',
                'price': 599,
                'imageUrl': 'assets/images/balsa.png',
                'description': 'Our state of the art, high performance Shortboard. It features a modern outline, single to triple concave, continuous bottom rocker with a crowned deck and pinched rails. Fast and loose with lots of drive. Features Futures removable fin system.',
                'features': 'Stringers: Single redwood or optional multi-stringer or T-band. Glassing: Regular 6 oz. or optional 8 oz. Volan. Colors: Regular clear or \'XGS\' airbrushed graphics. Optional opaque pigments, abstract swirls, resin tints or customer\'s own design. Fins: Futures fins standard. Glassed on fiberglass or inlaid wood fins available.'
            };

            return board;
        }


        var getShowcase = function(){
            var deferred = $q.defer();

            $http.get('/Assignment%203/mockData/surfboards.json')
                .success(function(data){
                    deferred.resolve(data[0]);
                })
                .error(function(reason){
                    deferred.reject(reason);
                });

            return deferred.promise;
        };

        var getAll = function(){
            var boards = [];
            for (var i = 0; i < 8; i++)
                boards.push(templateBoard(i));

            return boards;
        };

        var getTopThree = function(type){
            var deferred = $q.defer();

            $http.get('/Assignment%203/mockData/surfboards.json')
                .success(function(data){
                    var three = _.where(data, {'category': type});

                    deferred.resolve(three);
                })
                .error(function(reason){
                    deferred.reject(reason);
                });

            return deferred.promise;
        };

        var getByVendor = function(vendorId){
            var boards = [];
            for (var i = 0; i < 8; i++)
                boards.push(templateBoard(i));

            return boards;
        };

        var getByCategory = function(categoryId){
            var boards = [];
            for (var i = 0; i < 8; i++)
                boards.push(templateBoard(i));

            return boards;
        };

        var getByPrice = function(low, high){
            var boards = [];
            for (var i = 0; i < 8; i++)
                boards.push(templateBoard(i));

            return boards;
        };

        var getBySku = function(sku){
            return templateBoard(1);
        };

        return{
            getShowcase: getShowcase,
            getAll: getAll,
            getTopThree: getTopThree,
            getByVendor: getByVendor,
            getByCategory: getByCategory,
            getBySku: getBySku
        };

    }]);
})();