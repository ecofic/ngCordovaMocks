describe('ngCordovaMocks', function () {
    beforeEach(function() {
        module('ngCordovaMocks');
    });

    describe('cordovaNativeAudio', function () {
        var $cordovaNativeAudio = null;

        beforeEach(inject(function (_$cordovaNativeAudio_) {
            $cordovaNativeAudio = _$cordovaNativeAudio_;
        }));

        it('should call callback after play', function () {
            var callbackCalled = false;

            beforeEach(function () {
                $cordovaNativeAudio.play('dummy file', function () {
                    callbackCalled = true;
                });
            });

            expect(callbackCalled).toBe(true);
        })
    });
});