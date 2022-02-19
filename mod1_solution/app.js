(function () {
'use strict';

	angular.module('lunchApp', [])

	.controller('lunchController', function ($scope) {

		$scope.lunch = '';
		$scope.check = function () {
			let lunchArray = $scope.lunch.split(',');
			let numberOfMeals = lunchArray.length;
			for (let i = 0; i < lunchArray.length; i++) {
				if (lunchArray[i] == ' ' || lunchArray[i] == '') {
					numberOfMeals--;
				}
			}

			if (numberOfMeals <= 3 && numberOfMeals >= 1) {
				$scope.message = 'Enjoy!';
			} else if (numberOfMeals > 3) {
				$scope.message = 'Too much!';
			} else {
				$scope.message = 'Please enter data first';
			}
		};
	});

	
})();