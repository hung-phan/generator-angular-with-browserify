'use strict';
require('angular/angular');

angular.module('<%= name %>Module', [])
    .factory('<%= uppercaseName %>Service', [
        function() {
            return 'Hello world';
        }
    ]);
