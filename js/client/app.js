(function() { 'use strict';

	var appModule = angular.module('appModule', ['ui.router']);

	appModule.config(function($urlRouterProvider, $locationProvider) {

		//$urlRouterProvider.otherwise('/home');
		//$locationProvider.html5Mode(false).hashPrefix('');
	});

	appModule.run(function($rootScope) {

		if ('scrollRestoration' in history) { history.scrollRestoration = 'manual'; }

		$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {});
		$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {});
	});
})();