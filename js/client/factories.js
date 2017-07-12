(function() { 'use strict';

	var module = angular.module('appModule');

	module.factory('SitcomsRest', ['Restangular', function(Restangular) {

		return Restangular.service('sitcoms');
	}]);

})();