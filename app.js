var app = angular.module('exemple1',[])

app.controller('ctrl1',function ($scope) {
    $scope.persons = ["omar","nabil","issam","MrNobody"];
    $scope.nom = "";
    $scope.newElemet ="";
    $scope.addElemtn = function () {
        $scope.persons.push($scope.newElemet);
        $scope.newElemet = " ";
    }


})

app.controller("ctrl2",function ($scope,$http) {
    $scope.data = [];
    $http.get("data.json")
        .then(function (response) {
            $scope.data = response.data ;
        })
})

