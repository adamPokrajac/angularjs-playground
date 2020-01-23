app.directive('myModal', function () {
    return {
        restrict: "E",
        transclude: true,
        templateUrl: "app/shared/directive/modal.html",
        scope: {
            title: "@", //one way / text binding
            footer: "=", //two way / direct model binding
            someOther:"&" //behavior / method binding
        },
        link: function ($scope, element, attrs) {
        }
    };
});