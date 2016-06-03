/*
Test VINS
2013 Acura MDX: 2HNYD2H42DH504765
2015 mercedes-benz glk 250: WDCGG0EB8FG358249
2002 Audi A4: WAULT68E12A155612
*/

var pricepoint = angular.module('pricepoint', []);

pricepoint.controller('PricepointController', function($scope, $http) {

  $scope.searchByVIN = function() {

    var url = "https://service.blackbookcloud.com/UsedCarWS/UsedCarWS/UsedVehicle";
    url += "/" + encodeURIComponent("VIN");
    url += "/" + encodeURIComponent($scope.vin);
    url += "?customerid=" + encodeURIComponent("kluck2");
    url += "&callback=JSON_CALLBACK";

    $http.jsonp(url)
      .then(function(response) {
        $scope.vehicleResultsArray = response.data.used_vehicles.used_vehicle_list;
      });

  }

});
