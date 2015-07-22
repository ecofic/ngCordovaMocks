ngCordovaMocks.factory('$cordovaNativeAudio', ['$timeout', '$q', '$log', function ($timeout, $q, $log) {

    var dummyPromise = function (msg, callback) {
        var q = $q.defer();
        $timeout(function () {
            $log.log(msg);
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