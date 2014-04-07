'use strict';

(function(){

    angular

    .module('scSurfShack', ['ui.router'])

    .config(function($stateProvider, $urlRouterProvider){

        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/showcase");

        // Now set up states
        $stateProvider
            .state('showcase', {
                url: '/showcase',
                templateUrl: 'app/showcase/scShowcase.html'
            })

//            .state('browse', {
//                url: '/browse',
//                templateUrl: 'app/browse/scBrowse.html',
//                controller: 'scBrowseCtrl'
//            })

    });

})();