describe('Service: dashboard.forecastio', function () {

    // load the service's module
    beforeEach(module('dashboard'));

    // instantiate service
    var service;

    //update the injection
    beforeEach(inject(function (_forecastio_) {
        service = _forecastio_;
    }));

    /**
     * @description
     * Sample test case to check if the service is injected properly
     * */
    it('should be injected and defined', function () {
        expect(service).toBeDefined();
    });
});
