'use strict';

/**
* @ngdoc function
* @name codeChallengeTemplateApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the codeChallengeTemplateApp
*/
angular.module('codeChallengeTemplateApp')
.controller('MainCtrl', function ($scope) {
  this.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
  $scope.sortType     = 'name'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order

  $scope.cambria = [
    { name: 'Baybridge', created: ' 2019-02-01', status:  'R&D' },
    { name: 'Bently', created: ' 2018-11-01', status:  'R&D' },
    { name: 'Islington', created: ' 2018-10-30', status: 'Deprecated' },
    { name: 'Marwell', created: ' 2017-06-04', status: ' Released' }
  ];

});
