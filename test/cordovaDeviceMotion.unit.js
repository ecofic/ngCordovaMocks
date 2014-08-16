describe('ngCordovaMocks', function() {
	beforeEach(function() {
		module('ngCordovaMocks');
	});

	describe('cordovaDeviceMotion', function () {
		var interval = null;		
		var rootScope = null;
		var motionService = null;
		var motionServiceOptions = { period: 1000 };

		beforeEach(inject(function ($cordovaDeviceMotion, $interval, $rootScope) {
			motionService = $cordovaDeviceMotion;
			rootScope = $rootScope;
			interval = $interval;
		}));

		it('should get the current acceleration', function (done) {
			var expected = { x:1, y:1, z:1, timestamp:Date() };
			motionService.currentAcceleration = expected;

			motionService.getCurrentAcceleration()
				.then(
					function(actual) { expect(actual).toBe(expected); },
					function() { expect(false).toBe(true); }
				)
				.finally(function() { done(); })
			;

			rootScope.$digest();
		});

		it('should throw an error while getting the currentAcceleration.', function(done) {
			motionService.throwsError = true;
			motionService.getCurrentAcceleration()
				.then(
					function(actual) { expect(false).toBe(true); },
					function() { expect(true).toBe(true); }
				)
				.finally(function() { done(); })
			;

			rootScope.$digest();			
		});
	});
})