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
            'SweetAlert', 
            addTermController
        ]);

        function addTermController($log, $window, $http, SweetAlert){
            
            var vm = this; //jshint ignore: line
            vm.data = {};

            vm.processFrm = function(){
                //post data to mongodb
                $http
                    .post('newdefinition/addterm', vm.data)
                    .success(function(response){
                        $log.log(response);
                        SweetAlert.swal({
                            "title": "Job done!",
                            "text": vm.data.term + " hadd been added",
                            "type": "success",
                            "closeOnConfirm": false
                        }, function(){
                            $window.location.href = "/";
                        });
                    });
            };
        }

}());