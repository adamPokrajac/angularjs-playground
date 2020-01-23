app.controller('homeController', ['$scope', '$rootScope', 'dataService', function ($scope, $rootScope, dataService) {
    $scope.title = "Dobrodosli!";
    $scope.users = [];
    $scope.user = {}

    $rootScope.rootTitle = $scope.title;

    $scope.GetUsers = function () {
        dataService.GetUsers().then(function (response) {
            response.data.forEach(e => {
                e.showImage = true;
            });
            $scope.users = response.data;
        });
    }

    $scope.GetUser = function (id) {
        dataService.GetUser(id).then(function (response) {

            $scope.user = response.data;

            $('#myModal').modal('show');


        });
    }



    $scope.ToggleImage = function (user) {
        console.log(user);
        user.showImage = !user.showImage;
    }



    $scope.GetUsers();


}]);