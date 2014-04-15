'use strict';
/*include jQuery*/
var $ = require('./../bower_components/jquery/dist/jquery');
window.jQuery = $;<% if (cssFramework === 'SASSBootstrap') { %>
/*include boostrap*/
var bootstrap = require('./../bower_components/sass-bootstrap/dist/js/bootstrap');<% } %><% if (includeModernizr) { %>
/*include modernizr*/
require('browsernizr');<% } %>

/*include angular*/
require('angular/angular');
window.angular = angular;
var angularResource = require('./../bower_components/angular-resource/angular-resource');<% if (includeAngularAnimate) { %>
var angularAnimate = require('./../bower_components/angular-animate/angular-animate');<% } %>
var angularUiRouter = require('./../bower_components/angular-ui-router/release/angular-ui-router');<% if (includeBindonce) { %>
var bindonce = require('./../bower_components/angular-bindonce/bindonce'); /*angular bindonce to increase angular performance*/<% } %><% if (includeUIBootstrap) { %>
var uiBootstrap = require('./../bower_components/angular-bootstrap/ui-bootstrap-tpls');<% }%><% if (includeUnderscore) { %>
/*include underscore*/
var underscore = require('./../bower_components/underscore/underscore');
window._ = underscore;<% } %>

/*angular controller*/
var services = require('./services/services');
var controllers = require('./controllers/controllers');
var directives = require('./directives/directives');
var filters = require('./filters/filters');

/*angular configuration*/
angular.element(document).ready(function () {
    // smart works go here
    var $html = angular.element('html');
    angular.module('webApp', [
        'ui.router',
        'ngResource',<% if (includeUIBootstrap) { %>
        'ui.bootstrap',<% } %><% if (includeAngularAnimate) { %>
        'ngAnimate', <% } %><% if (includeBindonce) { %>
        'pasvaz.bindonce',<% } %>
        'webControllers',
        'webFilters',
        'webServices',
        'webDirectives'
    ]).config(['$stateProvider', '$urlRouterProvider', '$interpolateProvider', '$provide',
        function($stateProvider, $urlRouterProvider, $interpolateProvider, $provide) {
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'partials/home-page.html',
                    controller: 'HomePageController'
                });

            $urlRouterProvider.otherwise('/');
            /* change configure to use [[ to be the interpolation */
            $interpolateProvider.startSymbol('[[');
            $interpolateProvider.endSymbol(']]');
            /* add safeApply function for $rootScope - called by $scope.$root.safeApply(fn) */
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
        }
    ]);
    // bootstrap model
    angular.bootstrap($html, ['webApp']);
});
