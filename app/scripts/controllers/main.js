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
      $scope.minHeight = {
        'min-height': $(document).height() + "px"
      };
      $(document).ready(function(){
        $(".home-wrapper .header").backstretch("/images/desk_bg.png");
        $(".home-wrapper .footer").backstretch("/images/footer_bg.png");
        console.log($(document));
      });
    };

    $scope.load();
  })
