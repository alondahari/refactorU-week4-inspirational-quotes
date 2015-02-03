angular.module('quotes', [])
  .controller('quote-list', ['$scope', function ($scope) {
    $scope.quotes = [
      {
        text: 'The bear necessities will come to you',
        author: 'Baloo',
        stars: 3
      }
    ];

    $scope.addQuote = function () {
      $scope.quotes.push({
        text: $scope.newQuoteText,
        author: $scope.newQuoteAuthor,
        stars: 1
      });
      $scope.newQuoteText = '';
      $scope.newQuoteAuthor = '';
    };

    $scope.formatStars = function (num) {
      var arr = new Array(5);
      for (var i = 0; i < num; i++) {
        arr[i] = 'star-filled';
      }
      return arr;
    };

    $scope.setStars = function (quote) {
      quote.stars = this.$index + 1;
    };
}]);
