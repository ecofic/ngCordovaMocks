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

/*
 * A service for testing networked fetures 
 * in an app build with ngCordova.
 */ 
ngCordovaMocks.factory('$cordovaDevice', function () {
	var device = '';
	var cordova = '';
	var model = '';
	var platform = '';
	var uuid = '';
	var version = '';

	return {
		// Properties intended to mock test scenarios
		device: device,
		cordova: cordova,
		model: model,
		platform: platform,
		uuid: uuid,
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