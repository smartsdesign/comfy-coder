(function(){
	"use strict";

	angular
		.module('modDeletedCtrl', [
			"glosApp",
			"modGlosService"
		])
		.controller('deletedTermController', [
			"$log",
			"$window",
			"glossaryService",
			deletedTermController
		]);

		function deletedTermController($log, $window, glossaryService){
			var vm = this,
				onSuccess = function(response){
					$log.log(response);
					vm.message = response.msg;
				},
				onErr = function(error){
					$log.log(error);
				};

			//delete term
			glossaryService.deleteSingleItem().then(onSuccess, onErr);

		}

}());