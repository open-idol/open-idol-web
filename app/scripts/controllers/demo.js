'use strict';

angular.module('openIdolWebApp')
  .controller('DemoCtrl', function ($scope) {
    $scope.random = function(){
      return parseInt(Math.random() * (80 - 20) + 20);;
    };
  });
