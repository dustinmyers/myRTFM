var app = angular.module('myRTFM');
app.controller('threadsCtrl', function($scope, threadService, $firebaseArray, threadsRef) {

	$scope.threads = $firebaseArray(threadsRef);

	$scope.threads.$loaded().then(function (threads) {
      	console.log(threads);
    });

	$scope.createThread = function(newThreadName) {
		$scope.threads.$add({
			// username: username,
			title: newThreadName
		});
	}

});