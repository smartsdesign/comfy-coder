(function(){
    'use strict';

    angular
        .module('modGlosRoutes', [
            'glosApp',
            'ngRoute'
        ])
        .config([
            '$routeProvider',
            '$locationProvider',
            route
        ]);

    function route($routeProvider, $locationProvider){
        $routeProvider
            .when('/', {
                "templateUrl": "ng-views/index.html",
                "controller": "glosMainController",
                "controllerAs": "main"
            })
            .when('/definitions/:id', {
                "templateUrl": "ng-views/definitions.html",
                "controller": "definitionsController",
                "controllerAs": "defs"
            })
            .otherwise({
                "redirectTo": "/"
            });

        $locationProvider.html5Mode({
            enabled: true
        });
    }

}());