(function(){
	"use strict";

	angular
		.module("modDeleteTermCtrl", [
			"glosApp",
			"modGlosService"
		])
		.controller("deleteTermController", [
			"$http",
			"glossaryService",
			"$log",
			"$window",
			deleteTermController
		]);

		function deleteTermController($http, glossaryService, $log, $window){
			var vm = this,
				onSuccess = function(data){
					vm.glossaryList = data[0].definitions;
				},
				onErr = function(err){
					vm.err = err;
					$log.log(err);
				};

			//fetch data
			glossaryService.getData().then(onSuccess, onErr);

		}

}());