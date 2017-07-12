(function() { 'use strict';

	var appModule = angular.module('appModule', ['ui.router', 'restangular']);

	appModule.config(function($urlRouterProvider, $locationProvider, $stateProvider) {

		$locationProvider.html5Mode(false).hashPrefix('');

		$stateProvider.state('app', {
			url: '/',
			resolve: {}
		});

		$urlRouterProvider.otherwise('/');
	});

	appModule.run(function($rootScope, Restangular) {

		if ('scrollRestoration' in history) { history.scrollRestoration = 'manual'; }

		Restangular.setBaseUrl('/api');
		Restangular.setFullResponse(true);
		Restangular.setRestangularFields({ id: '_id' });

		Restangular.addResponseInterceptor(function(data, operation, what, url, res, deferred) {

			return data;
		});

		$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {});
		$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {});
	});
})();