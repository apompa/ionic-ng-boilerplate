angular.module('boilerplate-app', [
        'ionic',
        'ngCordova',

        'templates-app',
        'templates-common',

        'homeModule'
    ])

    .run(function ($ionicPlatform, $cordovaSplashscreen) {
        $ionicPlatform.ready(function () {
            $cordovaSplashscreen.hide();
        });
    })

    .config(['$urlRouterProvider', '$locationProvider', function ($urlRouterProvider, $locationProvider) {
        //$locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise("/home");
    }])

    .controller('AppController', function ($scope) {

    });


