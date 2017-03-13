var myApp=angular.module("mwhApp",["ngRoute","ngSanitize"],["$interpolateProvider",function(o){o.startSymbol("{("),o.endSymbol(")}")}]);myApp.run(["$rootScope","$location","$route",function(o,t,r){o.$on("$routeChangeStart",function(r){window.scrollTo(0,0);var e=t.path();"/"==e?o.isHome=!0:o.isHome=!1})}]),myApp.filter("renderHTML",["$sce",function(o){return function(o){var t=o,r=$("<div/>").html(t).text();return r}}]),myApp.config(["$routeProvider","$locationProvider","$httpProvider",function(o,t,r){o.when("/",{templateUrl:"views/home.html",controller:"HomeCtrl as HomeCtrl"}).when("/services",{templateUrl:"views/services.html",controller:"ServCtrl as ServCtrl"}).when("/projects",{templateUrl:"views/projects.html",controller:"ProjectsCtrl as ProjectsCtrl"}).when("/products",{templateUrl:"views/products.html",controller:"ProductsCtrl as ProductsCtrl"}).when("/blogs",{templateUrl:"views/blog.html",controller:"BlogCtrl as BlogCtrl"}).when("/posts/:postname",{templateUrl:"views/post.html",controller:"PostCtrl as PostCtrl"}).otherwise({redirectTo:"/"}),t.html5Mode({enabled:!0,requireBase:!0,rewriteLinks:!0})}]),myApp.factory("blogServices",["$http","$q",function(o,t){var r={};return r.getPosts=function(){var r=t.defer();return o({url:"/api/posts/posts.json",method:"GET"}).success(function(o){r.resolve(o)}).error(function(o){r.reject(o)}),r.promise},r}]),myApp.factory("postService",function(){var o={};return o.setpost=function(t){o.innerPost=t,console.log(o.innerPost)},o}),myApp.controller("BlogCtrl",["$scope","$rootScope","blogServices","postService","$location",function(o,t,r,e,l){var n=this;t.currPage="blog",console.log("BlogCtrl as BlogCtrl"),r.getPosts().then(function(o){console.log(o),n.posts=o},function(o){console.log("Error",o)}),n.gotopost=function(o){e.setpost(o),l.path(o.url)}}]),myApp.controller("HomeCtrl",["$scope","$rootScope",function(o,t){t.currPage="home",console.log("HomeCtrl")}]),myApp.controller("MainCtrl",["$scope","$rootScope",function(o,t){var r=this;t.currPage="",t.baseurl="/",r.name="mudit",console.log("MainCtrl")}]),myApp.controller("PostCtrl",["$scope","$rootScope","$routeParams","postService","$location","blogServices",function(o,t,r,e,l,n){var s=this;t.currPage="post",console.log("PostCtrl as PostCtrl"),console.log(l.path()),void 0==s.mypost?n.getPosts().then(function(o){angular.forEach(o,function(o,t){o.url==l.path()&&(s.mypost=o)})}):s.mypost=e.innerPost}]),myApp.controller("ProductsCtrl",["$scope","$rootScope",function(o,t){t.currPage="products",console.log("ProductsCtrl")}]),myApp.controller("ProjectsCtrl",["$scope","$rootScope",function(o,t){t.currPage="projects",console.log("ProjectsCtrl")}]),myApp.controller("ServCtrl",["$scope","$rootScope",function(o,t,r){t.currPage="services",console.log("ServCtrl")}]);
//# sourceMappingURL=application.js.map
