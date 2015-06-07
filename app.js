
    'use strict';
angular.module('Claimtown', ['ngRoute','ngDialog'])
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
.controller('ClaimsController',['$scope','ngDialog',function($scope, ngDialog){
		
		$scope.arrayClaims = arrayClaims;
		$scope.claimBody = {};

   		
   		$scope.addClaim = function(claimData) {
        
      					$scope.claimBody = angular.copy(claimData);
        				$scope.arrayClaims.push($scope.claimBody);
        				$scope.claimData = '';

        				ngDialog.open({
							template: 'partials/popup.html',
							controller: 'FirstDialogCtrl',
							className: 'ngdialog-theme-default'

						});


		

		}		

			


    



}]);

angular.module('Claimtown')
.controller('FirstDialogCtrl',['$scope', 'ngDialog', function($scope, ngDialog){
$scope.addCat = function(claimData){

						//$scope.claimCat = claimData;
						$scope.arrayClaims[arrayClaims.length-1].category = claimData.category;
						$scope.arrayClaims[arrayClaims.length-1].location = claimData.location;
			        	//$scope.arrayClaims.push($scope.claim)
			        	$scope.claimData = ''
			        	console.log('test');

			        	ngDialog.closeAll();
			        	ngDialog.open({
			        		template: 'partials/popup2.html',
			        		className: 'ngdialog-theme-default'
			        	})
			}


}]);
