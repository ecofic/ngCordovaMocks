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
 * @name ngCordovaMocks.cordovaDeviceMotion
 *
 * @description
 * A service for mocking the accelerometer
 * in an app build with ngCordova.
**/  
ngCordovaMocks.factory('$cordovaDeviceMotion', ['$interval', '$q', function ($interval, $q) {
	var currentAcceleration = null;
	var throwsError = false;
	var positions = [];
	var watchIntervals = [];

	return {
		/**
		 * @ngdoc property
		 * @name currentAcceleration
		 * @propertyOf ngCordovaMocks.cordovaDeviceMotion
		 *
		 * @description
		 * The current acceleration. 
		 * This property should only be used in automated tests.
		**/				
		currentAcceleration: currentAcceleration,

        /**
		 * @ngdoc property
		 * @name throwsError
		 * @propertyOf ngCordovaMocks.cordovaDeviceMotion
		 *
		 * @description
		 * A flag that signals whether a promise should be rejected or not.
		 * This property should only be used in automated tests.
		**/
		throwsError: throwsError,

        /**
		 * @ngdoc property
		 * @name positions
		 * @propertyOf ngCordovaMocks.cordovaDeviceMotion
		 *
		 * @description
		 * The collection of 'positions' that have been logged.
		 * This property should only be used in automated tests.
		**/		
		positions: positions,

        /**
		 * @ngdoc property
		 * @name watchIntervals
		 * @propertyOf ngCordovaMocks.cordovaDeviceMotion
		 *
		 * @description
		 * The collection of watchers that are currently active.
		 * This property should only be used in automated tests.
		**/		
		watchIntervals: watchIntervals,

		getCurrentAcceleration: function () {
			var defer = $q.defer();
			if (this.throwsError) {
				defer.reject('There was an error getting the current acceleration.');
			} else {
				defer.resolve(this.currentAcceleration);
			}
			return defer.promise;
		},

		watchAcceleration : function (options) {
			var defer = $q.defer();
			var watchId = Math.floor((Math.random() * 1000000) + 1);

			this.positions = [];
			self = this;
			
			if (this.throwsError) {
				defer.reject('There was an error watching the current acceleration.');
			} else {
				var delay = 10000;		// The default based on https://github.com/apache/cordova-plugin-device-motion/blob/master/doc/index.md
				if (options && options.frequency) {
					delay = options.frequency;
				}				

				this.watchIntervals.push($interval(
					function() {
						if (self.throwsError) {
							defer.reject('There was an error watching the acceleration.');
						}

						// Generate a random position
						var randomX = Math.floor((Math.random() * 100) + 1);
						var randomY = Math.floor((Math.random() * 100) + 1);
						var randomZ = Math.floor((Math.random() * 100) + 1);
						var result = { x: randomX, y: randomY, z:randomZ, timestamp:Date.now() };

						self.positions.push(result);
						defer.notify(result);	
					}, 
					delay
				));
			}

			return {
				watchId: watchId,
				promise: defer.promise
			};
		},

		clearWatch: function (watchId) {
			var defer = $q.defer();			
			if (watchId) {
				if (this.throwsError) {
					defer.reject('Unable to clear watch.');
				} else {
					var removed = -1;
					for (var i=0; i<this.watchIntervals.length; i++) {
						if (this.watchIntervals[i].watchId === watchId) {
							$interval.cancel(watchIntervals[i].interval);
							removed = i;
							break;
						}
					}

					if (removed !== -1) {
						this.watchIntervals.splice(removed, 1);
					}
				}
			} else {
				defer.reject('Unable to clear watch. No watch ID provided.');
			}
			return defer.promise;
		}
	};
}]);