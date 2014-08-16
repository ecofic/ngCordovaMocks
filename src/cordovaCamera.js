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
 * A service for testing camera features in an app build with AngularJS and Cordova.
 */ 
ngCordovaMocks.factory('$cordovaCamera', function() {
	var throwsError = false;

	return {
		// Properties intended to mock test scenarios
		throwsError: throwsError,

		getPicture: function(options, onSuccess, onError) {
			if (this.throwsError) {
				if (onError) {
					onError('There was an error');
				}
			} else {
				if (options) {
					options = options;	// This is just to get by JSHint.
				}

				if (onSuccess) {
					onSuccess();
				}
			}
		}
	};
});