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
 * @name ngCordovaMocks.cordovaFile
 *
 * @description
 * A service for testing interaction with device directories and files
 * in an app build with ngCordova.
 */ 
ngCordovaMocks.factory('$cordovaFile', ['$q', function($q) {
	var throwsError = false;
	var fileSystem = {};

	return {
        /**
		 * @ngdoc property
		 * @name throwsError
		 * @propertyOf ngCordovaMocks.cordovaFile
		 *
		 * @description
		 * A flag that signals whether a promise should be rejected or not.
		 * This property should only be used in automated tests.
		**/
		throwsError: throwsError,

        /**
		 * @ngdoc property
		 * @name fileSystem
		 * @propertyOf ngCordovaMocks.cordovaFile
		 *
		 * @description
		 * A fake, in-memory file system. This is incomplete at this time.
		 * This property should only be used in automated tests.
		**/		
		fileSystem: fileSystem,

		checkDir: function(directory) {
			var defer = $q.defer();
			if (this.throwsError) {
				defer.reject('There was an error checking the directory.');
			} else {
				console.log(directory);
				defer.resolve();
			}
			return defer.promise;			
		},

		createDir: function(directory, overwrite) {
			var defer = $q.defer();
			if (this.throwsError) {
				defer.reject('There was an error creating the directory.');
			} else {
				console.log(directory);
				console.log(overwrite);
				defer.resolve();
			}
			return defer.promise;			
		},

		checkFile: function(directory, file) {
			var defer = $q.defer();
			if (this.throwsError) {
				defer.reject('There was an error checking for the file.');
			} else {
				console.log(directory);
				console.log(file);
				defer.resolve();
			}
			return defer.promise;			
		},

		createFile: function(directory, file, overwrite) {
			var defer = $q.defer();
			if (this.throwsError) {
				defer.reject('There was an error creating the file.');
			} else {
				console.log(directory);
				console.log(file);
				console.log(overwrite);
				defer.resolve();
			}
			return defer.promise;			
		},

		removeFile: function(directory, file) {
			var defer = $q.defer();
			if (this.throwsError) {
				defer.reject('There was an error removng the file.');
			} else {
				console.log(directory);
				console.log(file);
				defer.resolve();
			}
			return defer.promise;			
		},

		writeFile: function(directory, file) {
			var defer = $q.defer();
			if (this.throwsError) {
				defer.reject('There was an error writing the file.');
			} else {
				console.log(directory);
				console.log(file);
				defer.resolve();
			}
			return defer.promise;			
		},

		readFile: function(directory, file) {
			var defer = $q.defer();
			if (this.throwsError) {
				defer.reject('There was an error reading the file.');
			} else {
				console.log(directory);
				console.log(file);
				defer.resolve();
			}
			return defer.promise;			
		},

		downloadFile: function(source, filePath, trust, options) {
			var defer = $q.defer();
			if (this.throwsError) {
				defer.reject('There was an error downloading the file.');
			} else {
				console.log(source);
				console.log(filePath);
				console.log(trust);
				console.log(options);
				defer.resolve();
			}
			return defer.promise;			
		},

		uploadFile: function(server, filePath, options) {
			var defer = $q.defer();
			if (this.throwsError) {
				defer.reject('There was an error uploading the file.');
			} else {
				console.log(server);
				console.log(filePath);
				console.log(options);
				defer.resolve();
			}
			return defer.promise;			
		}		
	};
}]);