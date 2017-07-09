var app = angular.module('app',['ui.router'])
//CONTROLLERS
.controller('HomeController',function($scope,$http){
	$scope.data='Home';
	$scope.imgsrc1 = "images/footer_lodyas.png";

	$http.get("data/radmgcost.xml",
                    {
                        transformResponse: function (cnv) {
                            var x2js = new X2JS();
                            var aftCnv = x2js.xml_str2json(cnv);
                            return aftCnv;
                        }
                    })
            .then(function (success) {
                $scope.data=success.data["data-set"].record;
            },function (error){
            	console.log(error)
            });

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

	$scope.calcBestRA = function(){
		if(!($scope.numRA>0))
			return;
		available=_($scope.data).filter(function(data){
		 return data.cost <= $scope.numRA}
		 );
		$scope.best=_(available).max(function (data){ return +data.dmg});
	}

})
//STATE CONFIG
app.config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider){
	$urlRouterProvider
	.when("","/home");

	$stateProvider
	.state('home', {
		url:"/home",
		templateUrl: "templates/home.html",
		controller: 'HomeController'
	}) 
}]);