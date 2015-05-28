(function(){
    'use strict';

    angular
        .module('modGlosDefsCtrl', [
            'glosApp',
            'modGlosService'
        ])
        .controller('definitionsController', [
            '$log', 
            'glossaryService', 
            definitionsController
        ]);


    function definitionsController($log, glossaryService){

        var onSuccess = function(data){
                vm.wordDefinition = data;
                $log.log(vm.wordDefinition);
            },

            onErr = function(err){
                vm.err = err;
                $log.log(vm.err);
            };

        //fetch data
        glossaryService.getSingleItem().then(onSuccess, onErr);
    }

}());