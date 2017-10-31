angular.module('ira').controller('TestCtrl', ['$scope', '$filter', function ($scope, $filter) {

    $scope.distinctDef = {};

    $.getJSON('data/data.json', function (data) {

        $scope.tabs = data;
        $scope.unique = {};
        $scope.distinct = [];
        $scope.ListOfName = [];
        $scope.ListOfDistrict =[];
        //get unique by type
        for (var i in $scope.tabs) {
            if (typeof ($scope.unique[$scope.tabs[i].Type]) == "undefined") {
                $scope.distinct.push($scope.tabs[i].Type);
            }
            $scope.unique[$scope.tabs[i].Type] = 0;
        }
        //set default type for model
        $scope.distinctDef = $scope.distinct[0];
        //get data by default type
        $scope.ListOfName = $scope.tabs.filter(function (distinct) {
            return (distinct.Type == $scope.distinctDef);
        });
        //get data by selected type
        $scope.$watch('distinctDef', function () {
            $scope.ListOfName = $scope.tabs.filter(function (distinct) {
                return (distinct.Type == $scope.distinctDef);
            });
         //get District 
         for (var i in $scope.ListOfName) {
            if (typeof ($scope.unique[$scope.ListOfName[i].District]) == "undefined") {
                $scope.ListOfDistrict.push($scope.ListOfName[i].District);
            }
            $scope.unique[$scope.ListOfName[i].District] = 0;
        }
            console.log($scope.ListOfName);
            console.log("Dis ", $scope.ListOfDistrict);
        });
        
        console.log($scope.ListOfName);
        console.log($scope.distinct);
    })
}]);