site.controller('CAController', ['$scope', '$window', '$compile', '$sce', function($scope, $window, $compile, $sce) {
	$scope.isActive = (href) => { 
		var url = location.hash;
		url = url.substr(0,2) + url.substring(3,url.length);
        return href === url;
    };
}]);
