(function() {

    'use strict';

    var appModule = angular.module('appModule');

    appModule.directive('<%= name %>', function() {

        var <%= name %> = {
            restrict: 'E',
            templateUrl: 'public/templates/<%= name %>.html',
            scope: {},
            controller: function($scope) {},
            compile: function(elem, attrs) {

                return function(scope, elem, attrs) {

                };
            }
        };

        return <%= name %>;
    });

})();