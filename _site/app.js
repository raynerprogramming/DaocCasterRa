var app = angular.module('app',['ui.router','slick'])
//CONTROLLERS
.controller('HomeController',function($scope){
	$scope.data='Home';
	$scope.imgsrc1 = "images/background.jpg";

	$('#sidenav-overlay').trigger('click');
	$scope.init = function(){
		$(function () {
			$('.button-collapse').sideNav();
			$('.parallax').parallax();
		});
	}
	angular.element(document).ready(function () {
		$scope.init();
	});
})
//STATE CONFIG
app.config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider){
	$urlRouterProvider
	.when("","/");

	$stateProvider
	.state('home', {
		url:"/home",
		templateUrl: "templates/home.html",
		controller: 'HomeController'
	}) 
}]);