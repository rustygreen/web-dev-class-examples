angular.module('app', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })

      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })

      .otherwise('/')
  })

  .controller('MainCtrl', function ($scope) {
    $scope.title = 'Main Page';
    $scope.subtitle = 'alksdjf klasjd fklajs dklj alksj dflkajsdlkfj aslkdj flkasj dfklja slkfj lkas djflka jsdlkfjasd.';
  })

  .controller('AboutCtrl', function ($scope) {
    $scope.title = 'ABOUT Page';
    $scope.subtitle = 'alksdjf klasjd fklajs dklj alksj dflkajsdlkfj aslkdj flkasj dfklja slkfj lkas djflka jsdlkfjasd.';
  });