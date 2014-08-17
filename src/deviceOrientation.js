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
 * A service for testing compass fetures 
 * in an app build with ngCordova.
 */ 
ngCordovaMocks.factory('$cordovaDeviceOrientation', ['$q', function ($q) {
	var currentHeading = null;
	var throwsError = false;

	return {
		// Properties intended to mock test scenarios
		currentHeading: currentHeading,
		throwsError: throwsError,

		getCurrentHeading: function () {
			var defer = $q.defer();
			if (this.throwsError) {
				defer.reject('There was an error getting the current heading.');
			} else {
				defer.resolve(this.currentHeading);
			}
			return defer.promise;
		},

		watchHeading: function () {
			return null;
		},

		clearWatch: function () {
			return null;
		}
	};
}]);