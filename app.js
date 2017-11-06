var app = angular.module('exemple1',[])

app.controller('ctrl1',function ($scope , $http) {
    $scope.persons = ["omar","nabil","issam","MrNobody"];
    $scope.nom = "";
    $scope.newElemet ="";
    $scope.addElemtn = function () {
        $scope.persons.push($scope.newElemet);
        $scope.newElemet = " ";
    }
    $scope.data = [];
    $http.get("data.json")
        .then(function (response) {
            $scope.data = response.data ;
        })

})

