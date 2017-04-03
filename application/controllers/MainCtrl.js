myApp.controller('MainCtrl', ['$scope','$rootScope','$location' , function($scope, $rootScope, $location){
  var vm = this;
  $rootScope.currPage = "";
  $rootScope.baseurl = "/";
  vm.name = "mudit";
  console.log('MainCtrl as MainCtrl');

  // active current navigation starts
  vm.isActive = function(viewLocation){
    var active = (viewLocation === $location.path());
    return active;
  }
  // active current navigation ends
}]);
