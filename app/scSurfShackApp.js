'use strict';

(function(){

    angular

    .module('scSurfShack', ['ui.router', 'ngCookies'])

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

//        .run(function($rootScope) {
//            $rootScope.$on('$stateChangeSuccess', function () {
//                //alert(screen.height);
//                $('.filterContainer').height(screen.height - 55);
//                $('.contentContainer').height(screen.height - 55);
//            });
//        });

//        .run(function($rootScope) {
//            $(function(){
//                alert(screen.height);
//                $('.filterContainer').height(screen.height - 55);
//                $('.contentContainer').height(screen.height - 55)
//            });
//
////            document.onreadystatechange = function () {
////                if (document.readyState == "complete") {
////                    debugger;
////                    var filterContainer = document.getElementsByClassName('filterContainer');
////                    var contentContainer = document.getElementsByClassName('contentContainer');
////                    var screenHeight = screen.height;
////                    filterContainer.style.height = contentContainer.style.height = screenHeight - 55 + 'px';
////                }
////            }
//
//        });

})();