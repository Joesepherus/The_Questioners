var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when("/todolist", {
		controller: "toDoListController",
		templateUrl: "views/todolist.html",
	})
	.when("/QaA", {
		controller: "QaAController",
		templateUrl: "views/QaA.html",
	})
	.when("/about", {
		controller: "toDoListController",
		templateUrl: "views/about.html",
	});
});

