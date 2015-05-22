
  /**
  * mainApp Module
  *
  * Just an app for testing out the module
  */
  angular.module('mainApp', ["socialMedia"]).controller("TestCtrl", function($scope){
    $scope.pages = [1,2,3]
  });