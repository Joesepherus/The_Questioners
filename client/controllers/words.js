var myApp = angular.module('myApp');

myApp.controller('wordsController', 
	['$scope', '$http', '$location', '$routeParams',
	function($scope, $http, $location, $routeParams){
		
		$scope.getAllWords = function() {
			$http.get('/api/words').then(function(response) {
				$scope.allWords = response.data;	
				var createdDates = {};			
				for (i = 0; i < $scope.allWords.length; i++) {
					var wordCreatedDate = $scope.allWords[i].create_date;
					wordDay = wordCreatedDate.slice(8, 10);
					wordMonth = wordCreatedDate.slice(5, 7) - 1;
					wordYear = wordCreatedDate.slice(0, 4);
					wordHourAndMinuteAndSecond = wordCreatedDate.slice(11, 19);
					$scope.allWords[i].create_date = wordDay + "." + wordMonth + "." + wordYear + " " + wordHourAndMinuteAndSecond;

				}	
			});
		}

		$scope.getWord = function(){
			var id = $routeParams.id;
			$http.get('api/word' + id).then(function(response){
				$scope.word = response.data;
			});
		}

		$scope.addWord = function() {
			$http.post('api/word', $scope.word).then(function(response){
				//window.location.href = '#!/';
				window.location.reload();
			});
		}

		$scope.editWord = function(word){
			$http.put('api/word/' + word._id, $scope.word).then(function(response){
				window.location.reload();								
			});
		}

		$scope.deletePermanentlyWord = function(id, word){
			$http.delete('api/word/deleted/' + id).then(function(response){
				window.location.reload();				
			});
		}
		
		$scope.isLast = function(check) {
			if(check == true){
				var li = document.getElementsByTagName("LI");
				var i;
				$scope.numberOfWords = li.length - 7;
				for (i = 7; i < li.length; i++) {
			
					switch(li[i].children[1].children[0].innerHTML){
						case "Javascript":
							li[i].classList.add("javascript");  
							li[i].children[2].classList.add("javascript-content");
							break;
						case "HTML":
							li[i].classList.add("html");  
							li[i].children[2].classList.add("html-content");
							break;
						case "CSS":
							li[i].classList.add("css");  
							li[i].children[2].classList.add("css-content");
							break;
						case "Data structures":
							li[i].classList.add("DataStructures");  
							li[i].children[2].classList.add("DataStructures-content");
					}
				}
			}
		};

		$scope.url = "/def";
		
		$scope.editModalForm = function(wordId) {
			var li = document.getElementsByTagName("LI");
			var i;
    		for (i = 0; i < $scope.allWords.length; i++) {
				if($scope.allWords[i]._id == wordId) {
					console.log(i);
						$scope.url = i;
				}
			}		
		};
	}]);

