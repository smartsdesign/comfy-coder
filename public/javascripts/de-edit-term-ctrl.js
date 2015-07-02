(function(){
	"use strict";

	angular
		.module("modEditTermCtrl", [
			"glosApp",
			"modGlosService"
		])
		.controller("editTermController", [
			"$window",
			"$log",
			"$http",
			"glossaryService",
			editTermController
		]);

		function editTermController($window, $log, $http, glossaryService){

			var vm = this; //jshint ignore: line
			vm.data = {};
			var onSuccess = function(response){
			 		vm.data = response[0].definitions[0];
			 	},
			 	onErr = function(error){
			 		$log.log(error);
			 	};

			vm.processFrm = function(){
				if(confirm("Sure? ")){
					$log.log(vm.data);

					// post data to mongoDB
					// $window.location.href = "/definition/" + vm.data.term;
				}
			};

			//fetch term
			glossaryService.getSingleItem().then(onSuccess, onErr);
		}
}());