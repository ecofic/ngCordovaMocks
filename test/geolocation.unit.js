describe('ngCordovaMocks', function() {
	beforeEach(function() {
		module('ngCordovaMocks');
	});

	describe('cordovaGeolocation', function () {
		var count = 0;
		var $interval = null;
		var $rootScope = null;
		var $cordovaGeolocation = null;
		var gpsOptions = {};

		beforeEach(inject(function (_$cordovaGeolocation_, _$rootScope_, _$interval_) {
			$cordovaGeolocation = _$cordovaGeolocation_;
			$rootScope = _$rootScope_;
			$interval = _$interval_;
			count = 0;
		}));

		it('should get the current position', function (done) {
			var expected = { x:1, y:1, z:1, timestamp:Date() };
			$cordovaGeolocation.currentPosition = expected;
			$cordovaGeolocation.useHostAbilities = false;

			$cordovaGeolocation.getCurrentPosition()
				.then(
					function(actual) { expect(actual).toBe(expected); },
					function() { expect(false).toBe(true); }
				)
				.finally(function() { done(); })
			;

			$rootScope.$digest();
		});

		it('should throw an error while getting the current position.', function(done) {
			$cordovaGeolocation.throwsError = true;
			$cordovaGeolocation.getCurrentPosition()
				.then(
					function(actual) { expect(false).toBe(true); },
					function() { expect(true).toBe(true); }
				)
				.finally(function() { done(); })
			;

			$rootScope.$digest();
		});

		it('should track five locations over an interval', function() {
			$cordovaGeolocation.useHostAbilities = false;

			var watch = $cordovaGeolocation.watchPosition(gpsOptions);
			watch.promise.then(
				function() { },
				function(err) { expect(false).toBe(true); },
				function(result) {
					count = count + 1;
				}
			);

			$interval.flush(5000);
			$rootScope.$digest();

			expect(count).toBe(5);
		});

		it('should clear a created watch', function() {
			$cordovaGeolocation.useHostAbilities = false;

			var watch = $cordovaGeolocation.watchPosition(gpsOptions);
			watch.promise.then(
				function() { },
				function(err) { expect(false).toBe(true); },
				function(result) {
					count = count + 1;
				}
			);

			$interval.flush(5000);
			$cordovaGeolocation.clearWatch(watch.watchId);
			$rootScope.$digest();

			expect(count).toBe(5);
		});

		describe('useHostAbilities = true', function() {
			var mockedGeolocation = false;

			beforeEach(function() {
				if (!navigator.geolocation) {
					mockedGeolocation = true;

					navigator.geolocation = {
						getCurrentPosition: jasmine.createSpy('getCurrentPosition()')
					}
				} else {
					spyOn(navigator.geolocation, 'getCurrentPosition');
				}
			});

			afterEach(function() {
				if (mockedGeolocation) {
					delete navigator.geolocation;
				}
			})

			it('should make a request to `geolocation` api if no expectation is given', function() {
				$cordovaGeolocation.getCurrentPosition();
				expect(navigator.geolocation.getCurrentPosition).toHaveBeenCalled();
			});

			it('should pass `options` along to `gelolocation` api', function() {
				$cordovaGeolocation.getCurrentPosition('foo');
				expect(navigator.geolocation.getCurrentPosition).toHaveBeenCalledWith(
					jasmine.any(Function),
					jasmine.any(Function),
					'foo'
				);
			});
		});
	});
})
