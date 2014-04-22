/*loading scripts*/
var webApp = require('./../../app/scripts/index.js');
require('./../../app/bower_components/angular-mocks/angular-mocks.js');

describe('angular template binding', function() {
    var element;
    var $scope;
    beforeEach(angular.mock.module('webApp'));
    beforeEach(angular.mock.inject(function($compile, _$rootScope_) {
        $scope = _$rootScope_;
        element = angular.element("<div paggie>[[2 + 2]]</div>");
        element = $compile(element)($scope);
    }));

    it('should be 4', function() {
        $scope.$digest();
        expect(element.html()).toBe('4');
    });
});
