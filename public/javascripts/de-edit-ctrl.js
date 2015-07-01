(function(){
    "use strict";

    angular
        .module('modEditCtrl', [
            "glosApp",
            "modGlosService"
        ])
        .controller('editController', [
            "$log",
            "glossaryService",
            editController
        ]);

    function editController($log, glossaryService){
        var vm = this,
            onSuccess = function(data){
                vm.glossaryList = data[0].definitions;
            },
            onErr = function(error){
                vm.error = error;
                $log.log(vm.error);
            };

        //update selected term
        vm.updateTerm = function(term){
            $log.log(term);
        };

        //fetch list
        glossaryService.getData().then(onSuccess, onErr);
    }

}());