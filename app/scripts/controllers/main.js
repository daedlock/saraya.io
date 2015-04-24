'use strict';

/**
 * @ngdoc function
 * @name hsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hsApp
 */


/*
 * Chunks the project to adjust the grid
 */
function chunk(arr, size) {
  var newArr = [];
  for (var i=0; i<arr.length; i+=size) {
    newArr.push(arr.slice(i, i+size));
  }
  return newArr;
}

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
    ////For Preloading
    //$(".body").addClass("offset-page-vertical");
    //
    //var imgLoad =  imagesLoaded($(".preload-before img"));
    //
    //imgLoad.on( 'progress', function( instance, image ) {
    //  var result = image.isLoaded ? 'loaded' : 'broken';
    //  console.log( 'image is ' + result + ' for ' + image.img.src );
    //});


    //imgLoad.on('always',function () {
    //  $(".home-wrapper .header").backstretch("/images/desk_bg.jpg");
    //  $(".home-wrapper .footer").backstretch("/images/footer_bg.jpg");
    //  $(".header").removeClass("hidden");
    //  $(".body").removeClass("offset-page-vertical");
    //  $(".preload").animateCSS("fadeOutDownBig", function () {
    //    $(this).remove();
    //  });
    //});

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
      projectModal.find(".close-modal").animateCSS("rotateIn");

    });
    projectModal.find(".preview-mobile").animateCSS("bounceIn", function () {
      projectModal.find(".close-modal").animateCSS("rotateIn")
    });

    projectModal.find(".role-desc,.role").animateCSS("fadeInUp", function () {

    });
    projectModal.find(".tech-stack,.tech-compact").animateCSS("fadeInLeftBig");
    projectModal.find(".preview").animateCSS("fadeInRightBig", function () {
    });
    projectModal.find(".screenshots").animateCSS("fadeInUp");
  }, 500);
}
function toggle($scope,project) {

  if (project.modalOpened) {
    project.modalState = "closed"
    project.modalOpened = false;
    clearAnimationClasses(project);
    $scope.currentProject = {};
    $("body").removeClass("overflow-hidden");
  }
  else {
    project.modalState = "opened"
    project.modalOpened = true;
    $scope.currentProject = project;
    $("body").addClass("overflow-hidden");

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
    var projects = [
      {
        title: "Jobfusion",
        type: "web",
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
        mockupImageUrl: "/images/mockups/jobfusion.jpg",
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
        type: "web",
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
        mockupImageUrl: "/images/mockups/sharp.jpg",

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
      },

      {
        title: "Ovio",
        type: "web",
        url: "http://ovio.eu",
        description: "An elite  European restaurant/café. The project involved creating a full-fledged Web Application and Admin Backend for the restaurant.",
        role: "I worked on the frontend implementation. The most fun thing was creating the masonry layout.",

        cssSelector: ".ovio",
        cssClasses: "ovio",
        modalState: "closed",
        modalOpened: false,
        screenshots: [
          "/images/ovio/1.jpg",
          "/images/ovio/2.jpg",
          "/images/ovio/3.jpg",
          "/images/ovio/4.jpg"
        ],
        previewImageUrl: "/images/ovio/preview.jpg",
        mockupImageUrl: "/images/mockups/ovio.jpg",

        techStack: {
          frontend: [
            "Bootstrap",
            "SASS",
          ],
          backend: [
            "Rails",
            "AWS"
          ]
        }
      },

      {
        title: "Nassya",
        type: "web",
        url: "http://nassya.com",
        description: "Nassya is an Egyptian social network that connects you with people in your neighborhood.",
        role: "I worked in a medium sized team mainly as a Frontend and iOS Developer. I worked on the Web application, Mobile website and the iOS Application.",

        cssSelector: ".nassya",
        cssClasses: "nassya",
        modalState: "closed",
        modalOpened: false,
        screenshots: [
          "/images/nassya/1.jpg",
          "/images/nassya/2.jpg",
          "/images/nassya/3.jpg",
        ],
        previewImageUrl: "/images/nassya/preview.jpg",
        mockupImageUrl: "/images/mockups/nassya.jpg",

        techStack: {
          frontend: [
            "Bootstrap",
            "SASS",
          ],
          backend: [
            "Rails",
            "AWS"
          ]
        }
      },

      {
        title: "80M",
        type: "mobile",
        url: "http://80mlocator.com",
        description: "Never run out of cash! You're stuck in cash and need to find your bank's nearest ATM. The 80M app will show you the nearest ATMs and banks wherever you are in Egypt and help you get directions and call the bank directly from the app. We have designed 80M to make it as quick as possible to find what you want. note: The app only works in Egypt.",
        role: "I am the Co-Founder of the app. I also developed everything from the ground up starting from the RESTful API Backend, the Administration Backend and the iOS App itself. I also designed the UX/UI.",

        cssSelector: "._80m",
        cssClasses: "_80m",
        modalState: "closed",
        modalOpened: false,
        screenshots: [
          "/images/80m/1.jpg",
          "/images/80m/2.jpg",
          "/images/80m/3.jpg",
          "/images/80m/4.jpg"
        ],
        previewImageUrl: "/images/80m/preview.jpg",
        mockupImageUrl: "/images/mockups/80m.jpg"

      },

      {
        title: "Komodo",
        type: "mobile",
        url: "",
        description: "Komodo is a mobile client for Oracle EBS (E-business Suite). The app targets business users and corporates and it works as a mobile interface for HR tasks.",
        role: "UI/UX Design",

        cssSelector: ".komodo",
        cssClasses: "komodo",
        modalState: "closed",
        modalOpened: false,
        screenshots: [
          "/images/komodo/1.jpg",
          "/images/komodo/2.jpg",
          "/images/komodo/3.jpg",
          "/images/komodo/4.jpg",
          "/images/komodo/5.jpg"

        ],
        previewImageUrl: "/images/komodo/preview.jpg",
        mockupImageUrl: "/images/mockups/komodo.jpg"


      }
    ];

    $scope.projects = chunk(projects,3);
    $scope.projectsTwoColumn = chunk(projects,2);
    $scope.projectsOneColumn = chunk(projects,1);

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
