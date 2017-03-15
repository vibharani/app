var app=angular.module("myApp",["ngRoute"]);
  console.log('hi');
app.config(function($routeProvider){
    $routeProvider
      .when('/parrot',{
         templateUrl:'p/parrot.html',
         controller:'myCtrl'
    })
        .when('/rabbit',{
            templateUrl:'r/rabbit.html',
            controller:'myCtrl1'
        });
    
});
app.controller("myCtrl",function($scope){
 
    $scope.msg="green";
});
app.controller("myCtrl1",function($scope){
     
    $scope.msg="white";
});