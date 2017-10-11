site.controller('CAController', ['$scope', '$window', '$compile', '$sce', function($scope, $window, $compile, $sce) {
    $(document).ready(function() {
        $("nav ul li").hover(function() {
            $(this).children('ul').stop(true, false, true).animate({
                height: "toggle",
                // opacity: "toggle"
            }, "500");
        });
    });
}]);
