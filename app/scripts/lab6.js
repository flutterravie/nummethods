$(function () {
	var i, k,
		n = 6,
		colCount = 5,
		rowCount = 6,
		alpha = [],
		beta = [],
		numArray = [];

	// arr[столбец][строка]
	// x[i] = numArray[4][i]
	// y[i] = numArray[0][i]

	for (i = 0; i < colCount; i++) {
		numArray[i] = [];
	}

	function read () {
		for (i = 0; i < rowCount; i++) {
			numArray[0][i] = parseFloat($('input[data-col=0][data-row=' + i + ']').val());
			numArray[4][i] = parseFloat($('input[data-col=4][data-row=' + i + ']').val());
		}	
		numArray[2][0] = 0;	
	}

	function triagon () {
		var A, B, C, F, h_i, h_i1, z;
		alpha[0] = 0;
		beta[0] = 0;
		for (i = 1; i < (n - 1); i++) {
			h_i = numArray[4][i] - numArray[4][i - 1];
			h_i1 = numArray[4][i + 1] - numArray[4][i];
			A = h_i;
			B = h_i1;
			C = 2 * (h_i + h_i1);
			F = 6 * ((numArray[0][i + 1] - numArray[0][i]) / h_i1 - (numArray[0][i] - numArray[0][i - 1]) / h_i);
			z = A * alpha[i - 1] + C;
			alpha[i] = -B / z;
			beta[i] = (F - A * beta[i - 1]) / z;
		}
		
		numArray[2][n - 1] = (F - A * beta[n - 2]) / (C + A * alpha[n - 2]);

		for (i = (n - 2); i > 0; i--) {
			numArray[2][i] = alpha[i] * numArray[2][i + 1] + beta[i];
		}

		for (i = (n - 1); i > 0; i--) {
			h_i = numArray[4][i] - numArray[4][i - 1];
			numArray[3][i] = (numArray[2][i] - numArray[2][i - 1]) / h_i;
			numArray[1][i] = h_i * (2 * numArray[2][i] + numArray[2][i - 1]) / 6 + (numArray[0][i] - numArray[0][i - 1]) / h_i;
		}
	}

	function writeTable () {
		console.log(numArray[1],numArray[3]);
		for (var i = 0; i < colCount; i++) {
			for (var k = 0; k < rowCount; k++) {
				$('input[data-col=' + i + '][data-row=' + k + ']').val(numArray[i][k]);
			}
		}	
	}

	$('.js-btn').on('click', function () {
		read();
		triagon();
		writeTable();
		$('.js-log').append((numArray[0][3] + numArray[1][3] * (0.2 - numArray[4][3]) + numArray[2][3] * Math.pow((0.2 - numArray[4][3]),2) / 2 + numArray[3][3]* Math.pow((0.2 - numArray[4][3]),3) / 6).toFixed(4));
	});

});
