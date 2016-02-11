(function() {
    'use strict';

    angular.module('dashboard')
        .service('forecastio', forecastio );

    /** @ngInject */
    function forecastio($http, $q){


         return{

            url: 'https://api.forecast.io/forecast',
            apiKey:'4b087fe12683c3b471c85c74499920d5',
            lat:'37.8267',
            lng:'-122.423',
             getForecast:         function (){

                 var promise = $q.defer();

                 var call = $http.get(this.url + '/' + this.apiKey + '/' + this.lat + ',' + this.lng);
                 call.then(function(data){
                     promise.resolve(data);
                 });

                 return promise.promise;

             }


         };

    }

})();
