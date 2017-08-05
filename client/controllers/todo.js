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
		var id = $routeParams.id;
		$http.put('api/toDoList/' + id, $scope.book).then(function(response){
			window.location.href = '#!/toDoList';
		});
	}

	$scope.removeTask = function(id){
		$http.delete('api/toDoList/' + id).then(function(response){
			window.location.href = '#!/toDoList';
		});
	}

}]);