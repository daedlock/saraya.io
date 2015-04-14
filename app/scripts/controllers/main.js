'use strict';

/**
 * @ngdoc function
 * @name hsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hsApp
 */
angular.module('hsApp')
  .controller('MainCtrl', function ($scope) {



    $scope.load = function(){



        //$("#fakeLoader").fakeLoader({
        //  timeToHide: '3000',
        //  spinner: 'spinner7',
        //  bgColor: "#222"
        //});

        $(".home-wrapper .header").backstretch("/images/desk_bg.png");
        $(".home-wrapper .footer").backstretch("/images/footer_bg.png");
    };
    $scope.load()
  })
