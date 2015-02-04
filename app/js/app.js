var quoteApp = angular.module('quotes', ['ngRoute'])
  .config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/quote-list.html',
        controller: 'QuoteListCtrl'
      })
      .when('/author/:author', {
        templateUrl: 'partials/author-list.html',
        controller: 'AuthorListCtrl'
      });
  }]);