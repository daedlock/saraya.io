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

        $(".home-wrapper .header").backstretch("/images/desk_bg.jpg");
        $(".home-wrapper .footer").backstretch("/images/footer_bg.jpg");

       $(document).ready(function () {
         $("a.fluid-zoom").fluidbox();
       });

      $(".jobfusion-wrapper").css({minHeight: $(document).height()})
      console.log($(".jobfusion-wrapper").css({minHeight: $(document).height()}));


    };

    $scope.jobfusion = {
      title: "Jobfusion",
      url: "http://jobfusion.co",
      modalState: "closed",
      animateContent: function(){

        setTimeout(function(){
          //$('.jobfusion h1').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          //  $(this).siblings("p").addClass("fadeInUp animated");
          //  //$(this).addClass("animated fadeOutDown");
          //
          //});

          var jobfusionModal = $(".jobfusion.project-wrapper");
          jobfusionModal.find(".project-title,.project-desc").animateCSS("fadeInUp", function () {

          });
          jobfusionModal.find(".role-desc,.role").animateCSS("fadeInUp", function () {

          });
          jobfusionModal.find(".tech-stack").animateCSS("fadeInLeftBig");
          jobfusionModal.find(".preview").animateCSS("fadeInRightBig", function () {
            jobfusionModal.find(".close-modal").animateCSS("rotateIn")

          });
          //jobfusionModal.find(".close-modal").animateCSS("slideInRight");
        },300);



      },

      toggle: function(){
        this.modalState = (this.modalState=="closed")? "opened":"closed";
        this.animateContent();
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

    $scope.load()
  })
