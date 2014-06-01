'use strict';
require('angular/angular');

angular.module('<%= name %>Module', [])
    .filter('<%= name %>Filter', function() {
        return function(input) {
            return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        };
    });

