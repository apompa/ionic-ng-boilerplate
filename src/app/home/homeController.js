angular.module('homeModule', []);

angular.module('homeModule').config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'home/home.tpl.html',
        controller: 'homeController'
    });
}]);

angular.module('homeModule').controller('homeController', function ($scope, $ionicSideMenuDelegate) {

    $scope.toggleSideBar = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };

});

