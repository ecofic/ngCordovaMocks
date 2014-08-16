describe('ngCordovaMocks', function() {
	beforeEach(function() {
		module('ngCordovaMocks');
	});

	describe('cordovaCamera', function () {
		var rootScope = null;
		var cameraService = null;
		var cameraOptions = {};

		beforeEach(inject(function ($cordovaCamera, $rootScope) {
			cameraService = $cordovaCamera;
			rootScope = $rootScope;
		}));

		it('should get picture', function (done) {
			cameraService.getPicture(cameraOptions)
				.then(
					function() { expect(true).toBe(true); },
					function() { expect(false).toBe(true); }
				)
				.finally(function() { done(); })
			;

			rootScope.$digest();
		});

		it('should throw an error while getting the picture.', function(done) {
			cameraService.throwsError = true;
			cameraService.getPicture(cameraOptions)
				.then(
					function() { expect(true).toBe(false); },
					function() { expect(true).toBe(true); }
				)
				.finally(function() { done(); })
			;

			rootScope.$digest();
		});
	});
})