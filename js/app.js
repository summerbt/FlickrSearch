angular.module('flickrSearchApp', [])
    .controller('flickrSearchControl', ['$scope', '$http', function ($scope, $http) {
        $scope.showResults = false;
        $scope.searchTerm = "cumquat";
        var flickr_api_secret = "c8f600b39fb3536b";
        var flickr_api_key = "15518a84fb6182ff2197645cb49d676e";
        var flickr_endpoint = "https://api.flickr.com/services/rest";

        $scope.searchFlickr = function (searchTerm) {
            console.log("searchFlickr entered");
            $scope.params = {
                method: 'flickr.photos.search',
                api_key: flickr_api_key,
                tags: searchTerm,
                format: 'json',
                nojsoncallback: 1
            };
            $scope.showResults = true;
            $http({
                method: 'GET',
                url: flickr_endpoint,
                params: $scope.params,
            }).then(function (response) {
                $scope.photos = response.data.photos.photo;
            });
        };

}]);
