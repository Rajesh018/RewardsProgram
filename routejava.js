var app = angular.module('myapp',['ngRoute']);

app.config(function($routeProvider){
  
  $routeProvider.when('/home',{
      template:'This is my Homepage'
  })
  
  .when('/profile',{
    templateUrl:'profile.html'
    
  })
  
   .when('/users',{
    templateUrl:'users.html',
	controller:'userController'
    
  })
  
  .when('/users/:id',{
    templateUrl:'user_details.html',
	controller:'userdetailsController'
});

userProvider.setIncludePrefix(true);
});


app.provider('dataservice',function(){
	this.$get = function(){
		return {
			a_users : [{"name":"Ash","email":"ash@gmail.com","loc":"piscatway"},
	{"name":"Ashw","email":"ashw@gmail.com","loc":"piscaway"},
	{"name":"Ashwi","email":"ashwi@gmail.com","loc":"piatway"}
			]
		};
}
});


app.factory('dataFactory',function(){
	
		return {
			a_users : [{"name":"Ash","email":"ash@gmail.com","loc":"piscatway"},
	{"name":"Ashw","email":"ashw@gmail.com","loc":"piscaway"},
	{"name":"Ashwi","email":"ashwi@gmail.com","loc":"piatway"}
			]
		};
});

app.service('dataservice2',function(){
	this.firstname = 'Ash';
	this.lastname = 'kumar';
	this.displayDetails = function(){
		return this.firstname+' '+this.lastname;
	
		};
});

app.service('dataservice3',childFn);
function parentfn(){
	this.company = 'Marlabs';
}
	
	function childFn(){
	  parentfn.call(this);
		this.firstname = 'arun';
		this.lastname = 'go';
		this.displayDetails = function(){
			return this.firstname+' '+this.lastname;
		};
	}
	
	childFn.prototype = object.create(parentFn.prototype);
	childFn.prototype.constructor = childFn;

app.provider('user',function(){
	this.$get=function(){	
	
var namePrefix="mr.",
name = "ashwin",
location = "india";

if(includePrefix){	
	name=namePrefix+name;	
}
return{	
	"name":name,
	"loc":location,
	"fn":function()
	{
		return "name="+this.name+", location ="+this.loc
	}}}
var includePrefix = false;
this.setIncludePrefix  = function(value){
	includePrefix = value;
}
});


app.factory('qservice',function($timeout,$q){
	return {
	'firstname':'Ash',
	'lastname : 'kumar',
    'display_fn' :function(){
		var firstname = this.firstname,
		lastname = this.lastname;
		$timeout(function() {
			qobject.resolve(firstname+' '+lastname);
	}, 2000);
	return qibject.promise;
	}
		};
});


app.controller('userdetailsController',['$scope','$routeparams','$rootscope','dataservice','dataFactory','$timeout','$http','$sce',function($scope,$routeparams,$rootscope,$dataservice,$dataFactory,$timeout,$http,$sce){
	
	$scope.user_info = $rootscope.a_user[$routeparams.id];	
	
$scope.service_resp = qservice.display_fn();

qservice.display_fn().then(function(sucess){
	
	$scope.service_resp = sucess.data;
},function(){
	
	$scope.service_resp = 'Error Happened';
});

$scope.$watch('username',function(newVal, oldVal){
	
	$scope.newValue = newVal;
	$scope.oldValue = oldVal;	
	
});

$scope.city = 'piscataway';
$scope.updatevalue = function(){
	$scope.city = 'Edison';
		
};

document.getElementById('btn').addEventListener('click',function(){
	
		setTimeout(function(){
			$scope.city = 'piscataway';
			$scope.$digest();
	},2000);
});
	


$timeout(function(){
  alert('Hello Marlabs');
},2000);


$http({
  
  method:'GET',
  url:'profile.html'
    }).then(function(sucess){
      $scope.http_response = $sce.trustAsHtml(sucess.data);
    }, function(err){
      console.log(err)
    });
   }]);


app.controller('userController',['$scope','rootscope',function($scope,$rootscope) {
	
	$scope.a_users= dataservice.a_users;
	
	$rootscope.a_users = $scope.a_users;
	
}]);

