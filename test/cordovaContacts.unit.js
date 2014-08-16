describe('ngCordovaMocks', function() {
	beforeEach(function() {
		module('ngCordovaMocks');
	});

	describe('cordovaContacts', function () {
		var contactService = null;
		var findOptions = {};
		var filter = '';
		var multiple = false;

		beforeEach(inject(function ($cordovaContacts) {
			contactService = $cordovaContacts;
		}));

		it('should create a contact', function () {
			var contact = {};
			contactService.create(contact);
			expect(true).toBe(true);
		});

		it('should find a contact', function() {
			contactService.find(
				function() {
					expect(true).toBe(true);
				},
				function(error) {
					expect(false).toBe(true);
				},
				findOptions,
				filter,
				multiple
			)
		});

		it('should throw an error while finding a contact.', function() {
			contactService.throwsError = true;
			contactService.find( 
				function() {
					expect(true).toBe(false);
				},
				function(error) {
					expect(true).toBe(true);
				},
				findOptions,
				filter,
				multiple
			);
		});	

		it('should pick a contact', function() {
			contactService.pickContact(
				function() {
					expect(true).toBe(true);
				},
				function(error) {
					expect(false).toBe(true);
				}
			);
		});

		it('should throw an error while picking a contact.', function() {
			contactService.throwsError = true;
			contactService.pickContact(
				function() {
					expect(false).toBe(true);
				},
				function(error) {
					expect(true).toBe(true);
				}
			);
		});
	});
})