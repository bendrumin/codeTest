'use strict';

/**
 * @ngdoc function
 * @name codeChallengeTemplateApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the codeChallengeTemplateApp
 */
angular.module('codeChallengeTemplateApp', ["ngTable"])
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    function TableCtrl($scope) {
    $scope.testVar = 'This my test for ngtable';
    // if this is your controller, every var you put in the $scope will be accessible in the view

    var data = [{name: "Moroni", age: 50} /*,*/];
    $scope.tableParams = new NgTableParams({}, { dataset: data});
}
TableCtrl.$inject = ["$scope","NgTableParams", "ngTableSimpleList"];
module.exports = TableCtrl;
  });
