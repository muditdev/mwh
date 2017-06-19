myApp.controller('MainCtrl', ['$scope', '$rootScope', '$location', '$timeout', function ($scope, $rootScope, $location, $timeout) {
  var vm = this;
  $rootScope.currPage = "";
  $rootScope.baseurl = "/";
  vm.name = "mudit";
  console.log('MainCtrl as MainCtrl');

  // active current navigation starts
  vm.isActive = function (viewLocation) {
    var active = (viewLocation === $location.path());
    return active;
  }
  // active current navigation ends

  $scope.$on('$viewContentLoaded', function () {
    $timeout(function () {
      mobilenavunbind();
      console.log('unbinded');
      layoutDone();
      console.log('loaded')
      hideLoader();
    }, 1000)
  });
}]);