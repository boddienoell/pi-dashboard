(function() {
  'use strict';

  angular
    .module('dashboard')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($interval) {

    var vm = this;

    $interval(function(){
      document.getElementById('forecast_embed').contentWindow.location.reload();
    }, 3600);
  }
})();
