	// create the module and name it myApp
	var myApp = angular.module('myApp', ['ngRoute']);

	// configure our routes
	myApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'views/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'views/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'views/contact.html',
				controller  : 'contactController'
			});
	});

	// create the controller and inject Angular's $scope
	myApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Home page view is set as the default start page';
	});

	myApp.controller('aboutController', function($scope) {
		$scope.message = 'About page content is injected!';
	});

	myApp.controller('contactController', function($scope) {
		$scope.message = 'Contact page is injected';
	});