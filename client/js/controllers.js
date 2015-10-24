app.controller('FoodController', function ($scope, $http, httpFactory, $timeout) {

    $scope.success = false;
    $scope.food = {};
    $scope.foods = [];


    getFoods = function (url) {
        httpFactory.get(url)
            .then(function (response) {
                $scope.foods = response.data;
            });
    };
    getFoods('/api/foods');

    function messageTimeout() {
        $scope.success = false;
    }

    $scope.postFood = function () {
        var payload = $scope.food;
        console.log(payload)
        httpFactory.post('/api/foods', payload)
            .then(function (response) {
                console.log(response);
                // $scope.foods.push(response.data);
                $scope.food = {};
                $scope.success = true;
                $scope.message = "Wah-hoo, you added a food";
                $timeout(messageTimeout, 5000);
            });

    };

});
