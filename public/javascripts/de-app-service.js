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
                .get('/glossary/definition/' + $routeParams.term)
                .then(function(response){
                    return response.data;
                });
        };

        //delete single item
        var deleteSingleItem = function(){
            return $http
                .delete('/deletedefinition/deleteterm/' + $routeParams.term)
                .then(function(response){
                    return response.data;
                });
        };

        //return data obj
        return {
            'getData': getData,
            'getSingleItem': getSingleItem,
            'deleteSingleItem': deleteSingleItem
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