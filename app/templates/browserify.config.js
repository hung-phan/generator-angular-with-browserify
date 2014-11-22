//third party libraries alias configurations for browserify
module.exports = [<% if (includeLodash) { %>
    './app/bower_components/lodash/dist/lodash.js:lodash',<% } %>
    './app/bower_components/angular-mocks/angular-mocks.js:angular-mocks',
    './app/bower_components/angular-resource/angular-resource.js:angular-resource',<% if (includeAngularAnimate) { %>
    './app/bower_components/angular-animate/angular-animate.js:angular-animate',<% } %>
    './app/bower_components/angular-ui-router/release/angular-ui-router.js:angular-ui-router',<% if (includeUIBootstrap) { %>
    './app/bower_components/angular-bootstrap/ui-bootstrap-tpls.js:ui-bootstrap-tpls',<% }%><% if (cssFramework === 'SASSBootstrap') { %>
    './app/bower_components/sass-bootstrap/dist/js/bootstrap.js:bootstrap',<% } %>
    './app/bower_components/jquery/dist/jquery.js:jquery'
];
