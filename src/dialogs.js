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
 * @name cordovaDialogs
 *
 * @description
 * A service for testing dialogs
 * in an app build with ngCordova.
 *
 * @example
   $cordovaDialogs.alert('Hello. World.');
 */ 
ngCordovaMocks.factory('$cordovaDialogs', function() {
	var dialogText = false;
	var dialogTitle = '';
	var defaultValue = '';
	var promptResponse = '';
	var beepCount = 0;

	return {
		dialogText: dialogText,
		dialogTitle: dialogTitle,
		defaultValue: defaultValue,
		promptResponse: promptResponse,
		buttonLabels: [],
		beepCount: beepCount,

		alert: function(message, callback, title, buttonName) {
			this.dialogText = message;
			this.dialogTitle = title;
			this.buttonLabels.push(buttonName);
		},

		confirm: function(message, callback, title, buttonName) {
			this.dialogText = message;
			this.dialogTitle = title;
			this.buttonLabels.push(buttonName);
		},

		prompt: function(message, promptCallback, title, buttonLabels, defaultText) {
			this.dialogText = message;
			this.dialogTitle = title;
			this.defaultValue = defaultText;

			for (var i=0; i<buttonLabels.length; i++) {
				this.buttonLabels.push(buttonLabels[i]);
			}

			if (promptCallback) {
				promptCallback(this.promptResponse);
			}
		},

		beep: function(times) {
			this.beepCount = times;
		}
	};
});