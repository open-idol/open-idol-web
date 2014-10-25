'use strict';

angular.module('openIdolWebApp')
  .directive('hello', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the hello directive');
      }
    };
  });
