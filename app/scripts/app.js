'use strict';

/**
 * @ngdoc overview
 * @name lateroomsKataApp
 * @description
 * # Code kata for LateRooms job application by ***REMOVED*** ***REMOVED***
 *
 * Main module of the application.
 */
angular
    .module('lateroomsKataApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
        // 'ui.bootstrap'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
