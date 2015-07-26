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
 * @name ngCordovaMocks.cordovaNativeAudio
 *
 * @description
 * A service for stubbing NativeAudio plugin
 * in an app build with ngCordova.
 */
ngCordovaMocks.factory('$cordovaNativeAudio', ['$timeout', '$q', '$log', function ($timeout, $q, $log) {

    var dummyPromise = function (msg, callback) {
        var q = $q.defer();
        $timeout(function () {
            $log.debug(msg);
            if (callback !== undefined && typeof callback === 'function') {
                callback();
            }
            q.resolve({});
        }, 10);
        return q.promise;
    };

    return {
        preloadSimple: function (id, assetPath) {
            return dummyPromise('Preloading ' + id + ' from ' + assetPath);
        },

        preloadComplex: function (id, assetPath, volume, voices) {
            return dummyPromise('Preloading ' + id + ' from ' + assetPath + ' at volume ' + volume + ' in ' + voices + ' voices.');
        },

        play: function (id, completeCallback) {
            return dummyPromise('Playing ' + id, completeCallback);
        },

        stop: function (id) {
            return dummyPromise('Stopping ' + id);
        },

        loop: function (id) {
            return dummyPromise('Looping ' + id);
        },

        unload: function (id) {
            return dummyPromise('Unloading ' + id);
        },

        setVolumeForComplexAsset: function (id, volume) {
            return dummyPromise('Setting volume for ' + id + ' to ' + volume);
        }
    };

}]);