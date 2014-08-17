describe('ngCordovaMocks', function() {
	beforeEach(function() {
		module('ngCordovaMocks');
	});

	describe('cordovaContacts', function () {
		var rootScope = null;
		var contactService = null;
		var findOptions = {};

		beforeEach(inject(function ($cordovaContacts, $rootScope) {
			contactService = $cordovaContacts;
			rootScope = $rootScope;
		}));

		it('should save a contact', function (done) {
			var contact = {};
			contactService.save(contact)
				.then(
					function() { expect(true).toBe(true); },
					function() { expect(false).toBe(true); }
				)
				.finally(function() { done(); })
			;

			rootScope.$digest();			
		});

		it('should find an existing contact', function(done) {
			contactService.find(findOptions)
				.then(
					function() { expect(true).toBe(true); },
					function(error) { expect(false).toBe(true); }
				)
				.finally(function() { done(); })
			;

			rootScope.$digest();
		});

		it ('should not find a specific contact', function(done) {
			contactService.find(findOptions)
				.then(
					function() { expect(true).toBe(true); },
					function(error) { expect(false).toBe(true); }
				)
				.finally(function() { done(); })
			;

			rootScope.$digest();			
		});

		it('should throw an error while finding a contact.', function(done) {
			contactService.throwsError = true;
			contactService.find(findOptions)
				.then(
					function() { expect(false).toBe(true); },
					function(error) { expect(true).toBe(true); }
				)
				.finally(function() { done(); })
			;

			rootScope.$digest();			
		});
	});
})