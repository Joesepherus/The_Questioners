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
	.when("/blog", {
		controller: "blogController",
		templateUrl: "views/blog.html",
	})
	.when("/flashcards", {
		controller: "toDoListController",
		templateUrl: "views/flashcards.html",
	})
	.when("/", {
		controller: "toDoListController",
		templateUrl: "views/about.html",
	})
	.when("/DRO", {
		controller: "DROController",
		templateUrl: "views/DRO.html",
	})
	.when("/DRO/details/:id", {
		controller: "DROController",
		templateUrl: "views/DRO_details.html",
	});
});

