(function(){
    'use strict';

    angular
        .module('modAddTermCtrl', [
            'glosApp',
            'modGlosService'
        ])
        .controller('addTermController', [
            '$log',
            'glossaryService', 
            addTermController
        ]);

        function addTermController($log, glossaryService){
            var vm = this;
        }

}());