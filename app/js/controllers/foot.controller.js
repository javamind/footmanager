angular.module('foot').controller('FootCtrl', function ($scope, $window, $http) {

  $scope.joueurs = [
    {id: 1, firstname: 'Lucas', lastname: 'EHRET'},
    {id: 2, firstname: 'Cédric', lastname: 'EHRET'},
    {id: 3, firstname: 'Romain', lastname: 'EHRET'},
    {id: 4, firstname: 'Gerard', lastname: 'EHRET'},
    {id: 5, firstname: 'Jack', lastname: 'EHRET'},
    {id: 6, firstname: 'Guillaume', lastname: 'EHRET'}
  ]
  $scope.terrain = angular.fromJson($window.localStorage.getItem('terrain'));

  $scope.clearTerrain = function(){
    $scope.terrain = [
      {
        order: 1,
        type: "G",
        players: [
          {
            position: 1,
            name: "",
            disabled: true
          },
          {
            position: 2,
            name: "",
            disabled: true
          },
          {
            position: 3,
            name: "",
            type: "G"
          },
          {
            position: 4,
            name: "",
            disabled: true

          },
          {
            position: 5,
            name: "",
            disabled: true
          }
        ]
      },
      {
        order: 2,
        type: "D",
        players: [
          {
            position: 1,
            name: "",
            type: "DD"

          },
          {
            position: 2,
            name: "",
            type: "DC"
          },
          {
            position: 3,
            name: "",
            type: "DC"
          },
          {
            position: 4,
            name: "",
            type: "DC"
          },
          {
            position: 5,
            name: "",
            type: "DG"
          }
        ]
      }
      ,
      {
        order: 3,
        type: "MD",
        players: [
          {
            position: 1,
            name: "",
            type: "MD"
          },
          {
            position: 2,
            name: "",
            type: "MC"
          },
          {
            position: 3,
            name: "",
            type: "MC"
          },
          {
            position: 4,
            name: "",
            type: "MC"
          },
          {
            position: 5,
            name: "",
            type: "MG"
          }
        ]
      },
      {
        order: 4,
        type: "MC",
        players: [
          {
            position: 1,
            name: "",
            type: "MD"
          },
          {
            position: 2,
            name: "",
            type: "MC"
          },
          {
            position: 3,
            name: "",
            type: "MC"
          },
          {
            position: 4,
            name: "",
            type: "MC"
          },
          {
            position: 5,
            name: "",
            type: "MG"
          }
        ]
      },
      {
        order: 5,
        type: "MO",
        players: [
          {
            position: 1,
            name: "",
            type: "MOD"
          },
          {
            position: 2,
            name: "",
            type: "MOC"
          },
          {
            position: 3,
            name: "",
            type: "MOC"
          },
          {
            position: 4,
            name: "",
            type: "MOC"
          },
          {
            position: 5,
            name: "",
            type: "MOG"
          }
        ]
      }
      ,
      {
        order: 6,
        type: "A",
        players: [
          {
            position: 1,
            name: "",
            type: "AD"
          },
          {
            position: 2,
            name: "",
            type: "AD"
          },
          {
            position: 3,
            name: "",
            type: "BT"
          },
          {
            position: 4,
            name: "",
            type: "AG"
          },
          {
            position: 5,
            name: "",
            type: "AG"
          }
        ]
      }
    ];
    $scope.saveTerrain();
  }

  $scope.saveTerrain = function(){
    $window.localStorage.setItem('terrain', angular.toJson($scope.terrain));
  }

  if(!$scope.terrain){
    $scope.clearTerrain();
  }

});