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

/*
 * A service for testing features related with contacts 
 * in an app build with ngCordova.
 */ 
ngCordovaMocks.factory('$cordovaContacts', ['$q', function($q) {
	var throwsError = false;
	var contacts = [];

	return {
		// Properties intended to mock test scenarios
		throwsError: throwsError,
		contacts: contacts,

		save: function(contact) {
			var defer = $q.defer();
			if (this.throwsError) {
				defer.reject('There was an error saving the contact.');
			} else {
				this.contacts.push(contact);
				defer.resolve();
			}
			return defer.promise;
		},

		remove: function(contact) {
			var defer = $q.defer();
			if (this.throwsError) {
				defer.reject('There was an error saving the contact.');
			} else {
				// TODO: Once the structure of the contact object is better
				// understood, it needs to be removed from this.contacts
				contact = contact;	// This is just to get by JSHint.
				defer.resolve();
			}
			return defer.promise;
		},

		find: function(options) {
			var defer = $q.defer();
			if (this.throwsError) {
				defer.reject('There was an error finding the contact.');
			} else {
				// TODO: Once the structure of a contact object is better
				// understood, we need to return matching entities from this.contacts				
				options = options;	// This is just to get by JSHint
				defer.resolve();
			}
			return defer.promise;			
		}
	};
}]);