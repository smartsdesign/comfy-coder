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
			"SweetAlert",
			editTermController
		]);

		function editTermController($window, $log, $http, glossaryService, SweetAlert){

			var vm = this; //jshint ignore: line
			vm.data = {};
			var onSuccess = function(response){
			 		vm.data = response[0].definitions[0];
			 	},
			 	onErr = function(error){
			 		$log.log(error);
			 	};

			vm.processFrm = function(){
				
				SweetAlert.swal({
					"title": "Are you sure?",
					"type": "warning",
					"showCancelButton": true,
					"confirmButtonText": "Yes, update",
					"cancelButtonText": "No, cancel"
				}, function(isConfirm){
					if(isConfirm){
						$log.log(vm.data);
					}else{
						SweetAlert.swal("Cancelled");
					}
				});
			};

			//fetch term
			glossaryService.getSingleItem().then(onSuccess, onErr);
		}
}());