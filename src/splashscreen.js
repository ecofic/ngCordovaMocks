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
 * @name ngCordovaMocks.cordovaSplashscreen
 *
 * @description
 * A service for testing the splash screen
 * in an app build with ngCordova.
 */ 
ngCordovaMocks.factory('$cordovaSplashscreen', function() {
	var isVisible = false;

	return {
		/**
		 * @ngdoc property
		 * @name isVisible
		 * @propertyOf ngCordovaMocks.cordovaSplashscreen
		 *
		 * @description
		 * A flag that signals whether the splash screen is visible or not.
		 * This property should only be used in automated tests.
		**/		
		isVisible: isVisible,

		hide: function() {
			// do nothing. everything happens behind the scenes in this case.
			// its a stub that is present for completeness.
			this.isVisible = false;
			return true;
		},
		show: function() {
			// do nothing. everything happens behind the scenes in this case.
			// its a stub that is present for completeness.
			this.isVisible = true;
			return true;
		}
	};
});