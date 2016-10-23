/**
 * Created by HJH on 2016/10/23.
 */
(function () {
    'use strict';
    var app = angular.module('KOB',['ngRoute']);

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'caption.htm',
            controller: 'captionCtrl'
        }).when('/main', {
            templateUrl: 'main.html',
            controller: 'mainCtrl'
        });
    }]);

    app.controller('captionCtrl',['$scope',function ($scope) {

    }]);



})();
