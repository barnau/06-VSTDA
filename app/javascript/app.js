var app = angular.module('app', ['as.sortable'])

.controller('mainCtrl', function($scope) {

    $scope.lists = [];




    $scope.reverse = true;


    //handle submit click and add single todo to toDos array
    $scope.createToDo = function(list) {

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

        $scope.text = '';
        $scope.priority = 0;
    }

    //remove toDo from list 
    $scope.removeToDo = function(list, toDo) {
        var i = list.toDos.indexOf(toDo);
        list.toDos.splice(i, 1);
    }

    $scope.newList = function() {
        if ($scope.listName !== undefined) {

            $scope.lists.push({
                name: $scope.listName,
                toDos: []
            });
            $("input[ng-model='listName']").val('');
            $scope.listName = undefined;
        }
    }
});
