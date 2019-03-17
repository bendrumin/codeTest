'use strict';

/**
 * @ngdoc function
 * @name codeChallengeTemplateApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the codeChallengeTemplateApp
 */
angular.module('codeChallengeTemplateApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

  var app = angular.module('myApp', []);
  app.controller('MainCtrl', function($scope, $http) {
      $http.get('../../test-data/designs.csv')
      .then(function (response) {$scope.names = response.data.records;});
  });
