var app = angular.module('myRTFM', ['firebase', 'ngRoute', 'ngMaterial']);
	
	app.config(function($routeProvider, $mdThemingProvider, fb) {
		
		$routeProvider
			.when('/login', {
				templateUrl: 'templates/login.html',
				controller: 'loginCtrl'
			})
			.when('/home', {
				templateUrl: 'templates/home.html',
				controller: 'homeCtrl'
			})
			.when('/threads', {
				templateUrl: 'templates/threads.html',
				controller: 'threadsCtrl',
				resolve: {
					threadsRef: function(threadService) {
						return threadService.getThreads();
					}
				}
			})
			.when('/threads/:threadId', {
				templateUrl: 'templates/thread.html',
				resolve: {
					threadRef: function(threadService, $route) {
						return threadService.getThread($route.current.params.threadId);
					},
					commentsRef: function(threadService, $route) {
						return threadService.getComments($route.current.params.threadId);
					}
				}
			})
			.otherwise({redirectTo:'/login'});

	    $mdThemingProvider.theme('default')
	      	.primaryPalette('teal')
	      	.accentPalette('blue');

	});

	app.constant('fb', {
		url: 'https://crackling-heat-6953.firebaseio.com/'
	});


// "firebase-chat": {
// 	'.read': true,
// 	'.write': true
// }