var app = angular.module('myRTFM');
app.controller('threadsCtrl', function($rootScope, $scope, homeService, threadService, $firebaseArray, threadsRef) {

	$scope.threads = $firebaseArray(threadsRef);
	
	$scope.newThreadsSearch = homeService.homeSearch;
	console.log($scope.newThreadsSearch)

	$scope.threads.$loaded().then(function (threads) {
      	console.log(threads);
    });

	$scope.createThread = function(newThreadName) {
		$scope.threads.$add({
			// username: username,
			title: newThreadName
		});
		$scope.newThreadName = '';
		$scope.newThreadName.$setPristine();
	}

	$scope.searchThreads = function(newThreadsSearch) {
		console.log(searched);
	}

});