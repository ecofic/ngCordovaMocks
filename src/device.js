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
 * @name ngCordovaMocks.cordovaDevice
 *
 * @description
 * A service for testing device information
 * in an app build with ngCordova.
**/  
ngCordovaMocks.factory('$cordovaDevice', function () {
	var device = '';
	var cordova = '';
	var model = '';
	var platform = '';
	var uuid = '';
	var version = '';

	return {
        /**
		 * @ngdoc property
		 * @name device
		 * @propertyOf ngCordovaMocks.cordovaDevice
		 *
		 * @description
		 * The name of the 'device'. 
		 * This property should only be used in automated tests.
		**/		
		device: device,

        /**
		 * @ngdoc property
		 * @name cordova
		 * @propertyOf ngCordovaMocks.cordovaDevice
		 *
		 * @description
		 * The version of cordova in use.
		 * This property should only be used in automated tests.
		**/				
		cordova: cordova,

        /**
		 * @ngdoc property
		 * @name model
		 * @propertyOf ngCordovaMocks.cordovaDevice
		 *
		 * @description
		 * The model of the device using the app.
		 * This property should only be used in automated tests.
		**/
		model: model,

        /**
		 * @ngdoc property
		 * @name platform
		 * @propertyOf ngCordovaMocks.cordovaDevice
		 *
		 * @description
		 * The name of the operating system in use.
		 * This property should only be used in automated tests.
		**/		
		platform: platform,

        /**
		 * @ngdoc property
		 * @name uuid
		 * @propertyOf ngCordovaMocks.cordovaDevice
		 *
		 * @description
		 * The unique identifier of a device.
		 * This property should only be used in automated tests.
		**/		
		uuid: uuid,

        /**
		 * @ngdoc property
		 * @name version
		 * @propertyOf ngCordovaMocks.cordovaDevice
		 *
		 * @description
		 * The version of the operating system.
		 * This property should only be used in automated tests.
		**/		
		version: version,

		getDevice: function () {
			return this.device;
		},

		getCordova: function () {
			return this.cordova;
		},

		getModel: function () {
			return this.model;
		},

		getPlatform: function() {
			return this.platform;
		},

		getUUID: function() {
			return this.uuid;
		},

		getVersion: function() {
			return this.version;
		}
	};
});