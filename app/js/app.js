'use strict';


// Declare app level module which depends on filters, and services
angular.module('siteTrackr', ['siteTrackr.filters', 'siteTrackr.services', 'siteTrackr.directives', 'mongolab']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/cadastro', {templateUrl: 'partials/cadastroSite.html', controller: siteCreateCtrl});
    $routeProvider.when('/edit/:siteId', {templateUrl: 'partials/cadastroSite.html', controller: siteEditCtrl});
    $routeProvider.when('/lista', {templateUrl: 'partials/listaSites.html', controller: siteListCtrl});
    $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: MyCtrl1});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: MyCtrl2});
    $routeProvider.otherwise({redirectTo: '/lista'});
  }]);
