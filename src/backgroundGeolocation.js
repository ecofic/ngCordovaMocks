ngCordovaMocks.factory('$cordovaBackgroundGeolocation', ['$interval', '$q',
	function ($interval, $q) {
		var throwsError = false;
		var currentLocation  = null;
		var err = {status: 'error'};
		var result = {status: 'ok'};

		return {

			throwsError: throwsError,

			currentLocation: currentLocation,


			init: function () {
				return currentLocation;
			},

			configure: function (options) {
				if(options){console.log("");} //jshint

				this.init();
				var q = $q.defer();

				if(throwsError){
					q.reject(err);
				}else{
					q.resolve(result);
				}

				this.start();

				return q.promise;
			},

			start: function () {
				var q = $q.defer();

				if(throwsError){
					q.reject(err);
				}else{
					q.resolve(result);
				}

				return q.promise;
			},

			stop: function () {
				var q = $q.defer();

				if(throwsError){
					q.reject(err);
				}else{
					q.resolve(result);
				}

				return q.promise;
			}
		};
	}
]);