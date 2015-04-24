var app = angular.module('myRTFM');
app.controller('homeCtrl', function($rootScope, $scope, homeService, $location) {

	$scope.searchThreads = function(homeThreadsSearch){
   		homeService.homeSearch = homeThreadsSearch
   		$location.path('/threads');
	}

});