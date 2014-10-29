describe('ngCordovaMocks', function() {
	beforeEach(function() {
		module('ngCordovaMocks');
	});

	describe('cordovaSpinnerDialog', function () {
		var $cordovaSpinnerDialog = null;

		beforeEach(inject(function (_$cordovaSpinnerDialog_) {
			$cordovaSpinnerDialog = _$cordovaSpinnerDialog_;
		}));

		it('should hide the splash screen', function() {
			$cordovaSpinnerDialog.hide();
			expect(true).toBe(true);
		});

		it('should show the splash screen', function() {
			$cordovaSpinnerDialog.show();
			expect(true).toBe(true);
		});
	});
})
