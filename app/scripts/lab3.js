$(function () {
	var e = 0.0001,
		xAdd,
		xPrev = 0,
		x1 = parseFloat($('.js-x1').val()),
		x2 = parseFloat($('.js-x2').val()),
		$log = $('.js-log');

	$('.js-btn').on('click', function () {
		$log.append('Метод Ньютона:</br>');
		while (Math.abs(x1 - xPrev) > e) {
			xPrev = x1;
			x1 = x1 - (x1 * x1 * x1 * x1 - 0.015 * x1 * x1 * x1 + 0.3 * x1 * x1 + x1 - 1) / (4 * x1 * x1 * x1 - 0.045 * x1 * x1 + 0.6 * x1 + 1)
			$log.append('x1 = ' + x1.toFixed(4) + '</br>');
		}

		xPrev = 0;
		while (Math.abs(x2 - xPrev) > e) {
			xPrev = x2;
			x2 = x2 - (x2 * x2 * x2 * x2 - 0.015 * x2 * x2 * x2 + 0.3 * x2 * x2 + x2 - 1) / (4 * x2 * x2 * x2 - 0.045 * x2 * x2 + 0.6 * x2 + 1)
			$log.append('x2 = ' + x2.toFixed(4) + '</br>');
		}

		$log.append('</br></br>Метод секущих:</br>');
		x1 = parseFloat($('.js-x1').val());
		xAdd = -1.5;
		xPrev = 0;
		while (Math.abs(x1 - xPrev) > e) {
			xPrev = x1;
			x1 = x1 - (x1 - xAdd) * (x1 * x1 * x1 * x1 - 0.015 * x1 * x1 * x1 + 0.3 * x1 * x1 + x1 - 1) / ((x1 * x1 * x1 * x1 - 0.015 * x1 * x1 * x1 + 0.3 * x1 * x1 + x1 - 1) - (xAdd * xAdd * xAdd * xAdd - 0.015 * xAdd * xAdd * xAdd + 0.3 * xAdd * xAdd + xAdd - 1));
			$log.append('x1 = ' + x1.toFixed(4) + '</br>');
		}

		x2 = parseFloat($('.js-x2').val());
		xAdd = 0.8;
		xPrev = 0;
		while (Math.abs(x2 - xPrev) > e) {
			xPrev = x2;
			x2 = x2 - (x2 - xAdd) * (x2 * x2 * x2 * x2 - 0.015 * x2 * x2 * x2 + 0.3 * x2 * x2 + x2 - 1) / ((x2 * x2 * x2 * x2 - 0.015 * x2 * x2 * x2 + 0.3 * x2 * x2 + x2 - 1) - (xAdd * xAdd * xAdd * xAdd - 0.015 * xAdd * xAdd * xAdd + 0.3 * xAdd * xAdd + xAdd - 1));
			$log.append('x2 = ' + x2.toFixed(4) + '</br>');
		}
	});
});
