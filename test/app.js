/*
 * Define an Angular module and it dependencies
 */
var myApp = angular.module('my-app', ['ngSanitize']);

/*
 * Configure the provider
 */
myApp.config(function ($sanitizeProvider) {
  $sanitizeProvider.addValidElements(['red']);
});

/*
 * Define the controller
 */
myApp.controller('my-ctrl', function ($scope) {
  $scope.tag1 = "<strong>tag1</strong>";
  $scope.tag2 = "<red>tag1</red>";
});

/*
 * Start up the Angular application manually
 */
angular.bootstrap(document, ['my-app']);
