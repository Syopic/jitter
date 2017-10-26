var app = angular.module("elephant");

app.service("ProductService", ["$q", "$timeout",
  function ProductService($q, $timeout) {
    this.getProduct = function getProduct() {
      var defer = $q.defer();

      $timeout(function() {
        defer.resolve({
          "name": "Sri Elephant T-shirt",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae veritatis culpa pariatur ducimus aliquam iste est ut, unde neque at aperiam, hic, rem reprehenderit fuga minus sed. Aspernatur, consequuntur, iste.",
          "currentPrice": 33.00,
          "oldPrice": 46.00,
          "photos": [
            "img/6858253787.jpg",
            "img/6950484109.jpg",
            "img/7045565015.jpg",
            "img/7154941405.jpg"
          ]
        });
      }, 500);

      return defer.promise;
    };
  }
]);

app.controller("ProductCtrl", ["$scope", "ProductService",
  function ProductCtrl($scope, ProductService) {
    $scope.product;

    ProductService.getProduct().then(function(product) {
      $scope.product = product;
    });
  }
]);
