var app = angular.module('myRTFM');
app.controller('threadCtrl', function($scope, threadRef, $firebaseArray, $firebaseObject, commentRef) {

	var thread = $firebaseObject(threadRef);

	thread.$bindto($scope, 'thread');

	$scope.comments = $firebaseObject(commentsRef);

	$scope.createComments = function(newCommentText) {
		$scope.comments.$add({
			// username: username,
			text: newCommentText
		});
	}

});