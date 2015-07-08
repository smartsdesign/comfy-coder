(function(){
    "use strict";

    angular
        .module("modGlosRoutes", [
            "glosApp",
            "ngRoute"
        ])
        .config([
            "$routeProvider",
            "$locationProvider",
            route
        ]);

    function route($routeProvider, $locationProvider){
        $routeProvider
            .when("/", {
                "templateUrl": "ng-views/index.html",
                "controller": "glosMainController",
                "controllerAs": "main"
            })
            .when("/definition/:term", {
                "templateUrl": "ng-views/definitions.html",
                "controller": "definitionsController",
                "controllerAs": "defs"
            })
            .when("/add-term", {
                "templateUrl": "ng-views/add-term.html",
                "controller": "addTermController",
                "controllerAs": "addterm"
            })
            .when("/delete", {
                "templateUrl": "ng-views/delete-list.html",
                "controller": "deleteTermController",
                "controllerAs": "deleteterm"
            })
            .when("/deleteterm/:term", {
                "templateUrl": "ng-views/item-deleted.html",
                "controller": "deletedTermController",
                "controllerAs": "isdeleted"
            })
            .when("/edit", {
                "templateUrl": "ng-views/edit-list.html",
                "controller": "editController",
                "controllerAs": "edit"
            })
            .when("/edit-term/:term", {
                "templateUrl": "ng-views/edit-term.html",
                "controller": "editTermController",
                "controllerAs": "edit"
            })
            .when("/cpanel", {
                "templateUrl": "ng-views/cpanel.html"
            })
            .otherwise({
                "redirectTo": "/"
            });

        $locationProvider.html5Mode({
            enabled: true
        });
    }

}());