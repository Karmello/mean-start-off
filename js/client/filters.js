(function() { 'use strict';

	var appModule = angular.module('appModule');

	appModule.filter('myFilter', function() {

		return function(data, arg) {};
	});

})();