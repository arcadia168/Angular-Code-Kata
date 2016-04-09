'use strict';

/**
 * @ngdoc function
 * @name lateroomsKataApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lateroomsKataApp, demonstrates main functionality.
 */
angular.module('lateroomsKataApp')
    .controller('MainCtrl', function ($scope) {

        //define variable to sort ratings by ascending or descending
        $scope.descending = false;

        //add provided json hotel listings to the angular scope
        $scope.hotelListings = [
            {
                Name: "hotelone",
                StarRating: 5,
                Facilities: [
                    "car park",
                    "pool"
                ]
            },
            {
                Name: "hoteltwo",
                StarRating: 3,
                Facilities: [
                    "car park",
                    "gym"
                ]
            },
            {
                Name: "hotelthree",
                StarRating: 3,
                Facilities: []
            }
        ];
        
        $scope.toggleStarRating = function () {
            $scope.descending = !$scope.descending;
        }
    });
