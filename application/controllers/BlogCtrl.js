myApp.controller('BlogCtrl', ['$scope','$rootScope', 'blogServices', 'postService', "$location" , function($scope, $rootScope, blogServices, postService, $location){
  var vm = this;
  $rootScope.currPage = 'blog';
  console.log('BlogCtrl as BlogCtrl')
  blogServices.getPosts().then(function(response){
    console.log(response);
    vm.posts = response;
  }, function(response){
    console.log('Error', response);
  })

  vm.gotopost = function(postData){
    // console.log(postData); 
    postService.setpost(postData);
    $location.path(postData.url);

  }

}])
