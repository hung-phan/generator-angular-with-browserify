'use strict';
require('./<%= name %>');

//require angular mock for testing
require('angular-mocks');

describe('service name', function() {
    var <%= uppercaseName %>Service;
    beforeEach(angular.mock.module('<%= name %>Module'));
    beforeEach(angular.mock.inject(function(_<%= uppercaseName %>Service_) {
        <%= uppercaseName %>Service = _<%= uppercaseName %>Service_;
    }));

    it('should be equal dummy', function() {
        expect(<%= uppercaseName %>Service).toEqual('Hello world');
    });
});
