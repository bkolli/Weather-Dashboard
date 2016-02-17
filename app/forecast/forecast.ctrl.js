(function () {
    angular.module("app.forecast")
        .controller("Forecast", function ($scope, $routeParams, weatherSvc) {
            $scope.forecast = null;
            $scope.getTime = getTime;

            if ($routeParams.id !== undefined) {
                getForecast($routeParams.id);
            }

            function getForecast(id) {
                weatherSvc.getForecast(id)
                    .then(
                        function (response) {
                            $scope.forecast = response;
                            console.log($scope.forecast);
                        },
                        function (err) {
                            console.log("Error loading forecast data: ", err);
                        }
                    )
            }

            function getTime(dt) {
                return new Date(dt * 1000);
            }
        });
})();