describe('ngCordovaMocks', function() {
	beforeEach(function() {
		module('ngCordovaMocks');
	});

	describe('cordovaDeviceOrientation', function () {
		var interval = null;		
		var rootScope = null;
		var orientationService = null;
		var orientationServiceOptions = { period: 1000 };

		beforeEach(inject(function ($cordovaDeviceOrientation, $interval, $rootScope) {
			orientationService = $cordovaDeviceOrientation;
			rootScope = $rootScope;
			interval = $interval;
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

		// TODO: Test WatchHeading and ClearWatch
	});
})