(function(){
    "use strict";

    angular
        .module("modEditCtrl", [
            "glosApp",
            "modGlosService"
        ])
        .controller("editController", [
            "$window",
            "$log",
            "glossaryService",
            editController
        ]);

    function editController($window, $log, glossaryService){
        var vm = this, //jshint ignore: line
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
            $window.location.href = "/edit-term/" + term;
        };

        //fetch list
        glossaryService.getData().then(onSuccess, onErr);
    }

}());