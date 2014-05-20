'use strict';
/*require jQuery*/
var $ = require('./../bower_components/jquery/dist/jquery');
window.jQuery = $;<% if (cssFramework === 'SASSBootstrap') { %>
/*require boostrap.js for bootstrap components*/
var bootstrap = require('./../bower_components/sass-bootstrap/dist/js/bootstrap');<% } %><% if (includeModernizr) { %>
/*require modernizr. Make sure you check their docs (https://github.com/jnordberg/browsernizr)*/
require('browsernizr');<% } %>

/*include angular*/
require('angular/angular');
/*require angular resource for easily handling sending and receiving request*/
var angularResource = require('./../bower_components/angular-resource/angular-resource');<% if (includeAngularAnimate) { %>
/*require angular animate for easily handling animation. I recommend to use this with tweenmax (bower install --save greensock)*/
var angularAnimate = require('./../bower_components/angular-animate/angular-animate');<% } %>
/*require angular for better handling and binding controller*/
var angularUiRouter = require('./../bower_components/angular-ui-router/release/angular-ui-router');<% if (includeBindonce) { %>
/*require bindonce to optimize watch for angular binding [https://github.com/Pasvaz/bindonce]*/
var bindonce = require('./../bower_components/angular-bindonce/bindonce');<% } %><% if (includeUIBootstrap) { %>
/*require ui-bootstrap with the embeded template [http://angular-ui.github.io/bootstrap/]*/
var uiBootstrap = require('./../bower_components/angular-bootstrap/ui-bootstrap-tpls');<% }%><% if (includeLodash) { %>
/*require lodash*/
var lodash = require('./../bower_components/lodash/dist/lodash');
window._ = lodash;<% } %>

/*require main service*/
var services = require('./services/services');
/*require main controller*/
var controllers = require('./controllers/controllers');
/*require main directive*/
var directives = require('./directives/directives');
/*require main filter*/
var filters = require('./filters/filters');

/*angular configuration*/
angular.element(document).ready(function () {
    /*smart works go here*/
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
            /*change configure to use [[ to be the interpolation. [[2 + 2]]*/
            $interpolateProvider.startSymbol('[[');
            $interpolateProvider.endSymbol(']]');
            /*add safeApply function for $rootScope - called by $scope.$root.safeApply(fn)*/
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
