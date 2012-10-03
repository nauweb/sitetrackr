'use strict';

/* Controllers */


function MyCtrl1() {}
MyCtrl1.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];



function siteListCtrl($scope, Site) {
  $scope.sites = Site.query();
}


function siteCreateCtrl($scope, $location, Site) {
  $scope.save = function() {
     Site.save($scope.site, function(site) {
      $location.path('/edit/' + site._id.$oid);
    });
  }
}


function siteEditCtrl($scope, $location, $routeParams, Site) {  
  var self = this;
  
  Site.get({id: $routeParams.siteId}, function(site) {
    self.original = site;
    $scope.site = new Site(self.original);
  });

  $scope.isClean = function() {
    return angular.equals(self.original, $scope.site);
  }
 
  $scope.save = function() {
    $scope.site.update(function() {
      $location.path('/');
    });
  };
  
  $scope.destroy = function() {
    self.original.destroy(function() {
      $location.path('/list');
    });
  };
 
}