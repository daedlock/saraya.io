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
function initialize($scope) {
  //$("#fakeLoader").fakeLoader({
  //  timeToHide: '3000',
  //  spinner: 'spinner7',
  //  bgColor: "#222"
  //});
  new WOW().init();

  $(window).on('beforeunload', function () {
    $(window).scrollTop(0);
  });

  $(".home-wrapper .header").backstretch("/images/desk_bg.jpg");
  $(".home-wrapper .footer").backstretch("/images/footer_bg.jpg");


  //Fires on loading divs from ng-include (modals in this case)
  $scope.$on('$includeContentLoaded', function (event) {
    $("a.fluid-zoom").fluidbox();
  });



};
function animateContent(project) {
  setTimeout(function () {
    var jobfusionModal = $(project.cssSelector+".project-wrapper");
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
  }, 500);
}
function toggle($scope,project) {

  if (project.modalOpened) {
    project.modalState = "closed"
    project.modalOpened = false;
    $(project.cssSelector+".project-wrapper").find(".animated").removeClass("animated fadeInLeftBig fadeInRightBig  fadeInUp rotateIn");
    $scope.currentProject = {};
  }
  else {
    project.modalState = "opened"
    project.modalOpened = true;
    $scope.currentProject = project;
    animateContent(project);
  }
}

/*
 * The main module
 */
angular.module('hsApp')
  .controller('MainCtrl', function ($scope) {

    $scope.currentProject = {};
    $scope.projects = [
      {
        title: "Jobfusion",
        url: "http://jobfusion.co",
        description: "Unlock your social network to find tech jobs that you're directly connected to. With the largest tech jobs database in the world, save time looking for a job and never miss an opportunity again",
        role: "",

        cssSelector: ".jobfusion",
        cssClasses: "jobfusion",
        modalState: "closed",
        modalOpened: false,
        screenshots: [
          "/images/jobfusion/preview.png",
          "/images/jobfusion/preview.png",
          "/images/jobfusion/preview.png"
        ],
        previewImageUrl: "/images/jobfusion/preview.png",
        techStack: {
          frontend: [
            "Bootstrap",
            "SASS",
            "AngularJS",
            "Modernizr"
          ],
          backend: [
            "Rails",
            "AWS"
          ]
        }
      },


      {
        title: "Sharpone",
        url: "http://jobfusion.co",
        description: "Unlock your social network to find tech jobs that you're directly connected to. With the largest tech jobs database in the world, save time looking for a job and never miss an opportunity again",
        role: "",

        cssSelector: ".sharp",
        cssClasses: "sharp",
        modalState: "closed",
        modalOpened: false,
        screenshots: [
          "/images/jobfusion/preview.png",
          "/images/jobfusion/preview.png",
          "/images/jobfusion/preview.png"
        ],
        previewImageUrl: "/images/jobfusion/preview.png",
        techStack: {
          frontend: [
            "Bootstrap",
            "SASS",
            "AngularJS",
            "Modernizr"
          ],
          backend: [
            "Rails",
            "AWS"
          ]
        }
      }



    ];


    $scope.toggle = function (project) {
      toggle($scope,project);
    }
    $scope.animateContent = function (project) {
      animateContent(project);
    }


    $scope.scrollToEl = function (el) {
      $('html, body').animate({
        scrollTop: $(el).offset().top
      }, 700);
    };

    initialize($scope);
  });
