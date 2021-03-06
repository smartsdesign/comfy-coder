(function(){
	'use strict';

	angular
		.module('modGlosMainCtrl', [
			'glosApp',
			'modGlosService'
		])
		.controller('glosMainController', [
			'$log',
			'glossaryService', 
			glosMainController
		]);

	function glosMainController($log, glossaryService){
		
        var vm = this; //jshint ignore: line

        var onSuccess = function(data){
                vm.glossaryList = data[0].definitions;
                $log.log(vm.glossaryList);
            },
            onError = function(err){
                vm.err = err;
                $log.log(vm.err);
            };

        //fetch data
        glossaryService.getData().then(onSuccess, onError);
	}

}());