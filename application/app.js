var myApp = angular.module('mwhApp', ['ngRoute', 'ngSanitize'], function($interpolateProvider) {
    $interpolateProvider.startSymbol('{(');
    $interpolateProvider.endSymbol(')}');
  })


myApp.run(function ($rootScope, $location, $route, $timeout) {
  $rootScope.$on("$routeChangeStart", function (event) {
    // scrolling to top on changing routes starts
      window.scrollTo(0, 0);
    // scrolling to top on changing routes ends


    var currLoc = $location.path();
    // condition only for home page
    if(currLoc == "/"){
      // code if user in home page
      $rootScope.isHome = true;
    }
    else {
      // code if user not in home page
      $rootScope.isHome = false;
    }
  });

  $rootScope.$on('$viewContentLoaded', function(){
    $timeout(function(){
      layoutDone();
    }, 1000)
  });
})



myApp.filter('renderHTML', function($sce){
	return function(stringToParse){
    // var myhtml = $sce.trustAsHtml(stringToParse);
    var myhtml = stringToParse;
    var decodedHTML = $('<div/>').html(myhtml).text();
    // console.log(stringToParse);
		return decodedHTML;
	}
});
