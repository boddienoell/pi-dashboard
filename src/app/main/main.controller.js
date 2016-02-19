(function() {
  'use strict';

  angular
    .module('dashboard')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($interval) {

    var vm = this;
    vm.slide = 1;

    $interval(function(){
      if ( vm.slide == 4 ){
        vm.slide = 0;
      } else {
        vm.slide++;
      }

    },20000);

    $interval(function(){
      var url = document.getElementById('forecast_embed').src;
      alert('asdf');
      document.getElementById('forecast_embed').src = '';
      document.getElementById('forecast_embed').src = url;

    }, 600000);
  }
})();
