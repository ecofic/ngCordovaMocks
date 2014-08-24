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
 * @name ngCordovaMocks.cordovaCamera
 *
 * @description
 * A service for testing camera features
 * in an app build with ngCordova.
**/ 
ngCordovaMocks.factory('$cordovaCamera', ['$q', function($q) {
	var throwsError = false;

	return {
        /**
		 * @ngdoc property
		 * @name throwsError
		 * @propertyOf ngCordovaMocks.cordovaCamera
		 *
		 * @description
		 * A flag that signals whether a promise should be rejected or not. 
		 * This property should only be used in automated tests.
		**/		
		throwsError: throwsError,

		getPicture: function(options) {
			var defer = $q.defer();
			if (this.throwsError) {
				defer.reject('There was an error getting the picture.');
			} else {
				if (options) {
					options = options;	// This is just to get by JSHint.
				}

				defer.resolve();					
			}
			return defer.promise;
		}
	};
}]);