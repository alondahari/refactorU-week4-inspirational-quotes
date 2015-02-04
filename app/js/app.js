var quoteApp = angular.module('quotes', ['ngRoute'])
  .config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/quote-list.html'
      })
      .when('/author/:author', {
        templateUrl: 'partials/quote-list.html'
      });
  }]);