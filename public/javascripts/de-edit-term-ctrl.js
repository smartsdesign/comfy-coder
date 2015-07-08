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

		function editTermController(
			$window, 
			$log, 
			$http,  
			glossaryService, 
			SweetAlert
		){

			var vm = this; //jshint ignore: line
			vm.data = {};
			var onSuccess = function(response){
			 		vm.data = response[0].definitions[0];
			 	},
			 	onErr = function(error){
			 		$log.log(error);
			 	},
			 	onEditSuccess = function(response){
			 		$log.log(response);
			 	},
			 	onEditErr = function(err){
			 		$log.log(err);
			 	};

			vm.processFrm = function(form){
				
				SweetAlert.swal({
					"title": "Update " + vm.data.term + "?",
					"type": "warning",
					"showCancelButton": true,
					"confirmButtonText": "Yes, update",
					"cancelButtonText": "No, cancel",
					"closeOnConfirm": false
				}, function(isConfirm){
					if(isConfirm && form.$dirty){
						$http
							.post('editdefinition/term', vm.data)
							.success(function(response){
								swal({
									"title": "Job done!",
									"text": response.msg,
									"closeOnConfirm": true
								}, function(){
									$window.location.href = '/definition/' + vm.data.term;
								});
							})
							.error(function(err){
								swal("Oops!", "We have a server error", "error");
							});
					}else{
						swal("Oops!", "Nothing changed", "error");
					}
				});
			};

			//fetch term
			glossaryService.getSingleItem().then(onSuccess, onErr);
		}
}());