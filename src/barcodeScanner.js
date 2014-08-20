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
 * @name ngCordovaMocks.cordovaBarcodeScanner
 *
 * @description
 * A service for testing barcode scanner features
 * in an app build with ngCordova.
**/ 
ngCordovaMocks.factory('$cordovaBarcodeScanner', ['$q', function($q) {
	var throwsError = false;

	var scannedText = '';
	var scannedFormat = '';
	var wasCancelled = false;

	return {
        /**
		 * @ngdoc property
		 * @name throwsError
		 * @propertyOf ngCordovaMocks.cordovaBarcodeScanner
		 *
		 * @description
		 * A flag that signals whether a promise should be rejected or not. 
		 * This property should only be used in automated tests.
		**/		
		throwsError: throwsError,

        /**
		 * @ngdoc property
		 * @name scannedText
		 * @propertyOf ngCordovaMocks.cordovaBarcodeScanner
		 *
		 * @description
		 * Used to simulate the result.text property of a
		 * successful scan. For more information, see the text at 
		 * https://github.com/wildabeast/BarcodeScanner/#using-the-plugin
		 * This property should only be used in automated tests.
		**/		
		scannedText: scannedText,

        /**
		 * @ngdoc property
		 * @name scannedFormat
		 * @propertyOf ngCordovaMocks.cordovaBarcodeScanner
		 *
		 * @description
		 * Used to simulate the result.format property of a
		 * successful scan. For more information, see the text at 
		 * https://github.com/wildabeast/BarcodeScanner/#using-the-plugin
		 * This property should only be used in automated tests.
		**/
		scannedFormat: scannedFormat,

        /**
		 * @ngdoc property
		 * @name wasCancelled
		 * @propertyOf ngCordovaMocks.cordovaBarcodeScanner
		 *
		 * @description
		 * Used to simulate the result.cancelled property of a
		 * successful scan. For more information, see the text at 
		 * https://github.com/wildabeast/BarcodeScanner/#using-the-plugin
		 * This property should only be used in automated tests.
		**/
		wasCancelled: wasCancelled,

		scan: function() {
			var defer = $q.defer();
			if (this.throwsError) {
				defer.reject('There was an error scanning.');
			} else {
				defer.resolve({text: this.scannedText, format: this.scannedFormat, cancelled: this.wasCancelled });
			}
			return defer.promise;
		},

		encode: function(type, data) {
			this.scannedFormat = type;
			this.scannedText = data;

			var defer = $q.defer();
			if (this.throwsError) {
				defer.reject('There was an error encoding the data.');
			} else {
				defer.resolve();
			}
			return defer.promise;
		}		
	};
}]);