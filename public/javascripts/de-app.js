(function(){
    'use strict';

    angular
        .module('glosApp', [
            'oitozero.ngSweetAlert',
            'modGlosRoutes',
            'modGlosMainCtrl',
            'modGlosDefsCtrl',
            'modAddTermCtrl',
            'modDeleteTermCtrl',
            'modDeletedCtrl',
            'modEditCtrl',
            'modEditTermCtrl'
        ]);

}());