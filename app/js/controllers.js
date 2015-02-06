quoteApp.controller('QuotesCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
  $scope.author = $routeParams.author;

  var storage = Modernizr.localstorage ? JSON.parse(localStorage.quotes) : [];
  if (storage && storage.length) {
    $scope.quotes = storage;
  } else {
    $scope.quotes = [
      {
        text: 'The bear necessities in life will come to you',
        author: 'Baloo',
        stars: 5
      }
    ];
  }

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
    console.log($scope.quotes[0]);
  };

  $scope.removeQuote = function() {
    var clickedQuote = this;
    $scope.quotes = $scope.quotes.filter(function(val){
      return !(clickedQuote.quote.$$hashKey == val.$$hashKey);
    })
  };

  $scope.popRandomQuote = function(){
    $scope.randomQuote = _.sample($scope.quotes);
  };

  $scope.hideLightbox = function(){
    $scope.randomQuote = null;
  };

  $scope.$watch('quotes', function(){
    $scope.updateLocalStorage();
  },true);

  $scope.updateLocalStorage = function(){
    if (Modernizr.localstorage) {
      localStorage.quotes = JSON.stringify($scope.quotes);
    }
  };

}]);


