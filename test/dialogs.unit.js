describe('ngCordovaMocks', function() {
	beforeEach(function() {
		module('ngCordovaMocks');
	});

	describe('cordovaDialogs', function () {
		var dialogService = null;

		beforeEach(inject(function ($cordovaDialogs) {
			dialogService = $cordovaDialogs;
		}));

		it('should alert the user', function() {
			var message = 'Hello. World.';
			dialogService.alert(message);

			expect(dialogService.dialogText).toBe(message);
		});

		it('should ask for confirmation', function() {
			var confirmation = 'Are you sure?';
			dialogService.confirm(confirmation);

			expect(dialogService.dialogText).toBe(confirmation);
		});

		it('should prompt the user', function() {
			// Pretend that user enters '21'
			var promptResponse = '21';
			dialogService.promptResponse = promptResponse;

			// Simulate the prompt
			var prompt = 'Please enter your age:';
			dialogService.prompt(prompt, 
				function(response) {
					expect(response).toBe(promptResponse);
				},
				'Age',
				['ok', 'cancel'],
				'13'
			);
		});

		it('should beep five times', function() {
			var times = 5;
			dialogService.beep(times);
			expect(dialogService.beepCount).toBe(times);
		})
	});
})