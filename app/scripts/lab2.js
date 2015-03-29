$(function () {
	var numArray = [],
		colCount = 5,
		rowCount = 4,
		x = [],
		maxB = 0;

	for (var i = 0; i < colCount; i++) {
		numArray[i] = [];
		x[i] = 0;
	}

	// arr[столбец][строка]

	$('.js-btn').on('click', function () {
		for (var i = 0; i < colCount; i++) {
			for (var k = 0; k < rowCount; k++) {
				numArray[i][k] = parseFloat($('input[data-col=' + i + '][data-row=' + k + ']').val());
				// console.log(numArray[i][k]);
			}
		}

		// проверка сходимости метода итераций

		for (var i = 3; i < rowCount; i++) {
		var tempSum = 0;
			for (var k = 0; k < (colCount-1); k++) {
				tempSum = tempSum + Math.abs(numArray[k][i]);
			}
			if (tempSum > maxB) { maxB = tempSum; }
			console.log(maxB);
		}

		for (var i = 0; i < colCount; i++) {
			for (var k = 0; k < rowCount; k++) {
				$('input[data-col=' + i + '][data-row=' + k + ']').val(numArray[i][k]);
			}
		}

		// console.log(numArray[2][0]);

	});

});
