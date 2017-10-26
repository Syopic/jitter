var app = angular.module("elephant");

app.service("StoreService", ["$q", "$timeout",
  function StoreService($q, $timeout) {
    this.getProducts = function getProducts() {
      var defer = $q.defer();

      $timeout(function() {
        defer.resolve(
          [{
              "photo": "img/6298374167.jpg",
              "title": "Kenzi Elephant T-shirt Women's S-XL #4951",
              "rating": 5,
              "currentPrice": 30.00,
              "oldPrice": 46.00
            },
            {
              "photo": "img/5615854990.jpg",
              "title": "Raja Elephant T-shirt Women's S-XL #4398",
              "rating": 5,
              "currentPrice": 33.00,
              "oldPrice": 46.00
            },
            {
              "photo": "img/6381079466.jpg",
              "title": "Priya Elephant T-shirt Men's S-2XL #4931",
              "rating": 5,
              "currentPrice": 30.00,
              "oldPrice": 36.00
            },
            {
              "photo": "img/6501906268.jpg",
              "title": "Donna Elephant T-shirt Men's S-2XL #4872",
              "rating": 5,
              "currentPrice": 35.00,
              "oldPrice": 42.00
            },
            {
              "photo": "img/5774898501.jpg",
              "title": "Sri Elephant T-shirt Men's S-2XL #4323",
              "rating": 5,
              "currentPrice": 32.00,
              "oldPrice": 39.00
            },
            {
              "photo": "img/6711938749.jpg",
              "title": "Tess Elephant T-shirt Women's S-XL #4972",
              "rating": 5,
              "currentPrice": 30.00,
              "oldPrice": 36.00
            },
            {
              "photo": "img/6049281045.jpg",
              "title": "Rani Elephant T-shirt Men's S-2XL #5144",
              "rating": 4,
              "currentPrice": 31.00,
              "oldPrice": 37.00
            },
            {
              "photo": "img/5991713086.jpg",
              "title": "Maliha Elephant T-shirt Women's S-XL #4909",
              "rating": 4,
              "currentPrice": 36.00,
              "oldPrice": 44.00
            },
            {
              "photo": "img/6621353903.jpg",
              "title": "Methai Elephant T-shirt Men's S-2XL #4895",
              "rating": 4,
              "currentPrice": 30.00,
              "oldPrice": 36.00
            },
            {
              "photo": "img/6482952761.jpg",
              "title": "Pearl Elephant T-shirt Women's S-XL #4972",
              "rating": 4,
              "currentPrice": 36.00,
              "oldPrice": 48.00
            },
            {
              "photo": "img/5892565850.jpg",
              "title": "Ellie Elephant T-shirt Men's S-2XL #4380",
              "rating": 4,
              "currentPrice": 41.00,
              "oldPrice": 47.00
            },
            {
              "photo": "img/6149937996.jpg",
              "title": "Jade Elephant T-shirt Women's S-XL #5019",
              "rating": 3,
              "currentPrice": 33.00,
              "oldPrice": 36.00
            }
          ]
        );
      }, 500);

      return defer.promise;
    };
  }
]);

app.controller("StoreCtrl", ["$scope", "StoreService",
  function StoreCtrl($scope, StoreService) {
    $scope.products = [];
    $scope.productsFiltered = [];

    $scope.priceFrom = 9.00;
    $scope.priceTo = 90.00;

    StoreService.getProducts().then(function(products) {
      $scope.products = $scope.productsFiltered = products;
    });

    $scope.$watchGroup(["priceFrom", "priceTo"], function(values) {
      $scope.productsFiltered = _.filter($scope.products, function(product) {
        return product.currentPrice >= values[0] && product.currentPrice <= values[1];
      });
    });
  }
]);
