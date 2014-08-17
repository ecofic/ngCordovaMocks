describe('ngCordovaMocks', function() {
	beforeEach(function() {
		module('ngCordovaMocks');
	});

	describe('cordovaDevice', function () {
		var deviceService = null;

		beforeEach(inject(function ($cordovaDevice) {
			deviceService = $cordovaDevice;
		}));

		it('should get the device name', function () {
			// NOTE: device.name was deprecated in Cordova 2.3. 
			// This test can be removed once device.name is removed.
			deviceService.device = 'Power Device';
			var deviceName = deviceService.getDevice();
			expect(deviceName).toEqual('Power Device');
		});

		it('should get the version of cordova in use', function () {
			var cordovaVersion = '3.5';
			deviceService.cordova = cordovaVersion;

			var version = deviceService.getCordova();
			expect(version).toEqual(cordovaVersion);
		});

		it('should get the model name', function () {
			var modelName = 'Buster';
			deviceService.model = modelName;

			var model = deviceService.getModel();
			expect(model).toEqual(modelName);
		});

		it('should get the platform', function () {
			var operatingSystem = 'MyFavoriteOS';
			deviceService.platform = operatingSystem;

			var platform = deviceService.getPlatform();
			expect(platform).toEqual(operatingSystem);
		});

		it('should get the unique ID', function () {
			var guid = 'eb77ae18-f6c1-4a36-8705-1975a9225fb9';
			deviceService.uuid = guid;

			var uuid = deviceService.getUUID();
			expect(uuid).toEqual(guid);
		});

		it('should get the version', function () {
			var version = '1.0';
			deviceService.version = version;

			var v = deviceService.getVersion();
			expect(v).toEqual(version);
		});		
	});
})