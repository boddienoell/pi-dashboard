(function() {
    'use strict';

    angular
        .module('dashboard')
        .directive('bneWeather', bneWeather);

    /** @ngInject */
    function bneWeather(forecastio) {

        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/bneWeather/bneWeather.html',
            controller: bneWeatherController,
            controllerAs: 'view',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function bneWeatherController() {
            var vm = this;

/*
            var weather = forecastio.getForecast();
                weather.then(function(data){
                    console.log(data);
                });
*/
        }
    }

})();

