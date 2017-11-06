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

app.controller("ctrl2",function (dataManager , $scope) {
    $scope.data = [];
    dataManager.getData("data.json")
        .then(function (data) {
            $scope.data = data;
        })
})

app.service("dataManager",function ($http) {
    return {
        getData : function (url) {
            return $http.get(url)
                .then(function (response) {
                    return response.data ;
                })
        }
    }
})

