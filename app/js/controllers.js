'use strict';

/* Controllers */


function MyCtrl1() {}
MyCtrl1.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];


function formCadastroCtrl($scope) {
  var master = {
    name: 'John Smith',
    address:{
      line1: '123 Main St.',
      city:'Anytown',
      state:'AA',
      zip:'12345'
    },
    contacts:[
      {type:'phone', value:'1(234) 555-1212'}
    ]
  };

  $scope.state = /^\w\w$/;
  $scope.zip = /^\d\d\d\d\d$/;

  $scope.cancel = function() {
    $scope.site = angular.copy(master);
  };

  $scope.save = function() {
    master = $scope.site;
    $scope.cancel();
  };

  $scope.addContact = function() {
    $scope.site.contacts.push({type:'', value:''});
  };

  $scope.removeContact = function(contact) {
    var contacts = $scope.site.contacts;
    for (var i = 0, ii = contacts.length; i < ii; i++) {
      if (contact === contacts[i]) {
        contacts.splice(i, 1);
      }
    }
  };

  $scope.isCancelDisabled = function() {
    return angular.equals(master, $scope.site);
  };

  $scope.isSaveDisabled = function() {
    return $scope.myForm.$invalid || angular.equals(master, $scope.site);
  };

  $scope.cancel();
}