var app = angular.module('myRTFM');
app.service('threadService', function(fb) {

	this.getThreads = function() {
		return new Firebase('https://crackling-heat-6953.firebaseio.com');
	}

	this.getThread = function(threadId) {
		return new Firebase('https://crackling-heat-6953.firebaseio.com' + '/threads/' + 'threadID');
	}

	this.getComments = function(threadID) {
		return $firebase(new Firebase('https://crackling-heat-6953.firebaseio.com' + '/threads/' + 'threadID' + '/comments'));
	}
});