'use strict';
require('angular/angular');

/* Filters */
angular.module('<%= name %>Filters', [
]).filter('numberFilter', function() {
    return function(input) {
        return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };
});
