angular.module('users').config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/users/:user_id', {
    templateUrl: '/users/views/users.client.view.html'
  });

  }]);
