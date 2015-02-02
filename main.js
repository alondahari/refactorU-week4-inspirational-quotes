angular.module('quotes', [])
  .controller('quote-list', ['$scope', function ($scope) {
    $scope.quotes = [
      {
        text: 'The bear necessities will come to you',
        author: 'Baloo',
        stars: 4
      }
    ];

    $scope.addQuote = function () {
      $scope.quotes.push({
        text: $scope.newQuoteText,
        author: $scope.newQuoteAuthor,
        stars: 0
      });
      $scope.newQuoteText = '';
      $scope.newQuoteAuthor = '';
    };
}]);
