myApp.config(['$routeProvider','$locationProvider','$httpProvider',function($routeProvider,$locationProvider,$httpProvider) {
    //$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    $routeProvider
      .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl as HomeCtrl'
      })
      .when('/services', {
            templateUrl: 'views/services.html',
            controller: 'ServCtrl as ServCtrl'
      })
      .when('/projects', {
            templateUrl: 'views/projects.html',
            controller: 'ProjectsCtrl as ProjectsCtrl'
      })
      .when('/products', {
            templateUrl: 'views/products.html',
            controller: 'ProductsCtrl as ProductsCtrl'
      })
      .when('/blogs', {
            templateUrl: 'views/blog.html',
            controller: 'BlogCtrl as BlogCtrl'
      })
      .when('/blog/:postname', {
            templateUrl: 'views/post.html',
            controller: 'PostCtrl as PostCtrl'
      })
      .otherwise({
            redirectTo: '/'
      });

      // use the HTML5 History API for # url fix
      $locationProvider.html5Mode({
        enabled : true,
        requireBase : true,
        rewriteLinks : true
      });
}]);
