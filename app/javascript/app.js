var app = angular.module('app', [])

.controller('mainCtrl', function($scope) {

	$scope.toDos = [];
	

	

	$scope.createToDo = function() {

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


		$scope.toDos.push({
			'description': $scope.text,
			'priorityClass': $scope.priority,
			'priorityNumber': priorityNumber
		});
		$scope.text = '';
		$scope.priority = 0;
		console.log($scope.toDos);

	}
});