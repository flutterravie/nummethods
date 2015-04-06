$(function () {
	var numArray = [],
		oldArray = [],
		colCount = 4,
		x1 = numArray[0],
		x2 = numArray[1],
		x3 = numArray[2],
		x4 = numArray[3],
		steps;

	// arr[столбец]

	for (var i = 0; i < colCount; i++) {
		numArray[i] = parseFloat($('input[data-col=' + i + ']').val());
		steps = parseFloat($('input[data-col=4]').val());
	}

	$('.js-btn').on('click', function () {
		for (var k = 0; k < steps; k++) {
			oldArray[0] = numArray[0];
			oldArray[1] = numArray[1];
			oldArray[2] = numArray[2];
			oldArray[3] = numArray[3];
			numArray[0] = ((0.25287 * oldArray[1]) + (-0.37931 * oldArray[2]) + (0.08045 * oldArray[3]) - 2.08045);
			numArray[1] = ((0.45 * oldArray[0]) + (-0.23 * oldArray[2]) + (0.07 * oldArray[3]) + 0.33);
			numArray[2] = ((0.10185 * oldArray[0]) + (0.72222 * oldArray[3]) - 0.78703);
			numArray[3] = ((0.10126 * oldArray[0]) + (0.11392 * oldArray[1]) + (0.41772 * oldArray[2]) + 2.15189);
		}
		console.log(numArray);
		$('input[data-col=0]').val(((0.79 * numArray[0])+(-0.31 * numArray[1])+(0.72 * numArray[3])).toFixed(5));
		$('input[data-col=1]').val(((-0.56 * numArray[0])+(1 * numArray[1])+(1.31 * numArray[2])+(-0.85 * numArray[3])).toFixed(5));
		$('input[data-col=2]').val(((-0.11 * numArray[0])+(1.08 * numArray[2])+(-0.78 * numArray[3])).toFixed(5));
		$('input[data-col=3]').val(((-0.08 * numArray[0])+(-0.09 * numArray[1])+(-0.33 * numArray[2])+(0.79 * numArray[3])).toFixed(5));


		/*for (var i = 0; i < colCount; i++) {
			for (var k = 0; k < rowCount; k++) {
				$('input[data-col=' + i + '][data-row=' + k + ']').val(numArray[i][k]);
			}
		}*/

		// console.log(numArray[2][0]);

	});

});
