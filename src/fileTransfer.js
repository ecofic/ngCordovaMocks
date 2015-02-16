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
 * @name ngCordovaMocks.cordovaFileTransfer
 *
 * @description
 * A service for testing upload and download files in an app build with ngCordova.
 */
ngCordovaMocks.factory('$cordovaFileTransfer', ['$q', function($q) {
    var throwsError = false;

    return {
        /**
         * @ngdoc property
         * @name throwsError
         * @propertyOf ngCordovaMocks.cordovaFileTransfer
         *
         * @description
         * A flag that signals whether a promise should be rejected or not.
         * This property should only be used in automated tests.
        **/
        throwsError: throwsError,

        download: function(url, filePath, options, trustHosts) {
            var defer = $q.defer();
            if (this.throwsError) {
                defer.reject('There was an error downloading the file.');
            } else {
                console.log(url);
                defer.resolve();
            }
            return defer.promise;
        },

        upload: function(server, filePath, options, trustAllHosts) {
            var defer = $q.defer();
            if (this.throwsError) {
                defer.reject('There was an error uploading the file.');
            } else {
                console.log(server);
                defer.resolve();
            }
            return defer.promise;
        }
    };
}]);