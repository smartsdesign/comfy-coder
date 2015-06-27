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

			vm.deleteItem = function(item){
				if(confirm('Are you sure you want to expunge ' + item)){ /*TODO - move confirm to a directive as is a UI element*/
					$window.location.href = "/deleteterm/" + item;
				}
			};

			//fetch list
			glossaryService.getData().then(onSuccess, onErr);

		}

}());