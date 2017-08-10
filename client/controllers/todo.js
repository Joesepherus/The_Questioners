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

		$scope.editTask = function(task){
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
		
		$scope.isLast = function(check) {
			if(check == true){
				var li = document.getElementsByTagName("LI");
				var i;
				for (i = 6; i < li.length; i++) {
					switch(li[i].children[1].children[2].innerHTML){
						case "completed":
							li[i].classList.add("completed");  
							break;
						case "removed":
							li[i].classList.add("removed");  
							break;
					}
					
					switch(li[i].children[1].children[1].innerHTML){
						case "work":
							li[i].classList.add("work");  
							li[i].children[1].classList.add("work-content")
							break;
						case "personal":
							li[i].classList.add("personal");  
							li[i].children[1].classList.add("personal-content")
							break;
					}
				}
			}
		};

		$scope.url = "/def";
		
		$scope.editModalForm = function(taskId) {
			var li = document.getElementsByTagName("LI");
			var i;
    		for (i = 0; i < $scope.allTasks.length; i++) {
				if($scope.allTasks[i]._id == taskId) {
						$scope.url = i;
				}
			}		
		};
	}]);

