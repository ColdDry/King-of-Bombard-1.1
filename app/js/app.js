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
            templateUrl: 'main.htm',
            controller: 'mainCtrl'
        });
    }]);

    app.controller('captionCtrl',['$scope',function ($scope) {

    }]);

    app.controller('mainCtrl',['$scope','imgSrc', '$timeout', '$interval',function ($scope, $timeout, $interval, imgSrc) {
        $scope.showShoot = true;
        $scope.showSuccess = false;
        $scope.showFail = false;
        $scope.showTip = false;

    }]);


    app.factory('imgSrc', function () {
        var tanks = {
            tank1: [
                'img/tank1/tank1-0.png',
                'img/tank1/tank1-1.png',
                'img/tank1/tank1-2.png',
                'img/tank1/tank1-3.png',
                'img/tank1/tank1-4.png',
                'img/tank1/tank1-5.png',
                'img/tank1/tank1-6.png',
                'img/tank1/tank1-7.png'
            ],
            tank2: [
                'img/tank2/tank2-0.png',
                'img/tank2/tank2-1.png',
                'img/tank2/tank2-2.png',
                'img/tank2/tank2-3.png',
                'img/tank2/tank2-4.png',
                'img/tank2/tank2-5.png',
                'img/tank2/tank2-6.png',
                'img/tank2/tank2-7.png'
            ],
            tank3: [
                'img/tank3/tank3-0.png',
                'img/tank3/tank3-1.png',
                'img/tank3/tank3-2.png',
                'img/tank3/tank3-3.png',
                'img/tank3/tank3-4.png',
                'img/tank3/tank3-5.png',
                'img/tank3/tank3-6.png',
                'img/tank3/tank3-7.png'
            ],
            tank4: [
                'img/tank4/tank4-0.png',
                'img/tank4/tank4-1.png',
                'img/tank4/tank4-2.png',
                'img/tank4/tank4-3.png',
                'img/tank4/tank4-4.png',
                'img/tank4/tank4-5.png',
                'img/tank4/tank4-6.png',
                'img/tank4/tank4-7.png'
            ]
        };
        var shoots = {
            shoot1: [
                'img/shoot1/shoot1-0.png',
                'img/shoot1/shoot1-1.png',
                'img/shoot1/shoot1-2.png',
                'img/shoot1/shoot1-3.png',
                'img/shoot1/shoot1-4.png',
                'img/shoot1/shoot1-5.png',
                'img/shoot1/shoot1-6.png',
                'img/shoot1/shoot1-7.png'
            ],
            shoot2: [
                'img/shoot2/shoot2-0.png',
                'img/shoot2/shoot2-1.png',
                'img/shoot2/shoot2-2.png',
                'img/shoot2/shoot2-3.png',
                'img/shoot2/shoot2-4.png',
                'img/shoot2/shoot2-5.png',
                'img/shoot2/shoot2-6.png',
                'img/shoot2/shoot2-7.png'
            ],
            shoot3: [
                'img/shoot3/shoot3-0.png',
                'img/shoot3/shoot3-1.png',
                'img/shoot3/shoot3-2.png',
                'img/shoot3/shoot3-3.png',
                'img/shoot3/shoot3-4.png',
                'img/shoot3/shoot3-5.png',
                'img/shoot3/shoot3-6.png',
                'img/shoot3/shoot3-7.png'
            ],
            shoot4: [
                'img/shoot4/shoot4-0.png',
                'img/shoot4/shoot4-1.png',
                'img/shoot4/shoot4-2.png',
                'img/shoot4/shoot4-3.png',
                'img/shoot4/shoot4-4.png',
                'img/shoot4/shoot4-5.png',
                'img/shoot4/shoot4-6.png',
                'img/shoot4/shoot4-7.png'
            ]
        };
        return {
            getTankImgs: function (num) {
                if (num < 4) {
                    return tanks.tank1;
                } else if (num < 8) {
                    return tanks.tank2;
                } else if (num < 12) {
                    return tanks.tank3;
                } else {
                    return tanks.tank4;
                }
            },
            getShootImgs: function (num) {
                if (num < 4) {
                    return shoots.shoot1;
                } else if (num < 8) {
                    return shoots.shoot2;
                } else if (num < 12) {
                    return shoots.shoot3;
                } else {
                    return shoots.shoot4;
                }
            },
            getLineImgs: function (ques, num) {
                if (num < 16) {
                    switch (ques) {
                        case 1:
                            return 'img/001_1' + num + '.png';
                            break;
                        case 2:
                            return 'img/002_1' + num + '.png';
                            break;
                        case 3:
                            return 'img/003_1' + num + '.png';
                            break;
                        case 4:
                            return 'img/004_1' + num + '.png';
                            break;
                        case 5:
                            return 'img/005_1' + num + '.png';
                            break;
                    }
                } else {
                    return 'img/001.png';
                }
            }
        }
    });

})();
