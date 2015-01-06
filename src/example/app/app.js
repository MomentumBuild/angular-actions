angular.module('actionExample', ['momentum.actions', 'ngLodash', 'ui.router'])
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

		// home page
		$stateProvider.state('home', { 
			url: '/', 
			templateUrl: 'petition-bootstrap.html'
		});

		// thanks page
		// $stateProvider.state('thanks', { 
		// 	url: '/thanks', 
		// 	templateUrl: '/pages/thanks.html',
		// 	controller: 'petitionCtrl as petition'
		// });

		//otherwise redirect to home
	    $urlRouterProvider.otherwise('/');

	}]);

