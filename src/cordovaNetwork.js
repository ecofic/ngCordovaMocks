'use strict';
angular.module('ngCordovaMocks', [])
	.factory('$cordovaNetwork', function () {
		var connectionType = 'WiFi connection';
		var isConnected = true;

		return {
			connectionType: connectionType,
			isConnected: isConnected,

			getNetwork: function () {
				return connectionType;
			},

			isOnline: function () {
				return isConnected;
			},

			isOffline: function () {
				return false;
			}
		};
	})
;