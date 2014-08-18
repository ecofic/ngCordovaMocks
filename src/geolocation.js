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
 * @name cordovaGeolocation
 *
 * @description
 * A service for testing location services
 * in an app build with ngCordova.
 *
 * @example
   $cordovaCamera.getPicture(cameraOptions);
 */ 
ngCordovaMocks.factory('$cordovaGeolocation', ['$interval', '$q', function($interval, $q) {
	var throwsError = false;
	var watchIntervals = [];
	var locations = [];
	var currentPosition = null;

	return {
		// Properties intended to mock test scenarios
		throwsError: throwsError,
		watchIntervals: watchIntervals,
		locations: locations,
		currentPosition: currentPosition,

		getCurrentPosition: function(options) {
			var defer = $q.defer();
			if (this.throwsError) {
				defer.reject('There was an error getting the location.');
			} else {
				if (options) {
					options = options;	// This is just to get by JSHint.
				}
				defer.resolve(this.currentPosition);
			}
			return defer.promise;
		},

		watchPosition: function(options) {
			var defer = $q.defer();
			var watchId = Math.floor((Math.random() * 1000000) + 1);

			this.locations = [];
			self = this;

			if (this.throwsError) {
				defer.reject('There was an error getting the geolocation.');
			} else {
				var delay = 1000;
				if (options && options.timeout) {
					delay = options.timeout;
				}				

				this.watchIntervals.push({
					watchId: watchId,
					interval: $interval(
						function() {
							if (self.throwsError) {
								defer.reject('There was an error watching the geolocation.');
							}

							// Generate a random position
							var altitude = ((Math.random() * 100) + 1);
							var latitude = ((Math.random() * 180) + 1) - 90;
							var longitude = ((Math.random() * 360) + 1) - 180;

							var accuracy = ((Math.random() * 10) + 1);
							var altitudeAccuracy = ((Math.random() * 10) + 1);
							var heading = ((Math.random() * 360) + 1);
							var speed = ((Math.random() * 100) + 1);

							var result = { 
								coords: {
									latitude: latitude,
									longitude: longitude,
									altitude: altitude,
									accuracy: accuracy,
									altitudeAccuracy: altitudeAccuracy,
									heading: heading,
									speed: speed
								}, 
								timestamp:Date.now() 
							};

							self.currentPosition = result;
							self.locations.push(result);
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