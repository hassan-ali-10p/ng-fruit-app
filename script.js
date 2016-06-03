angular.module('app', [])
  .controller('appCtrl', function($scope){
    $scope.menu = 'Fruit App';

    $scope.fruits = [
      {"name": "apple", "price": "64"},
      {"name": "orange", "price": "63"},
      {"name": "pineApple", "price": "21"}
    ];
  });
