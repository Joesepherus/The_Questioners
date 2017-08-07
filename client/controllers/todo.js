var myApp = angular.module('myApp');

myApp.controller('toDoListController', 
	['$scope', '$http', '$location', '$routeParams',
	function($scope, $http, $location, $routeParams){
		
	$scope.getAllTasks = function() {
		$http.get('/api/toDoList').then(function(response) {
			$scope.allTasks = response.data;
		});
	}

	$scope.getTask = function(){
		var id = $routeParams.id;
		$http.get('api/toDoList/' + id).then(function(response){
			$scope.task = response.data;
		});
	}

	$scope.addTask = function() {
		$http.post('api/toDoList', $scope.task).then(function(response){
			window.location.href = '#!/toDoList';
		});
	}

	$scope.editTask = function(){
		$http.put('api/toDoList/' + task._id, $scope.task).then(function(response){
			// window.location.href = '#!/toDoList';
		});
	}

	$scope.completeTask = function(id, task){
		$http.put('api/toDoList/completed/' + task._id, task).then(function(response){
			// window.location.href = '#!/toDoList';
		});
	}

	$scope.removeTask = function(id, task){
		$http.put('api/toDoList/removed/' + task._id, task).then(function(response){
			// window.location.href = '#!/toDoList';
		});
	}

	$scope.deletePermanentlyTask = function(id, task){
		$http.delete('api/toDoList/deleted/' + id).then(function(response){
			console.log("lol");
			//window.location.href = '#!/toDoList';
		});
	}

}]);