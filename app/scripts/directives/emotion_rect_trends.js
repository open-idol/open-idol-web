'use strict';

angular.module('openIdolWebApp')
  .directive('emotionRectTrends', function ($window, d3Service, d3Helper) {
    return {
      template: '<svg></svg>',
      restrict: 'E',
      scope:{
        tastes: "="
      },
      link: function postLink(scope, element, attrs) {
        scope.data = [];
        var idx;

        attrs._critical = parseInt(Math.random() * (80 - 20) + 20);
        
        _.each(_.range(10), function(x){
          _.each(_.range(10), function(y){
            idx = (x) * 1 + (y) * 10;
            scope.data.push({
              x: x,
              y: y,
              color: (idx < attrs._critical) ? true : false
            });
          });
        });
        
        d3Service.d3().then(function(d3){
          var margin = parseInt(attrs.margin) || 50;
          var svg = d3.select(element[0])
                .select('svg');

          window.onresize = function() {
            scope.$apply();
          };
          
          scope.$watch(function() {
            return angular.element($window)[0].innerWidth;
          }, function() {
            scope.render(scope.data);
          });
          
          scope.render = function(data) {
            svg.selectAll('*').remove();

            if (!data) return;

            d3Helper.size(svg);
            d3Helper.background_color(svg);
            d3Helper.circle_rect(svg, scope.data, attrs);
          };
        }); // d3
      } // link
    };
  });
