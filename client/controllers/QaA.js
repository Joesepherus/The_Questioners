var myApp = angular.module('myApp');

myApp.controller('QaAController', 
	['$scope', '$http', '$location', '$routeParams',
	function($scope, $http, $location, $routeParams){
		
		$scope.getAllQaA = function() {
			$http.get('/api/QaA').then(function(response) {
				$scope.allQaA = response.data;		
			});
		}

		$scope.getQaA = function(){
			var id = $routeParams.id;
			$http.get('api/QaA' + id).then(function(response){
				$scope.QaA = response.data;
			});
		}

		$scope.addQaA = function() {
			$http.post('api/QaA', $scope.QaA).then(function(response){
				//window.location.href = '#!/';
				window.location.reload();
			});
		}

		$scope.editQaA = function(qaa){
			$http.put('api/QaA/' + qaa._id, $scope.qaa).then(function(response){
				window.location.reload();								
			});
		}

		$scope.passedQaA = function(id, qaa){
			if (qaa.state != "passed") {
				qaa.state = "passed";
				$http.put('api/QaA/passed/' + qaa._id, qaa).then(function(response){
				});
			}
			else {
				qaa.state = "inprogress";				
				$http.put('api/QaA/inprogress/' + qaa._id, qaa).then(function(response){
				});
			}
		}

		$scope.failedQaA = function(id, qaa){
			if (qaa.state != "failed") {
				qaa.state = "failed";
				$http.put('api/QaA/failed/' + qaa._id, qaa).then(function(response){
				});
			}
			else {
				qaa.state = "inprogress";				
				$http.put('api/QaA/inprogress/' + qaa._id, qaa).then(function(response){
				});
			}
		}

		$scope.deletePermanentlyQaA = function(id, qaa){
			$http.delete('api/QaA/deleted/' + id).then(function(response){
				window.location.reload();				
			});
		}
		
		$scope.isLast = function(check) {
			if(check == true){
				var li = document.getElementsByTagName("LI");
				var i;
				for (i = 5; i < li.length; i++) {
					
					switch(li[i].children[2].children[1].innerHTML){
						case "Javascript":
							li[i].classList.add("javascript");  
							li[i].children[1].classList.add("javascript-content");
							break;
						case "HTML":
							li[i].classList.add("html");  
							li[i].children[1].classList.add("html-content");
							break;
						case "CSS":
							li[i].classList.add("css");  
							li[i].children[1].classList.add("css-content");
							break;
					}

					switch(li[i].children[2].children[2].innerHTML){
						case "passed":
							li[i].classList.add("passed");  
							break;
						case "failed":
							li[i].classList.add("failed"); 
							li[i].children[1].classList.add("failed-content");
							break;
					}

					/*if(li[i].children[2].children[4].innerHTML == "") {
						li[i].children[2].children[4].innerHTML = "not completed";
					}*/
				}
			}
		};

		$scope.url = "/def";
		
		$scope.editModalForm = function(qaaAId) {
			var li = document.getElementsByTagName("LI");
			var i;
    		for (i = 0; i < $scope.allQaA.length; i++) {
				if($scope.allQaA[i]._id == qaaAId) {
						$scope.url = i;
				}
			}		
		};
	}]);

