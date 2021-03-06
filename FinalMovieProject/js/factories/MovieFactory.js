﻿MovieApp.factory("MovieFactory", function ($http) {
    return {
        requestMovieIndex: function (callback) {
            var url = "http://localhost:63745/Movies/getMovies";

            $http({ method: 'GET', url: url, headers: { 'Content-Type': 'application/json' } })
                .success(function (data, status, headers, config) {
                    data = angular.fromJson(data);
                    callback(data);
                }).error(function (data, status, headers, config) { });
        }
    };
});


MovieApp.factory("DetailsFactory", function ($http) {
    return {
        requestDetailsIndex: function (callback, ID) {
            var url = "http://localhost:63745/Movies/GetDetails/" + ID;
            console.log(ID);
            $http({ method: 'GET', url: url, headers: { 'Content-Type': 'application/json' } })
                .success(function (data, status, headers, config) {
                    data = angular.fromJson(data);
                    callback(data);
                }).error(function (data, status, headers, config) { });
        }
    };
});

MovieApp.factory("EditFactory", function ($http) {
    return {
        requestEditIndex: function (callback, ID) {
            var url = "http://localhost:63745/Movies/GetEdit/" + ID;

            $http({ method: 'GET', url: url, headers: { 'Content-Type': 'application/json' } })
                .success(function (data, status, headers, config) {
                    data = angular.fromJson(data);
                    callback(data);
                }).error(function (data, status, headers, config) { });
        }
    };
});

MovieApp.factory('CreateFactory', function ($http) {
    return {
        postToCreateController: function (movie) {
            var url = "http://localhost:63745/Movies/PostCreate";

            $http({ method: 'POST', url: url, data: movie, headers: { 'Content-Type': 'application/json' } })
                .success(function (data, status, headers, config) {
                    window.location.href = "http://localhost:63745/Movies/Index";
                }).error(function (data, status, headers, config) { });

        }
    };
});

MovieApp.factory('EditPostFactory', function ($http) {
    return {
        postToPostEditController: function (editedMovie) {
            var url = "http://localhost:63745/Movies/PostEdit";
            console.log(editedMovie);
            $http({ method: 'POST', url: url, data: editedMovie, headers: { 'Content-Type': 'application/json' } })
                .success(function (data, status, headers, config) {
                 window.location.href = "http://localhost:63745/Movies/Index";
                }).error(function (data, status, headers, config) { });

        }
    };
});

MovieApp.factory("GetDeleteFactory", function ($http) {
    return {
        requestDeleteIndex: function (callback, ID) {
            var url = "http://localhost:63745/Movies/GetDelete/" + ID;
            
            $http({ method: 'GET', url: url, headers: { 'Content-Type': 'application/json' } })
                .success(function (data, status, headers, config) {
                    data = angular.fromJson(data);
                    callback(data);
                }).error(function (data, status, headers, config) { });
        }
    };
});

MovieApp.factory('DeletePostFactory', function ($http) {
    return {
        postToDeleteController: function (deletedMovie) {
            var url = "http://localhost:63745/Movies/PostDelete";
            console.log(deletedMovie);
            $http({ method: 'POST', url: url, data: deletedMovie, headers: { 'Content-Type': 'application/json' } })
                .success(function (data, status, headers, config) {
                    window.location.href = "http://localhost:63745/Movies/Index";
                }).error(function (data, status, headers, config) { });

        }
    };
});