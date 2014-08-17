describe('ngCordovaMocks', function() {
	beforeEach(function() {
		module('ngCordovaMocks');
	});

	describe('cordovaNetwork', function () {
		var networkService = null;

		beforeEach(inject(function ($cordovaNetwork) {
			networkService = $cordovaNetwork;
		}));

		it('should get network name', function () {
			// TODO: This should integrate with the navigator connection property values.
			networkService.connectionType = 'WiFi connection';
			var networkName = networkService.getNetwork();
			expect(networkName).toEqual('WiFi connection');
		});

		it('should check if online', function() {
			var isOnline = networkService.isOnline();
			expect(isOnline).toBe(true);
		});

		it('should check if offline', function() {
			var isOffline = networkService.isOffline();
			expect(isOffline).toBe(false);
		})
	});
})