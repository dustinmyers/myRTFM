var app = angular.module('myRTFM');
app.controller('loginCtrl', function($rootScope, $scope, mainService, $location) {

	$scope.$logMeIn = function(){
   		$location.path('/home');
   		console.log('login');
	}

});