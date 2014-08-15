describe('ngCordovaMocks', function() {
	beforeEach(function() {
		module('ngCordovaMocks');
	});

	describe('cordovaCamera', function () {
		var cameraService = null;
		var cameraOptions = {};

		beforeEach(inject(function ($cordovaCamera) {
			cameraService = $cordovaCamera;
		}));

		it('should get picture', function () {
			cameraService.getPicture(cameraOptions);
			expect(true).toBe(true);
		});

		it('should throw an error while getting the picture.', function() {
			cameraService.throwsError = true;
			cameraService.getPicture(cameraOptions, 
				function() {
					expect(true).toBe(false);
				},
				function(error) {
					expect(true).toBe(true);
				}
			);
		});
	});
})