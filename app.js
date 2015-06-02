
    'use strict';
angular.module('Claimtown', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/home',{
    templateUrl: 'partials/home.html'
  })
  .when('/claims',{
  	templateUrl: 'partials/claims.html'
  })
  .otherwise({redirectTo: '/home'})
  ;

}]);

var arrayClaims = [{body: "Kurzweil claims to know that a machine will pass the Turing test by 2029, and that around 2045, 'the pace of change will be so astonishingly quick that we won't be able to keep up, unless we enhance our own intelligence by merging with the intelligent machines we are creating'."}];

angular.module('Claimtown')
.controller('ClaimsController',['$scope',function($scope){
		
		$scope.arrayClaims = arrayClaims;
		$scope.claim = {};
   		
   		$scope.addClaim = function(claimData) {
        
      	$scope.claim = angular.copy(claimData);
        $scope.arrayClaims.push($scope.claim)
        $scope.claimData = ''
        console.log(arrayClaims[0].body);
    }



}]);


