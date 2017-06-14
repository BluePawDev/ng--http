// declare out intentions to use an Angular module app
var myApp = angular.module('myApp', []);

// start HttpController
myApp.controller('HttpController', function($http) {
	var vm = this;

	vm.startUpFunction = function() {
		console.log('I am here in startUpFunction');
		$http({
			method: 'GET',
			url: '/songs'
		}).then(function(response) {
			console.log('back with:', response);
		});
	}; // end startUpFunction


	vm.otherGet = function() {
		console.log('using other get syntax');
		$http.get('/songs').then(function(response) {
			console.log('back with:', response);
		});
	}; // end otherGet


}); // end HttpController
