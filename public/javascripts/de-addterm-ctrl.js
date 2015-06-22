(function(){
    'use strict';

    angular
        .module('modAddTermCtrl', [
            'glosApp'
        ])
        .controller('addTermController', [
            '$log',
            '$window',
            '$http', 
            addTermController
        ]);

        function addTermController($log, $window, $http){
            var vm = this;
            
            vm.data = {};

            vm.processFrm = function(){
                //post data to mongodb
                $http
                    .post('newdefinition/addterm', vm.data)
                    .success(function(response){
                        $log.log(response);
                        $window.alert(vm.data.term + ' - was added successfully!');
                        vm.data = {};
                    });
            };
        }

}());