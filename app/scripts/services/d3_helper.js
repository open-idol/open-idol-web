'use strict';

angular.module('openIdolWebApp')
  .service('d3Helper', function d3Helper() {
		var d3Helper = function() {
		};

    d3Helper.size = function(svg, height, width){
      height = typeof height !== 'undefined' ? height : '240px';
      width = typeof width !== 'undefined' ? width : '180px';
      
      svg.attr('height', height).attr('width', width);
    };

    d3Helper.background_color = function(svg, color){
      color = typeof color !== 'undefined' ? color : '#58585B';
      
      svg.style('background-color', color);
    };

    d3Helper.circle_rect = function(svg, data, attrs, margin){
      margin = typeof margin !== 'undefined' ? margin : 20;
      
      svg.selectAll('circle')
        .data(data).enter()
        .append('circle')
        .attr("cx", function(d){ return margin + d.x * 15; })
        .attr("cy", function(d){ return margin + d.y * 15; })
        .attr("fill", function(d){ return (d.color === true) ? attrs.color : "darkgray";})
        .attr("r", 1)
        .transition()
        .duration(1000)
        .attr("r", 12)
        .transition()
        .duration(1000)
        .attr("r", 5.5);

      svg.append("text")
        .attr("x", 15)
        .attr("y", 200)
        .attr("font-weight", 800)
        .attr("fill", attrs.color)
        .attr("font-size", "10px")
        .text(attrs._critical + "%")
        .transition()
        .duration(2500)
        .attr("font-size", "38px");
    };

    d3Helper.dictionary = function(svg, data, attrs, margin){
      margin = typeof margin !== 'undefined' ? margin : 20;

      console.log(data);
      
      svg.selectAll('text')
        .data(data).enter()
        .append('text')
        .attr("x", function(){ return margin + parseInt(Math.random() * 1000);})
        .attr("y", function(){ return margin + parseInt(Math.random() * 800);})
        .attr("font-weight", 600)
        .attr("fill", function(d){ return (d.emotion === "+") ? "#00AFA9" : "#FF7E2E"; })
        .attr("font-size", function(){ return (parseInt(Math.random() * (45 - 20) + 20) + "px");})
        .text(function(d){ return d.name; })
        .transition()
        .duration(10000)
        .attr("x", function(){ return margin + parseInt(Math.random() * 1000);})
        .transition()
        .duration(15000)
        .attr("x", function(){ return margin + parseInt(Math.random() * 1000);})
      ;

    };
    
    return d3Helper;
  });
