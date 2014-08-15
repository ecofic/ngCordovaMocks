/**
 *
 */
ngCordovaMocks.factory('$cordovaNetwork', function () {
	var connectionType = 'WiFi connection';
	var isConnected = true;

	return {
		// Properties intended to mock test scenarios
		connectionType: connectionType,
		isConnected: isConnected,

		getNetwork: function () {
			return this.connectionType;
		},

		isOnline: function () {
			return this.isConnected;
		},

		isOffline: function () {
			return !this.isConnected;
		}
	};
});