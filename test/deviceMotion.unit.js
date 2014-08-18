describe('ngCordovaMocks', function() {
	beforeEach(function() {
		module('ngCordovaMocks');
	});

	describe('cordovaDeviceMotion', function () {
		var count = 0;
		var interval = null;		
		var rootScope = null;
		var motionService = null;
		var motionServiceOptions = { frequency: 1000 };

		beforeEach(inject(function ($cordovaDeviceMotion, $interval, $rootScope) {
			motionService = $cordovaDeviceMotion;
			rootScope = $rootScope;
			interval = $interval;
			count = 0;
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

		it('should throw an error while getting the current acceleration.', function(done) {
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

		it('should track five points over an interval', function() {
			var watch = motionService.watchAcceleration(motionServiceOptions);
			watch.promise.then(
				function() { },
				function(err) { expect(false).toBe(true); },
				function(result) {
					count = count + 1;
				}
			);

			interval.flush(5000);
			rootScope.$digest();

			expect(count).toBe(5);
		});

		it('should clear a created watch', function() {
			var watch = motionService.watchAcceleration(motionServiceOptions);
			watch.promise.then(
				function() { },
				function(err) { expect(false).toBe(true); },
				function(result) {
					count = count + 1;
				}
			);

			interval.flush(6000);
			motionService.clearWatch(watch.watchId);
			rootScope.$digest();

			expect(count).toBe(6);
		});		
	});
})