var app = angular.module('myRTFM');
app.service('mainService', function(fb) {

	this.user = {};

	this.login = function(username) {
		console.log(username)
	};

	this.getUser = function() {
		return user;
	}

});