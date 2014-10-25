link: function postLink(scope, element, attrs) {
  d3Service.d3().then(function(d3){
    var margin = parseInt(attrs.margin) || 20,
        barHeight = parseInt(attrs.barHeight) || 20,
        barPadding = parseInt(attrs.barPadding) || 5;
    
    var svg = d3.select(element[0])
          .select('svg')
          .style('width', '100%');

    scope.data = [];
    
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
    };
  }); // d3
} // link
