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
function clearAnimationClasses(project){
  var projectModal = $(project.cssSelector+".project-wrapper");
  projectModal.find("[style]").attr("style","");
}
function animateContent(project) {
  setTimeout(function () {
    var projectModal = $(project.cssSelector+".project-wrapper");
    projectModal.find(".project-title,.project-desc").animateCSS("fadeInUp", function () {

    });
    projectModal.find(".role-desc,.role").animateCSS("fadeInUp", function () {

    });
    projectModal.find(".tech-stack,.tech-compact").animateCSS("fadeInLeftBig");
    projectModal.find(".preview").animateCSS("fadeInRightBig", function () {
      projectModal.find(".close-modal").animateCSS("rotateIn")
      projectModal.find(".screenshots").animateCSS("fadeInUp")
    });
    projectModal.find(".close-modal").animateCSS("slideInRight");
  }, 500);
}
function toggle($scope,project) {

  if (project.modalOpened) {
    project.modalState = "closed"
    project.modalOpened = false;
    clearAnimationClasses(project);
    $scope.currentProject = {};
  }
  else {
    project.modalState = "opened"
    project.modalOpened = true;
    $scope.currentProject = project;

    //Broadcast modal opened event
    $scope.$broadcast("modalOpened");
    setTimeout(function () {
      $(" a.fluid-zoom").fluidbox();

    },10);
    //reactive fluidbox
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
        url: "",
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
            "Modernizr",
            "Grunt"
          ],
          backend: [
            "NodeJS",
            "SailsJS"
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
