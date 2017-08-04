var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when("/", {
		controller: "toDoListController",
		templateUrl: "views/default.html",
	})
	.when("/toDoList/completed", {
		controller: "toDoListController",
		templateUrl: "views/completed.html",
	})
	.when("/toDoList/inprogress", {
		controller: "toDoListController",
		templateUrl: "views/in_progress.html",
	})
	.when("/toDoList/about", {
		controller: "toDoListController",
		templateUrl: "views/about.html",
	});
});

