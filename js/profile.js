var app = angular.module("elephant");

app.service("ProfileService", ["$q", "$timeout",
  function ProfileService($q, $timeout) {
    this.getPosts = function getPosts() {
      var defer = $q.defer();

      $timeout(function() {
        defer.resolve(
          [{
            "timestamp": "41 minutes ago",
            "message": "Trying to understand why he did what he did...#JohnMiller",
            "photo": "img/5037874725.jpg",
            "author": {
              "name": "Agatha Ford",
              "photo": "img/2832982242.jpg"
            },
            "comments": [{
              "name": "Ruby Dixon",
              "photo": "img/1699893867.jpg",
              "message": "Maecenas venenatis, enim quis volutpat ornare, risus mi elementum mi, sit amet tristique ligula massa vel diam."
            }, {
              "name": "Agatha Ford",
              "photo": "img/2832982242.jpg",
              "message": "Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet."
            }]
          }, {
            "timestamp": "53 minutes ago",
            "message": "Intel announced the Project Alloy virtual-reality headset on Tuesday at its Intel Developer Forum.#pcworld",
            "photo": "img/5171142011.jpg",
            "author": {
              "name": "Beatrix Walker",
              "photo": "img/2790515408.jpg"
            },
            "comments": []
          }, {
            "timestamp": "2 hours ago",
            "message": "Underwater ~ The only place to take a selfie without my wife....#You",
            "photo": "img/5285117345.jpg",
            "author": {
              "name": "Sophia Evans",
              "photo": "img/0601274412.jpg"
            },
            "comments": [{
              "name": "Ethan Walker",
              "photo": "img/0531871454.jpg",
              "message": "Proin condimentum maximus rutrum. Ut accumsan a neque vitae pellentesque. Donec convallis gravida neque et feugiat in hac amet."
            }, {
              "name": "Sophia Evans",
              "photo": "img/0601274412.jpg",
              "message": "Integer ac congue augue. Nam rhoncus egestas semper. Integer sit amet ligula ligula. Morbi eu tortor vitae quam lacinia posuere."
            }]
          }, {
            "timestamp": "3 hours ago",
            "message": "We're seeing two biggest names in computing hunkering down as they prepare for massive shifts that could go any which way.#businessinsider",
            "photo": "img/5345655041.jpg",
            "author": {
              "name": "Daniel Taylor",
              "photo": "img/0310728269.jpg"
            },
            "comments": [{
              "name": "Daniel Taylor",
              "photo": "img/0310728269.jpg",
              "message": "Vivamus magna leo, dignissim sed semper sit amet, rutrum ut quam. Nam rhoncus quis libero non lacinia class aptent taciti amet."
            }]
          }, {
            "timestamp": "3 hours ago",
            "message": "Corniglia 2016.#RebeccaFox",
            "photo": "img/5477829604.jpg",
            "author": {
              "name": "Amelia Taylor",
              "photo": "img/1554502810.jpg"
            },
            "comments": []
          }, {
            "timestamp": "4 hours ago",
            "message": "The world's most popular and powerful mobile first front-end framework for faster and easier web development.#nTutorials",
            "photo": "img/5595140688.jpg",
            "author": {
              "name": "Darcie Russell",
              "photo": "img/2362153679.jpg"
            },
            "comments": []
          }]
        );
      });

      return defer.promise;
    };
  }
]);

app.controller("ProfileCtrl", ["$scope", "ProfileService",
  function ProfileCtrl($scope, ProfileService) {
    $scope.posts = [];

    ProfileService.getPosts().then(function(posts) {
      $scope.posts = posts;
    });
  }
]);
