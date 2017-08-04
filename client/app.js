var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when("/", {
		controller: "todoController",
		templateUrl: "views/default.html",
	})
	.when("/todo/completed", {
		controller: "todoController",
		templateUrl: "views/completed.html",
	})
	.when("/todo/inprogress", {
		controller: "todoController",
		templateUrl: "views/in_progress.html",
	})
	.when("/todo/about", {
		controller: "todoController",
		templateUrl: "views/about.html",
	});
});

