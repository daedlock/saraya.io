'use strict';

/**
 * @ngdoc function
 * @name hsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hsApp
 */


/*
 * Contains jquery plugins initialization and dom adjustments
 */
function initialize($scope){
  //$("#fakeLoader").fakeLoader({
  //  timeToHide: '3000',
  //  spinner: 'spinner7',
  //  bgColor: "#222"
  //});
  new WOW().init();

  $(window).on('beforeunload', function(){
    $(window).scrollTop(0);
  });

  $(".home-wrapper .header").backstretch("/images/desk_bg.jpg");
  $(".home-wrapper .footer").backstretch("/images/footer_bg.jpg");



  //Fires on loading divs from ng-include (modals in this case)
  $scope.$on('$includeContentLoaded', function(event) {
    $("a.fluid-zoom").fluidbox();
  });

  $(".jobfusion-wrapper").css({minHeight: $(document).height()})
  console.log($(".jobfusion-wrapper").css({minHeight: $(document).height()}));


};


/*
 * The main module
 */
angular.module('hsApp')
  .controller('MainCtrl', function ($scope) {

    $scope.modalOpened = false;

    $scope.jobfusion = {
      title: "Jobfusion",
      url: "http://jobfusion.co",
      modalState: "closed",
      animateContent: function(){
        setTimeout(function(){
          var jobfusionModal = $(".jobfusion.project-wrapper");
          jobfusionModal.find(".project-title,.project-desc").animateCSS("fadeInUp", function () {

          });
          jobfusionModal.find(".role-desc,.role").animateCSS("fadeInUp", function () {

          });
          jobfusionModal.find(".tech-stack").animateCSS("fadeInLeftBig");
          jobfusionModal.find(".preview").animateCSS("fadeInRightBig", function () {
            jobfusionModal.find(".close-modal").animateCSS("rotateIn")
            jobfusionModal.find(".screenshots").animateCSS("fadeInUpBig")
          });
          jobfusionModal.find(".close-modal").animateCSS("slideInRight");
        },500);
      },

      toggle: function(){
        if($scope.modalOpened){
          this.modalState = "closed"
          $scope.modalOpened = false;
          $(".jobfusion.project-wrapper").find(".animated").removeClass("animated fadeInLeftBig fadeInRightBig  fadeInUp rotateIn");
        }
        else {
          this.modalState = "opened"
          $scope.modalOpened = true;
          this.animateContent();
        }
      }
    };

    $scope.sharp = {
      modalState: "opened"
    };

    $scope.atm = {

    };

    $scope.scrollToEl = function(el) {
      $('html, body').animate({
        scrollTop: $(el).offset().top
      }, 700);
    };

    initialize($scope);
  });
