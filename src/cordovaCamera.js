/**
 * This service is designed
 */
ngCordovaMocks.factory('$cordovaCamera', function() {
	var throwsError = false;

	return {
		// Properties intended to mock test scenarios
		throwsError: throwsError,

		getPicture: function(options, onSuccess, onError) {
			if (this.throwsError) {
				if (onError) {
					onError('There was an error');
				}
			} else {
				if (options) {
					options = options;	// This is just to get by JSHint.
				}

				if (onSuccess) {
					onSuccess();
				}
			}
		}
	};
});