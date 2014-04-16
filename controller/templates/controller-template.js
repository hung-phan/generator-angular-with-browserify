'use strict';
require('angular/angular');

/* Controllers */
angular.module('<%= name %>Controllers', [
    'webServices'
]).controller('DummyController', [
    '$scope',
    '$location',
    function($scope, $location) {
        /* initialize */
    }
]);
