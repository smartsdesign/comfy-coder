(function(){
    'use strict';

    var glossaryService = function($http, $routeParams){
        
        //get data
        var getData = function(){
            return $http
                .get('/glossary/list')
                .then(function(response){
                    return response.data;
                });
        };

        //get single item
        var getSingleItem = function(){
            return $http 
                .get('/glossary/definition/' + $routeParams.itemId)
                .then(function(response){
                    return response.data;
                });
        };

        //return data obj
        return {
            'getData': getData,
            'getSingleItem': getSingleItem
        };
    };

    //setup service
    angular
        .module('modGlosService', [])
        .factory('glossaryService', [
            '$http',
            '$routeParams', 
            glossaryService
        ]);


}());