'use strict';

/**
 * @ngdoc overview
 * @name openIdolWebApp
 * @description
 * # openIdolWebApp
 *
 * Main module of the application.
 */

angular.module('openIdolWebApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.utils',
    'd3',
  ])

  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('default', {
        abstract: true,
        templateUrl: 'views/layouts/layout.html'
      })

      .state('default.main', {
        url: "/",
        controller: 'MainCtrl',
        templateUrl: "views/default/main.html"
      })

      .state('default.demo', {
        url: "/demo",
        controller: 'DemoCtrl',
        templateUrl: "views/default/demo.html"
      })

      .state('default.android_ios', {
        url: "/android_ios",
        controller: 'AndroidCtrl',
        templateUrl: "views/default/android_ios.html"
      })

      .state('default.hyundai_peugot', {
        url: "/hyundai_peugot",
        controller: 'HyundaiCtrl',
        templateUrl: "views/default/hyundae_peugot.html"
      })

      .state('default.apink_girlsday', {
        url: "/apink_girlsday",
        controller: 'ApinkCtrl',
        templateUrl: "views/default/apink_girlsday.html"
      })

      .state('default.dictionary', {
        url: "/dictionary",
        controller: 'DictionaryCtrl',
        templateUrl: "views/default/dictionary.html"
      })

      .state('default.remotty', {
        url: "/remotty",
        controller: 'RemottyCtrl',
        templateUrl: "views/default/remotty.html"
      });
  });
