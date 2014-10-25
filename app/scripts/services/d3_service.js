'use strict';

/**
 * @ngdoc service
 * @name openIdolWebApp.d3Service
 * @description
 * # d3Service
 * Factory in the openIdolWebApp.
 */

angular.module('d3', [])
  .factory('d3Service', function ($q, $document, $rootScope) {
    var d = $q.defer();

    function onScriptLoad() {
      $rootScope.$apply(function() { d.resolve(window.d3); });
    }

    var scriptTag = $document[0].createElement('script');
    scriptTag.type = 'text/javascript';
    scriptTag.async = true;
    scriptTag.src = 'bower_components/d3/d3.js';
    scriptTag.onreadystatechange = function () {
      if (this.readyState === 'complete') { onScriptLoad(); }
    };
    scriptTag.onload = onScriptLoad;

    var s = $document[0].getElementsByTagName('body')[0];
    s.appendChild(scriptTag);

    return {
      d3: function() { return d.promise; }
    };
  });
