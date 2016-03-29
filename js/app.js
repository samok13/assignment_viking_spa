var store = angular.module('store', ['ui.router']);

store.config(function($stateProvider, $urlRouterProvider){

   $urlRouterProvider.otherwise("");

   $stateProvider

    .state('landing', {
      url: '',
      templateUrl: 'js/templates/landing.html'
    })

    .state('landing.products',{
      url: '/products',
      templateUrl: 'js/templates/products/products.html',
      controller: 'productCtrl'
    })

   .state('landing.products.index',{
      url: '/index',
      templateUrl: 'js/templates/products/index.html',
      controller: 'productCtrl'
    })

   .state('landing.products.show',{
    url: '/show/:id/',
    templateUrl: 'js/templates/products/show.html',
    controller: function( $scope, $stateParams, cartService ){
        $scope.currentProduct = $scope.productList[$stateParams.id-1];
        $scope.quantity = "";
        $scope.addItem = function(product, quantity) {
          cartService.addItem(product, quantity);
          console.log(cartService.listAll());
          $scope.quantity = "";
        };
      },
   })

   .state('landing.cart', {
    url:'/cart',
    templateUrl: 'js/templates/cart/cart.html',
    controller: 'productCtrl'
   })

});

// ADDING ERROR HANDLING
myApp.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});
