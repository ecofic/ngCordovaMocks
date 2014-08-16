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
 * A service for mocking the accelerometer 
 * in an app build with ngCordova.
 */ 
ngCordovaMocks.factory('$cordovaDeviceMotion', ['$interval', function ($interval) {
	var currentAcceleration = null;
	var throwsError = false;

	return {
		// Properties intended to mock test scenarios
		currentAcceleration: currentAcceleration,
		throwsError: throwsError,

		getAcceleration: function () {
			return this.currentAcceleration;
		},

		watchAcceleration : function (onSuccess, onError, options) {
			if (this.throwsError) {
				if (onError) {
					onError('There was an error getting the acceleration.');
				}
			} else {
				var watchId = null;
				var delay = 10000;

				if (options) {
					if (options.period) {
						delay = options.period;
					}
				}

				if (onSuccess) {
					watchId = $interval(onSuccess, delay);
				}
				return watchId;
			}
		},

		clearWatch : function (watchId) {
			if (watchId) {
				$interval.cancel(watchId);
			}
		}
	};
}]);