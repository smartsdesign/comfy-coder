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
			"glossaryService",
			editTermController
		]);

		function editTermController($window, $log, glossaryService){

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
					$window.location.href = "/definition/" + vm.data.term;
				}
			};

			//fetch term
			glossaryService.getSingleItem().then(onSuccess, onErr);
		}
}());