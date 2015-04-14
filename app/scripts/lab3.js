$(function () {
	var x = 0.001,
		xPrev = 1;
	$('.js-btn').on('click', function () {
		while (Math.abs(x-xPrev) > 0.0001) {
			xPrev = x;
			x = xPrev - (1000000 * Math.pow(x,4) - 3000 * Math.pow(x,3) + 10000002 * Math.pow(x,2) - 3000 * x + 2) / (4000000 * Math.pow(x,3) - 9000 * Math.pow(x,2) + 500001 * x - 750);
			console.log('iteration:'+x);
		}
	});
});
