'use strict';

angular.module('openIdolWebApp')
  .directive('pieChart', function ($window, d3Service) {
    return {
      template: '<svg></svg>',
      restrict: 'A',
      scope:{
        tastes: "="
      },
      link: function postLink(scope, element, attrs) {
        d3Service.d3().then(function(d3){
          var width = 960,
              height = 500,
              radius = Math.min(width, height) / 2;

          var color = d3.scale.ordinal()
                .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

          var arc = d3.svg.arc()
                .outerRadius(radius - 10)
                .innerRadius(0);

          var pie = d3.layout.pie()
                .sort(null)
                .value(function(d) { return d.population; });

          var svg = d3.select(element[0])
                .select("svg")
                .attr("height", height)
                .style("width", '100%')
                .append("g")
                .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
          

          window.onresize = function() {
            scope.$apply();
          };
          
          scope.data = [
            {age:'5', population: 2704659},
            {age:'5-13', population: 4499890}
          ];

          scope.$watch(function() {
            return angular.element($window)[0].innerWidth;
          }, function() {
            scope.render(scope.data);
          });

          scope.render = function(data) {
            svg.selectAll('*').remove();

            if (!data) return;

            data.forEach(function(d) {
              d.population = +d.population;
            });

            var g = svg.selectAll(".arc")
                  .data(pie(data))
                  .enter().append("g")
                  .attr("class", "arc");

            g.append("path")
              .attr("d", arc)
              .style("fill", function(d) { ; return color(d.data.age); });

            g.append("text")
              .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
              .attr("dy", ".35em")
              .style("text-anchor", "middle")
              .text(function(d) { return d.data.age; });
          };
        }); // d3
      } // link
    };
  });
