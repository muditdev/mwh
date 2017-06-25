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
      //projects
      .when('/projects/desenostudio', {
            templateUrl: 'views/projects/deseno.html',
            controller: 'ProjCtrl as ProjCtrl'
      })
      .when('/projects/mypanditg', {
            templateUrl: 'views/projects/mypanditg.html',
            controller: 'ProjCtrl as ProjCtrl'
      })
      .when('/projects/muditjaintheme', {
            templateUrl: 'views/projects/muditjain.html',
            controller: 'ProjCtrl as ProjCtrl'
      })
      .when('/projects/starbucks', {
            templateUrl: 'views/projects/starbucksapp.html',
            controller: 'ProjCtrl as ProjCtrl'
      })
      .when('/projects/ecommerceLanding', {
            templateUrl: 'views/projects/ecommerceLanding.html',
            controller: 'ProjCtrl as ProjCtrl'
      })
      .when('/projects/nowpay', {
            templateUrl: 'views/projects/nowpay.html',
            controller: 'ProjCtrl as ProjCtrl'
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
