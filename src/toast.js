
ngCordovaMocks.factory('$cordovaToast', ['$q',
	function ($q) {
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

			showShortTop: function (message) {
				if(message){console.log("");} //jshint

				var q = $q.defer();
				if (this.throwsError) {
					q.reject('There was an error');
				} else {
					q.resolve();
				}
				return q.promise;
			},

			showShortCenter: function (message) {
				if(message){console.log("");} //jshint

				var q = $q.defer();
				if (this.throwsError) {
					q.reject('There was an error');
				} else {
					q.resolve();
				}
				return q.promise;
			},

			showShortBottom: function (message) {
				if(message){console.log("");} //jshint

				var q = $q.defer();
				if (this.throwsError) {
					q.reject('There was an error');
				} else {
					q.resolve();
				}
				return q.promise;
			},

			showLongTop: function (message) {

				var q = $q.defer();
				window.plugins.toast.showLongTop(message, function (response) {
					q.resolve(response);
				}, function (error) {
					q.reject(error);
				});
				return q.promise;
			},

			showLongCenter: function (message) {
				if(message){console.log("");} //jshint

				var q = $q.defer();
				if (this.throwsError) {
					q.reject('There was an error');
				} else {
					q.resolve();
				}
				return q.promise;
			},

			showLongBottom: function (message) {
				if(message){console.log("");} //jshint

				var q = $q.defer();
				if (this.throwsError) {
					q.reject('There was an error');
				} else {
					q.resolve();
				}
				return q.promise;
			},


			show: function (message, duration, position) {
				if(message && duration && position){console.log("");} //jshint

				var q = $q.defer();
				if (this.throwsError) {
					q.reject('There was an error');
				} else {
					q.resolve();
				}
				return q.promise;
			}
		};
	}
]);