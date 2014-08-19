describe('ngCordovaMocks', function() {
	beforeEach(function() {
		module('ngCordovaMocks');
	});

	describe('cordovaVibration', function () {
		var $cordovaVibration = null;
		var $timeout = null;
		var $rootScope = null;

		beforeEach(inject(function (_$timeout_, _$rootScope_, _$cordovaVibration_) {
			$cordovaVibration = _$cordovaVibration_;
			$timeout = _$timeout_;
			$rootScope = _$rootScope_;
		}));

		it('should vibrate for 500 milliseconds', function() {
			expect($cordovaVibration.isVibrating).toBe(false);
			$cordovaVibration.vibrate(500);

			$timeout.flush();
			$rootScope.$digest();

			expect($cordovaVibration.isVibrating).toBe(false);
		});

		it('should be vibrating at 250 milliseconds', function() {
			expect($cordovaVibration.isVibrating).toBe(false);
			$cordovaVibration.vibrate(500);

			$timeout.flush(400);
			$rootScope.$digest();

			expect($cordovaVibration.isVibrating).toBe(true);			
		})
	});
})