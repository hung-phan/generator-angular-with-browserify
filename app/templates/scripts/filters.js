'use strict';
var angular = require('angular');
/* Filters */
angular.module('webFilters', [
]).filter('numberFilter', function() {
    return function(input) {
        return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };
});
