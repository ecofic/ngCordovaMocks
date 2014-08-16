describe('ngCordovaMocks', function() {
	beforeEach(function() {
		module('ngCordovaMocks');
	});

	describe('cordovaDeviceMotion', function () {
		var motionService = null;
		var motionServiceOptions = { period: 100 };

		beforeEach(inject(function ($cordovaDeviceMotion) {
			motionService = $cordovaDeviceMotion;
		}));

		it('should get the current acceleration', function () {
			var expectedAcceleration = { x:1, y:1, z:1, timestamp:Date() };
			motionService.currentAcceleration = expectedAcceleration;

			var resultedAcceleration = motionService.getAcceleration();
			expect(resultedAcceleration).toEqual(expectedAcceleration);
		});

		it('should throw an error while getting the motion.', function() {
			motionService.throwsError = true;
			motionService.watchAcceleration(
				function() {
					expect(true).toBe(false);
				},
				function() {
					expect(true).toBe(true);
				},
				motionServiceOptions
			);
		});

		// TODO: Write a test that tracks getting five points over an interval.
	});
})