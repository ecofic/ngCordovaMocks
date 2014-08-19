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
 * @name ngCordovaMocks.cordovaDeviceOrientation
 *
 * @description
 * A service for testing compass fetures 
 * in an app build with ngCordova.
 */ 
ngCordovaMocks.factory('$cordovaDeviceOrientation', ['$interval', '$q', function ($interval, $q) {
	var currentHeading = null;
	var throwsError = false;
	var readings = [];
	var watchIntervals = [];	

	return {
		/**
		 * @ngdoc property
		 * @name currentHeading
		 * @propertyOf ngCordovaMocks.cordovaDeviceOrientation
		 *
		 * @description
		 * The current heading. 
		 * This property should only be used in automated tests.
		**/				
		currentHeading: currentHeading,

        /**
		 * @ngdoc property
		 * @name throwsError
		 * @propertyOf ngCordovaMocks.cordovaDeviceOrientation
		 *
		 * @description
		 * A flag that signals whether a promise should be rejected or not.
		 * This property should only be used in automated tests.
		**/
		throwsError: throwsError,

        /**
		 * @ngdoc property
		 * @name positions
		 * @propertyOf ngCordovaMocks.cordovaDeviceOrientation
		 *
		 * @description
		 * The collection of compass 'readings' that have been logged.
		 * This property should only be used in automated tests.
		**/				
		readings: readings,

        /**
		 * @ngdoc property
		 * @name watchIntervals
		 * @propertyOf ngCordovaMocks.cordovaDeviceOrientation
		 *
		 * @description
		 * The collection of watchers that are currently active.
		 * This property should only be used in automated tests.
		**/		
		watchIntervals: watchIntervals,

		getCurrentHeading: function () {
			var defer = $q.defer();			
			if (this.throwsError) {
				defer.reject('There was an error getting the current heading.');
			} else {
				defer.resolve(this.currentHeading);
			}
			return defer.promise;
		},

		watchHeading: function (options) {
			var defer = $q.defer();
			var watchId = Math.floor((Math.random() * 1000000) + 1);

			this.readings = [];
			self = this;

			if (this.throwsError) {
				defer.reject('There was an error getting the compass heading.');
			} else {
				var delay = 100;		// The default based on https://github.com/apache/cordova-plugin-device-orientation/blob/master/doc/index.md
				if (options && options.frequency) {
					delay = options.frequency;
				}				

				this.watchIntervals.push({
					watchId: watchId,
					interval: $interval(
						function() {
							if (self.throwsError) {
								defer.reject('There was an error watching the acceleration.');
							}

							// Generate a random position
							var magneticHeading = (Math.random() * 359.99) + 1;
							var trueHeading = (Math.random() * 359.99) + 1;
							var headingAccuracy = Math.floor((Math.random() * 360) + 1);
							var result = { magneticHeading: magneticHeading, trueHeading: trueHeading, headingAccuracy:headingAccuracy, timestamp:Date.now() };

							self.readings.push(result);
							defer.notify(result);	
						}, 
						delay
					)
				});
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