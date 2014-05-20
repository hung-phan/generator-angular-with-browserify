'use strict';
require('angular/angular');

/* Directives */
angular.module('<%= name %>Directives', [
]).directive('paggie', [

    function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'partials/paggie.html',
            scope: {
                elements: '=',
                callback: '&'
            },
            link: function(scope, element, attrs) {}
        };
    }
]);
