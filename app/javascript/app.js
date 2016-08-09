var app = angular.module('app', ['as.sortable'])

.controller('mainCtrl', function($scope) {

	$scope.toDos = [];
	$scope.reverse = true;

	
	//handle submit click and add single todo to toDos array
	$scope.createToDo = function() {

		//assign a priority number to toDo based on value from select box
		var priorityNumber = 0;
		switch ($scope.priority) {
			case "list-group-item-danger":
				priorityNumber = 1;
				break;
			case "list-group-item-warning":
				priorityNumber = 2;
				break;
			case "list-group-item-success":
				priorityNumber = 3;
				break;
			default: 
				priorityNumber = 1;

		}

		//push item to array
		$scope.toDos.push({
			'description': $scope.text,
			'priorityClass': $scope.priority,
			'priorityNumber': priorityNumber
		});

		//set values of inputs back to zero
		$scope.text = '';
		$scope.priority = 0;
	}

	//part of ng-sortable
	// $scope.$watch('toDos', function () {
	//     console.log(arguments);
	//   });
	// $scope.sortableOptions = {
	//     containment: '#sortable-container'
	//   };
});