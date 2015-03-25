describe('ngCordovaMocks', function() {
    beforeEach(function() {
        module('ngCordovaMocks');
    });

    describe('cordovaActionSheet', function () {
        var $cordovaActionSheet = null;
        var $rootScope = null;

        beforeEach(inject(function (_$cordovaActionSheet_, _$rootScope_) {
            $cordovaActionSheet = _$cordovaActionSheet_;
            $rootScope = _$rootScope_;
        }));

        it('should return a promise with the index of clicked button', function(done) {
            // url
            var options = {};

            $cordovaActionSheet.show(options)
            .then(
                function() { expect(true).toBe(true); },
                function() { expect(false).toBe(true); }
            )
            .finally(function() { done(); });

            $rootScope.$digest();
        });

    });
})