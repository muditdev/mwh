myApp.factory("postService", function() {
  var postService = {};
  postService.setpost = function(postData){
    postService.innerPost = postData;
    console.log(postService.innerPost);
  }

  return postService;
});
