$(function () {
	var k2,
		k1,
		k0,
		z1,
		z2,
		z3,
		x1 = parseFloat($('.js-x1').val()),
		x2 = parseFloat($('.js-x2').val()),
		x3 = parseFloat($('.js-x3').val()),
		y1 = parseFloat($('.js-y1').val()),
		y2 = parseFloat($('.js-y2').val()),
		y3 = parseFloat($('.js-y3').val()),
		$log = $('.js-log');

	$('.js-start').on('click', function () {
		z1 = y1 / ((x1 - x2) * (x1 - x3));
		z2 = y2 / ((x2 - x1) * (x2 - x3));
		z3 = y3 / ((x3 - x1) * (x3 - x2));

		k2 = z1 + z2 + z3;
		k1 = z1 * (x2 + x3) + z2 * (x1 + x3) + z3 * (x1 + x2);
		k0 = z1 * x2 * x3 + z2 * x1 * x3 + z3 * x1 * x2;

		$log.append('(' + k2.toFixed(4) + ')•x² + (' + k1.toFixed(4) + ')•x + (' + k0.toFixed(4) + ')');
	});
});
