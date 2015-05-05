$(function () {
	var x = parseFloat($('.js-x').val()),
	y = parseFloat($('.js-y').val()),
	xOld = 0,
	yOld = 0;

	$('.js-btn').on('click', function () {
		console.log(x,y);
		while ((Math.abs(x - xOld) > 0.001) && (Math.abs(y - yOld) > 0.001)) {
			xOld = x;
			yOld = y;
			x = 1 - Math.cos(yOld) / 2;
			y = -1 * (1.2 - Math.sin(xOld + 1));
			console.log(x,y);
			$('.js-output').append('x=' + x.toFixed(3) + ', y=' + y.toFixed(3) + '</br>');
		}
		$('.js-output').append('(1)=' + (Math.sin(x + 1) - y).toFixed(3) + ', (2)=' + (2 * x + Math.cos(y)).toFixed(3));
	});

});
