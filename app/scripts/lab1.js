$(function () {
	var numArray = [],
		colCount = 4,
		rowCount = 3,
		x = [];

	for (var i = 0; i < colCount; i++) {
		numArray[i] = [];
		x[i] = 0;
	}

	// arr[столбец][строка]

	function simplify(inp) {
		var firstNum = numArray[inp][inp];
		for (var i = 0; i < colCount; i++) {
			numArray[i][inp] = (numArray[i][inp] / firstNum).toFixed(5);
			// console.log(numArray[i][inp]);
		}
	}

	function subtract(inp1, inp2) {
		var subArray = [];
		var firstNum = numArray[inp1][inp2];
		for (var i = 0; i < colCount; i++) {
			subArray[i] = numArray[i][inp1] * firstNum;
			numArray[i][inp2] = numArray[i][inp2] - subArray[i];
			// console.log(numArray[i][inp2]);
		}
	}

	$('.js-btn').on('click', function () {
		for (var i = 0; i < colCount; i++) {
			for (var k = 0; k < rowCount; k++) {
				numArray[i][k] = parseFloat($('input[data-col=' + i + '][data-row=' + k + ']').val());
				// console.log(numArray[i][k]);
			}
		}

		simplify(0);
		subtract(0, 1);
		subtract(0, 2);
		simplify(1);
		subtract(1, 2);
		simplify(2);

		for (var i = 0; i < colCount; i++) {
			for (var k = 0; k < rowCount; k++) {
				$('input[data-col=' + i + '][data-row=' + k + ']').val(numArray[i][k]);
			}
		}

		// console.log(numArray[2][0]);

		for (var i = (rowCount - 1); i > -1; i--) {
			x[i] = numArray[colCount - 1][i];
			for (var k = (rowCount - 1); k > i; k--) {
				x[i] = x[i] - (numArray[k][i] * x[k]);
			}
			x[i] = parseFloat(x[i]).toFixed(5);
			$('[data-x=' + (i + 1) + ']').text(x[i]);
		}

	});

});
