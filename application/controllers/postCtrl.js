myApp.controller('PostCtrl', ['$scope', '$rootScope', '$routeParams', 'postService', '$location', 'blogServices', function($scope, $rootScope, $routeParams, postService, $location, blogServices){
  var vm = this;
  $rootScope.currPage = 'post';
  // alert($routeParams.postname);
  console.log('PostCtrl as PostCtrl')
  console.log($location.path())

  // console.log(vm.mypost)
  if(vm.mypost == undefined){
    blogServices.getPosts().then(function(response){
      // console.log(response)
      angular.forEach(response, function(post, i) {
          // console.log("asdasdasdasdas", posts, i)
          if(post.url == $location.path()){
            // console.log(post);
            vm.mypost = post;
          }
      });
    })
  }
  else{
    vm.mypost = postService.innerPost;
  }
  //
  // postService.getpost($location.path()).then(function(data){
  //   alert(0);
  //   console.log('akjghdjkahsdkjhaskjhdkjshajkd', data);
  // });






}])
