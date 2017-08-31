var myApp = angular.module('myApp');

myApp.controller('DROController', 
	['$scope', '$http', '$location', '$routeParams',
	function($scope, $http, $location, $routeParams){
		$scope.getAllDROs = function() {
			$http.get('/api/DRO').then(function(response) {
				$scope.allDROs = response.data;
			});
		}

		$scope.getDRO = function(){
			var id = $routeParams.id;
			$http.get('api/DRO/' + id).then(function(response){
				$scope.dro = response.data;
			});
		}

		$scope.addDRO = function() {
			$http.post('api/DRO', $scope.newDRO).then(function(response){
				//window.location.href = '#!/';
				window.location.reload();
			});
		}

		$scope.editDRO = function(dro){
			$http.put('api/DRO/' + dro._id, $scope.dro).then(function(response){
				window.location.reload();								
			});
		}

		$scope.deletePermanentlyDRO = function(id, dro){
			$http.delete('api/DRO/deleted/' + id).then(function(response){
				window.location.reload();				
			});
		}
		
		$scope.isLast = function(check) {
			if(check == true){
				var li = document.getElementsByTagName("LI");
				var i;
				if (typeof $scope.allDROs != undefined){
					for (i = 7; i < li.length; i++) {		
						if (i >= 17) {
							li[i].style.display = "none";                
						}
					}
				}
			}

			// for pagination WIP
			$scope.selectedDROsLength = Math.ceil($scope.selectedItem.dros.length / $scope.pageSize);
		};

		$scope.select = function() {
			console.log($scope.selectedScreenIndex)
			if ($scope.selectedScreenIndex == null) {
				$scope.selectedItem = [];
				$scope.currentPage = 0;
				$scope.selectedDROsLength = 1;
				return;
			}
			$scope.views.forEach(function(item){
				if (item.id == $scope.selectedScreenIndex.id){
					$scope.selectedItem = item;
					if ($scope.selectedItem.dros.length == 0) {
						$scope.selectedDROsLength = 1;
					}
				}
				$scope.currentPage = 0;
			});
		}
		

		/*$scope.selector = function(a) {
			  
			var li = document.getElementsByTagName("LI");
			var selected_option = $('#selector option:selected');
			console.log(selected_option[0].value);
			var numberOfTasks = 0;
			for (i = 5; i < li.length; i++) {		
				console.log(li[i].children[1].children[2].innerHTML + "=="+ selected_option[0].value);
				if(li[i].children[1].children[2].innerHTML == selected_option[0].value) {
					numberOfTasks++;
					console.log("dicks");
				}
			}			
			console.log(numberOfTasks);
			setTimeout(function() {
    			$scope.$apply(function() {
					$scope.numberOfTasks = numberOfTasks;
				})
			  }, 1000);
		};*/

		$scope.url = "/def";
		
		$scope.editModalForm = function(droId) {
			var li = document.getElementsByTagName("LI");
			var i;
    		for (i = 0; i < $scope.allTasks.length; i++) {
				if($scope.allTasks[i]._id == droId) {
						$scope.url = i;
				}
			}		
		};

	// for pagination WIP
	$scope.currentPage = 0;
	$scope.pageSize = 10;

	}]);

// for pagination WIP
myApp.filter('startFrom', function() {
    return function(input, start) {
		start = +start; //parse to int
		if (typeof input == "undefined") {
			return;
		}
        return input.slice(start);
    }
});
