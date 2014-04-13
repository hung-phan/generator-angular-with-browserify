'use strict';
var angular = require('angular');

/* Services */
angular.module('webServices', [
    'ngResource'
]).factory('LoginService', [
    '$resource',
    function($resource) {
        return $resource('login');
    }
]);
