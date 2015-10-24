app.factory('httpFactory', ['$http', function ($http) {

    var object = {};

    // get
    object.get = function (url) {
        return $http.get(url);
    };

    // post
    object.post = function (url) {
        return $http.post(url);
    };

    return object;
}]);
