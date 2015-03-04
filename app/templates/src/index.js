'use strict';
//require jQuery
var $ = require('jquery');
window.jQuery = $;<% if (cssFramework === 'SASSBootstrap') { %>
//require boostrap.js for bootstrap components
var bootstrap = require('../bower_components/sass-bootstrap/dist/js/bootstrap');<% } %><% if (includeLodash) { %>

//require lodash
var lodash = require('lodash');
window._ = lodash;<% } %>

//include angular
require('angular/angular');
//require angular resource for easily handling sending and receiving request
require('angular-resource');<% if (includeAngularAnimate) { %>
//require angular animate for easily handling animation. I recommend to use this with tweenmax (bower install --save greensock)
require('angular-animate');<% } %>
//require angular for better handling and binding controller
require('angular-ui-router');<% if (includeUIBootstrap) { %>
//require ui-bootstrap with the embeded template [http://angular-ui.github.io/bootstrap/]
require('ui-bootstrap-tpls');<% }%>

//load src module
//require home module
require('./home/home');

//angular configuration
angular.element(document).ready(function () {
    /*smart works go here*/
    var $html = angular.element('html');
    angular.module('webApp', [
        'ui.router',
        'ngResource',<% if (includeUIBootstrap) { %>
        'ui.bootstrap',<% } %><% if (includeAngularAnimate) { %>
        'ngAnimate', <% } %>
        'homeModule'
    ]).config(['$urlRouterProvider', '$provide', function($urlRouterProvider, $provide) {
        $urlRouterProvider.otherwise('/');

        /*change configure to use [[ to be the interpolation. [[2 + 2]]*/
        //$interpolateProvider.startSymbol('[[');
        //$interpolateProvider.endSymbol(']]');

        //add safeApply function for $rootScope - called by $scope.$root.safeApply(fn)
        $provide.decorator('$rootScope', [
            '$delegate',
            function($delegate) {
                $delegate.safeApply = function(fn) {
                    var phase = $delegate.$$phase;
                    if (phase === '$apply' || phase === '$digest') {
                        if (fn && typeof fn === 'function') {
                            fn();
                        }
                    } else {
                        $delegate.$apply(fn);
                    }
                };
                return $delegate;
            }
        ]);
    }]);
    // bootstrap model
    angular.bootstrap($html, ['webApp']);
});
