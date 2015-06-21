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
            .when('/definition/:term', {
                "templateUrl": "ng-views/definitions.html",
                "controller": "definitionsController",
                "controllerAs": "defs"
            })
            .when('/add-term', {
                "templateUrl": "ng-views/add-term.html",
                "controller": "addTermController",
                "controllerAs": "addterm"
            })
            .otherwise({
                "redirectTo": "/"
            });

        $locationProvider.html5Mode({
            enabled: true
        });
    }

}());