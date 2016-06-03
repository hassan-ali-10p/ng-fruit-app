angular.module('app', [])
  .controller('appCtrl', function($scope){
    $scope.menu = 'Fruit App';
    $scope.name;
    $scope.price;
    var count = 3;  // because already three elements are added in fruits list
    $scope.fruits = [
      {"id": "1", "name": "apple", "price": "64"},
      {"id": "2", "name": "orange", "price": "63"},
      {"id": "3", "name": "pineApple", "price": "21"}
    ];

    $scope.addFruit = function(fruit={}){
      count++;
      fruit["id"] = count;
      $scope.fruits.push(fruit);
    };
    $scope.deleteFruit = function(fruitId){
      for (var i=$scope.fruits.length-1; i>=0; i--) {
          if ($scope.fruits[i].id === fruitId) {
              $scope.fruits.splice(i, 1);
          }
      }
    };
  });
