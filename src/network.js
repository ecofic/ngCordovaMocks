/**
 * Copyright (c) 2014 Ecofic LLC. All rights reserved.
 * http://www.ecofic.com

 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.

 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

/**
 * @ngdoc service
 * @name ngCordovaMocks.cordovaNetwork
 *
 * @description
 * A service for testing networked fetures
 * in an app build with ngCordova.
 */  
ngCordovaMocks.factory('$cordovaNetwork', function () {
	var connectionType = 'WiFi connection';
	var isConnected = true;

	return {
        /**
		 * @ngdoc property
		 * @name connectionType
		 * @propertyOf ngCordovaMocks.cordovaNetwork
		 *
		 * @description
		 * They type of connection. Values should match those found at
		 * https://github.com/apache/cordova-plugin-network-information/blob/master/doc/index.md 
		 * This property should only be used in automated tests.
		**/	
		connectionType: connectionType,

        /**
		 * @ngdoc property
		 * @name isConnected
		 * @propertyOf ngCordovaMocks.cordovaNetwork
		 *
		 * @description
		 * A flag that signals whether the app is connected to a network. 
		 * This property should only be used in automated tests.
		**/			
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