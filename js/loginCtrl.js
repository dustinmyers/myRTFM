var app = angular.module('myRTFM');
app.controller('loginCtrl', function($scope, mainService, $location) {

	$scope.$logMeIn = function(){
   		$location.path('/home');
   		console.log('login');
	}

});