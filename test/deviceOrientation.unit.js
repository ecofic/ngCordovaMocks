describe('ngCordovaMocks', function() {
	beforeEach(function() {
		module('ngCordovaMocks');
	});

	describe('cordovaDeviceOrientation', function () {
		var count = 0;
		var interval = null;
		var rootScope = null;
		var orientationService = null;
		var orientationServiceOptions = { frequency: 1000 };

		beforeEach(inject(function ($cordovaDeviceOrientation, $interval, $rootScope) {
			orientationService = $cordovaDeviceOrientation;
			rootScope = $rootScope;
			interval = $interval;
			count = 0;
		}));

		it('should get the current heading', function (done) {
			var expected = { x:1, y:1, z:1, timestamp:Date() };
			orientationService.currentHeading = expected;

			orientationService.getCurrentHeading()
				.then(
					function(actual) { expect(actual).toBe(expected); },
					function() { expect(false).toBe(true); }
				)
				.finally(function() { done(); })
			;

			rootScope.$digest();
		});

		it('should throw an error while getting the current heading.', function(done) {
			orientationService.throwsError = true;
			orientationService.getCurrentHeading()
				.then(
					function(actual) { expect(false).toBe(true); },
					function() { expect(true).toBe(true); }
				)
				.finally(function() { done(); })
			;

			rootScope.$digest();			
		});

		it('should track five readings over an interval', function() {
			var watch = orientationService.watchHeading(orientationServiceOptions);
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
			var watch = orientationService.watchHeading(orientationServiceOptions);
			watch.promise.then(
				function() { },
				function(err) { expect(false).toBe(true); },
				function(result) {
					count = count + 1;
				}
			);

			interval.flush(5000);
			orientationService.clearWatch(watch.watchId);
			rootScope.$digest();

			expect(count).toBe(5);
		});

		// TODO: Test WatchHeading and ClearWatch
	});
})