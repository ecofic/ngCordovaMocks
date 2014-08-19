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
 * @name ngCordovaMocks.cordovaStatusbar
 *
 * @description
 * A service for testing the status bar
 * in an app build with ngCordova.
 */ 
ngCordovaMocks.factory('$cordovaStatusbar', function() {
	var isStatusBarVisible = true;
	var canOverlayWebView = true;

	return {
		/**
		 * @ngdoc property
		 * @name isStatusBarVisible
		 * @propertyOf ngCordovaMocks.cordovaStatusbar
		 *
		 * @description
		 * A flag that signals whether the status bar is visible or not.
		 * This property should only be used in automated tests.
		**/		
		isStatusBarVisible: isStatusBarVisible,

		/**
		 * @ngdoc property
		 * @name canOverlayWebView
		 * @propertyOf ngCordovaMocks.cordovaStatusbar
		 *
		 * @description
		 * A flag that signals whether the status bar can overlay the web view.
		 * This property should only be used in automated tests.
		**/			
		canOverlayWebView: canOverlayWebView,

		overlaysWebView: function(bool) {
			this.canOverlayWebView = bool;
		},

		style: function(style) {
			// TODO: Review
			return style;
		},

		styleHex: function(colorHex) {
			// TODO: review
			return colorHex;
		},

		styleColor: function(color) {
			// TODO: review
			return color;
		},

		hide: function() {
			this.isStatusBarVisible = false;
		},

		show: function() {
			this.isStatusBarVisible = true;
		},

		isVisible: function () {
			return this.isStatusBarVisible;
		}
	};
});