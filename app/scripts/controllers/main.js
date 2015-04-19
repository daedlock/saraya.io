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

  $(document).ready(function () {
    $(".preload").remove();
    $(".body").addClass("offset-page-vertical");
  });

  $(window).load(function () {
    $(".body").removeClass("offset-page-vertical");
    $(".header").removeClass("hidden");
    $(".home-wrapper .header").backstretch("/images/desk_bg.jpg");
    $(".home-wrapper .footer").backstretch("/images/footer_bg.jpg");
    $(".preload").animateCSS("fadeOutDownBig", function () {
      $(this).remove();
    });

  });




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
        role: "I was hired as the Lead UI/UX Designer and front-end developer. My responsibilites included creating UX wireframes and designing/developing responsive UI components.",
        cssSelector: ".jobfusion",
        cssClasses: "jobfusion",
        modalState: "closed",
        modalOpened: false,
        screenshots: [
          "/images/jobfusion/1.jpg",
          "/images/jobfusion/2.jpg",
          "/images/jobfusion/3.jpg",
          "/images/jobfusion/4.jpg",
          "/images/jobfusion/5.jpg",
          "/images/jobfusion/6.jpg",
          "/images/jobfusion/7.jpg",
          "/images/jobfusion/8.jpg",
          "/images/jobfusion/9.jpg"

        ],
        previewImageUrl: "/images/jobfusion/preview.jpg",
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
        description: "Sharpone Web Application is an internal product used by Sharp One Insurance Co. in Canada. The application is a Rich SPA relying completely on AngularJS.",
        role: "I was hired to design and develop the UI/UX for Sharp. The project was very interesting because it gave me the chance to dive deeper into AngularJS",

        cssSelector: ".sharp",
        cssClasses: "sharp",
        modalState: "closed",
        modalOpened: false,
        screenshots: [
          "/images/sharp/1.jpg",
          "/images/sharp/2.jpg",
          "/images/sharp/3.jpg",
          "/images/sharp/4.jpg",
          "/images/sharp/5.jpg",
          "/images/sharp/6.jpg",
          "/images/sharp/7.jpg",
          "/images/sharp/8.jpg",
        ],
        previewImageUrl: "/images/sharp/preview.jpg",
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
