(function() {

	'use strict';

	var appModule = angular.module('appModule');

	appModule.directive('myDirective', function() {

		var myDirective = {
			restrict: 'E',
			templateUrl: 'public/templates/myDirective.html',
			scope: {},
			controller: function($scope) {},
			compile: function(elem, attrs) {

				return function(scope, elem, attrs) {

				};
			}
		};

		return myDirective;
	});

})();