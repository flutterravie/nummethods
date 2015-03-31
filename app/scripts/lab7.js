$(function () {
	var downLimit, // нижний предел интегрирования
	upLimit, // верхний предел интегрирования
	step, // шаг интегрирования
	subSum, // сумма при i
	sum; // площадь

	$('.js-start').on('click', function () {
		downLimit = parseFloat($('.js-down-limit').val());
		upLimit = parseFloat($('.js-up-limit').val());
		step = parseFloat($('.js-step').val());
		sum = 0;

		$('.js-sum').empty();
		$('.js-sum').append('<span>S = ' + step + ' * (</span>');

		for (var i = 1; i <= ((upLimit - downLimit) / step); i++) {
			subSum = Math.abs(downLimit + (step * i) - (step / 2)); // находим сумму при определённом i
			// subSum = 1/(1 - (downLimit + (step * i) - (step / 2))); // функция из примера
			sum = sum + subSum; // прибавляем её к площади
			$('.js-sum').append('<span>' + subSum + '</span>');
			if (i < ((upLimit - downLimit) / step)) {
				$('.js-sum').append('<span> + </span>');
			};
		}

		sum = (sum * step).toFixed(5);
		$('.js-sum').append('<span>) = ' + sum + '</span>');
	});
});
