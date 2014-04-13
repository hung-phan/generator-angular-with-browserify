'use strict';
require('angular/angular');

/* Services */
angular.module('webServices', [
    'ngResource'
]).factory('LoginService', [
    '$resource',
    function($resource) {
        return $resource('login');
    }
]);
