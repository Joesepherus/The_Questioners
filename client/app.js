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
		controller: "aboutController",
		templateUrl: "views/about.html",
	})
	.when("/Blog", {
		controller: "blogController",
		templateUrl: "views/blog.html",
	})
	.when("/about", {
		controller: "toDoListController",
		templateUrl: "views/about.html",
	})
	.when("/", {
		controller: "toDoListController",
		templateUrl: "views/about.html",
	});
});

