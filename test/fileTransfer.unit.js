describe('ngCordovaMocks', function() {
    beforeEach(function() {
        module('ngCordovaMocks');
    });

    describe('cordovaFileTransfer', function () {
        var $cordovaFileTransfer = null;
        var $rootScope = null;

        beforeEach(inject(function (_$cordovaFileTransfer_, _$rootScope_) {
            $cordovaFileTransfer = _$cordovaFileTransfer_;
            $rootScope = _$rootScope_;
        }));

        it('should successfully download a file', function(done) {
            // url
            $cordovaFileTransfer.download(
                'http://api.server.com/some/directory/image.jpg',
                './image.jpg',
                {},
                true
            )
            .then(
                function() { expect(true).toBe(true); },
                function() { expect(false).toBe(true); }
            )
            .finally(function() { done(); });

            $rootScope.$digest();
        });

        it('should successfully upload a file', function(done) {
            // url
            $cordovaFileTransfer.upload(
                'api.server.com/some/directory',
                '/some/directory/file.txt',
                {},
                true
            )
            .then(
                function() { expect(true).toBe(true); },
                function() { expect(false).toBe(true); }
            )
            .finally(function() { done(); });

            $rootScope.$digest();
        });

    });

    // TODO: ping the fileSystem property to detect if
    // - check whether directory exists or not.
    // - overwrite works on the createDir function

})