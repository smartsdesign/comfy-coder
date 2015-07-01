(function(){
    'use strict';

    angular
        .module('glosApp', [
            'modGlosRoutes',
            'modGlosMainCtrl',
            'modGlosDefsCtrl',
            'modAddTermCtrl',
            'modDeleteTermCtrl',
            'modDeletedCtrl',
            'modEditCtrl'
        ]);

}());