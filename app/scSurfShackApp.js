'use strict';

(function(){

    angular

    .module('scSurfShack', ['ui.router'])

    .config(function($stateProvider, $urlRouterProvider){

        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/home");

        // Now set up states
        $stateProvider
            .state('home', {
                url:'/home',
                templateUrl:'app/home/scHome.html'
            })

            .state('browse', {
                url:'/browse',
                templateUrl:'app/browse/scBrowse.html'
            })

    });

})();