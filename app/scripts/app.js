'use strict';





/**
 * @ngdoc overview
 * @name hsApp
 * @description
 * # hsApp
 *
 * Main module of the application.
 */
angular
  .module('hsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .run(function () {
    //  jQuery


  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/jobfusion', {
        templateUrl: 'views/jobfusion.html',
        controller: 'ProjectController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

