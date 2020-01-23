var app = angular.module("test-app", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl : "app/home/index.html",
      controller:'homeController'
    })
    .when("/about", {
        templateUrl : "app/about/index.html",
        controller: 'aboutController' 

    })

  });

  app.run(function($rootScope) {
    $rootScope.rootTitle = 'Test app!';
  });


