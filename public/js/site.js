var site = angular.module("CA", ['ngRoute', 'ngSanitize']);

site.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : "views/Home.html",
            controller : "CAController"
        })
        .when('/Home', {
            templateUrl : "views/Home.html",
            controller : "CAController"
        })
        .when('/Mine', {
            templateUrl : "views/Mine.html",
            controller : "CAController"
        })
        .when('/Friends', {
            templateUrl : "views/Friends.html",
            controller : "CAController"
        })
        .when('/Discover', {
            templateUrl : "views/Discover.html",
            controller : "CAController"
        })
        .when('/Students', {
            templateUrl : "views/Students.html",
            controller : "CAController"
        })
        .when('/Personal-Details', {
            templateUrl : "views/Personal-Details.html",
            controller : "CAController"
        })
        .when('/Settings', {
            templateUrl : "views/Settings.html",
            controller : "CAController"
        })
        .when('/About', {
            templateUrl : "views/About.html",
            controller : "CAController"
        })
        .otherwise( {
            templateUrl : "views/Home.html",
            controller : "CAController"
        });
});
