var app = angular.module('app', ['as.sortable'])

.controller('mainCtrl', function($scope) {

    $scope.lists = [];




    $scope.reverse = true;


    //handle submit click and add single todo to toDos array
    $scope.createToDo = function(list) {
    	list.todoError = false;

    	if(list.newText === undefined || list.newPriority === undefined) { 
    		list.newText = 'Please enter todo and priority';
    		list.todoError = true;
    		return;
    	}

    	console.log(list.newText);
    	console.log(list.newPriority);

        //assign a priority number to toDo based on value from select box
        var priorityNumber = 0;
        switch (list.newPriority) {
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
        list.toDos.push({
            'description': list.newText,
            'priorityClass': list.newPriority,
            'priorityNumber': priorityNumber
        });





        

        //set values of inputs back to zero

        list.newText = '';
        list.priority = 0;
    }

    //remove toDo from list 
    $scope.removeToDo = function(list, toDo) {
        var i = list.toDos.indexOf(toDo);
        list.toDos.splice(i, 1);
    }

    $scope.newList = function() {
    	$scope.listNameError = false;

        if ($scope.listName !== undefined) {

            $scope.lists.push({
                name: $scope.listName,
                toDos: []
            });
            $("input[ng-model='listName']").val('');
            $scope.listName = undefined;
        } else {
        	$scope.listNameError = true;
        }
    };

     $scope.removeToDo = function(list) {
    	$scope.lists.splice($scope.lists.indexOf(list), 1)
    };
    
});
