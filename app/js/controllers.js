quoteApp.controller('QuotesCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
  $scope.author = $routeParams.author;
  $scope.quotes = [
    {
      text: 'The bear necessities in life will come to you',
      author: 'Baloo',
      stars: 3
    }
  ];

  $scope.predicate = 'stars';
  $scope.reverse = true;

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

  $scope.addQuote = function () {
    $scope.quotes.push({
      text: $scope.newQuoteText,
      author: $scope.newQuoteAuthor,
      stars: 1
    });
    $scope.newQuoteText = '';
    $scope.newQuoteAuthor = '';
  };

  $scope.removeQuote = function(quote) {
    $scope.quotes = $scope.quotes.filter(function(val) {
      return val.$$hashKey != quote.$$hashKey;
    });
  };

  $scope.popRandomQuote = function(){
    $scope.randomQuote = _.sample($scope.quotes);
  };

  $scope.hideLightbox = function(){
    $scope.randomQuote = null;
  };

  $scope.$watchCollection('quotes', function(){
    $scope.updateLocalStorage();
  });

  $scope.updateLocalStorage = function(){
      console.log('test');
    if (Modernizr.localstorage) {
    }
  };

}]);


