!function(){"use strict";angular.module("dashboard",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ui.router","ngMaterial","toastr","ds.clock"])}(),function(){"use strict";function e(e,t){return{url:"https://api.forecast.io/forecast",apiKey:"4b087fe12683c3b471c85c74499920d5",lat:"37.8267",lng:"-122.423",getForecast:function(){var i=t.defer(),a=e.get(this.url+"/"+this.apiKey+"/"+this.lat+","+this.lng);return a.then(function(e){i.resolve(e)}),i.promise}}}e.$inject=["$http","$q"],angular.module("dashboard").service("forecastio",e)}(),function(){"use strict";function e(e){function t(){}var i={restrict:"E",templateUrl:"app/components/bneWeather/bneWeather.html",controller:t,controllerAs:"view",bindToController:!0};return i}e.$inject=["forecastio"],angular.module("dashboard").directive("bneWeather",e)}(),function(){"use strict";function e(e){var t=this;t.slide=1,e(function(){4==t.slide?t.slide=0:t.slide++},2e4),e(function(){var e=document.getElementById("forecast_embed").src;document.getElementById("forecast_embed").src="",document.getElementById("forecast_embed").src=e},6e5)}e.$inject=["$interval"],angular.module("dashboard").controller("MainController",e)}(),function(){"use strict";function e(e){e.debug("runBlock end")}e.$inject=["$log"],angular.module("dashboard").run(e)}(),function(){"use strict";function e(e,t){e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),t.otherwise("/")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("dashboard").config(e)}(),function(){"use strict";angular.module("dashboard").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function e(e){e.debugEnabled(!0)}e.$inject=["$logProvider"],angular.module("dashboard").config(e)}(),angular.module("dashboard").run(["$templateCache",function(e){e.put("app/main/main.html",'<div style="overflow: hidden" layout="vertical" layout-fill=""><div flex="" class="map-frame"><iframe type="text/html" frameborder="0" height="800" width="100%" src="http://api.bne.com/map/"></iframe></div></div><div layout="vertical" layout-fill="" layout-padding=""><div flex="20" layout="" layout-align="center center" layout-padding=""><ds-widget-clock theme="dark" digital-format="\'h:mm\'"></ds-widget-clock></div><div flex="20" layout="" layout-align="center center" layout-padding=""><div flex="20"><i class="fa fa-cutlery fa-6x" style="font-size: 80px"></i></div><div flex="80"><p>Hamburger & Fries</p><p>Salad Bar</p><p>Many Other Things</p></div></div><div flex="60"><iframe id="forecast_embed" type="text/html" frameborder="0" height="245" width="100%" src="http://forecast.io/embed/#lat=35.9820&lon=-77.8191&name=Rocky Mount"></iframe></div></div><div class="news" ng-if="main.slide > 0"><div class="slider" ng-if="(main.slide == 1)" layout="" layout-align="center center"><h1>Welcome to Boddie Noell</h1></div><div class="slider" ng-if="main.slide == 2" layout="" layout-align="center start"><img width="400px" src="http://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Happy-Birthday-PNG/Hanging_Colorful_Happy_Birthday_PNG_Clipart_Picture.png?m=1438293941"></div><div class="slider" ng-if="main.slide == 3" layout="" layout-align="center center"><h1>Slide 2</h1></div><div class="slider" ng-if="main.slide == 4" layout="" layout-align="center center"><h1>Slide 3</h1></div></div>'),e.put("app/components/bneWeather/bneWeather.html","")}]);
//# sourceMappingURL=../maps/scripts/app-290f74eb6f.js.map
