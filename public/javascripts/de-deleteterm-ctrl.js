(function(){
	"use strict";

	angular
		.module("modDeleteTermCtrl", [
			"glosApp",
			"modGlosService"
		])
		.controller("deleteTermController", [
			"glossaryService",
			"$log",
			"$window",
			"SweetAlert",
			deleteTermController
		]);

		function deleteTermController(glossaryService, $log, $window, SweetAlert){
			var vm = this, //jshint ignore: line
				onSuccess = function(data){
					vm.glossaryList = data[0].definitions;
				},
				onErr = function(err){
					vm.err = err;
					$log.log(vm.err);
				};

			vm.deleteItem = function(item){
				SweetAlert.swal({
					"title": "Expunge "  + item + "?",
					"type": "warning",
					"showCancelButton": true,
					"confirmButtonText": "Yes, expunge",
					"cancelButtonText": "No, cancel"
				}, function(isConfirm){
					if(isConfirm){
						$window.location.href = "/deleteterm/" + item;
					}
				});
			};

			//fetch list
			glossaryService.getData().then(onSuccess, onErr);

		}

}());