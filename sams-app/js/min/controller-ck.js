var myApp=angular.module("myApp",[]);myApp.controller("MyController",["$scope","$http",function(t,r){r.get("js/data.json").success(function(r){t.artists=r,t.artistOrder="name"})}]);