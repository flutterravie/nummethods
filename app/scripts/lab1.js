$(function () {
	var numArray = [], // массив чисел
		colCount = 4, // количество столбцов
		rowCount = 3, // количество строк
		x = []; // массив значений x

	// задаём первоначальные значения
	for (var i = 0; i < colCount; i++) {
		numArray[i] = [];
		x[i] = 0;
	}

	// arr[столбец][строка]

	// функция для деления всей строки inp на число в колонке inp
	function simplify(inp) {
		var firstNum = numArray[inp][inp]; // запоминаем это число
		for (var i = 0; i < colCount; i++) {
			numArray[i][inp] = (numArray[i][inp] / firstNum).toFixed(5); // делим всю строку и оставляем 5 знаков после запятой
			// console.log(numArray[i][inp]);
		}
	}

	// функция, умножающая строку inp1 на первое число в строке inp2 (с учётом нуля)
	// и вычитающая результат умножения из строки inp2
	function subtract(inp1, inp2) {
		var subArray = []; // массив для умножения строки; исходную строку не трогаем
		var firstNum = numArray[inp1][inp2]; // запоминаем первое число
		for (var i = 0; i < colCount; i++) {
			subArray[i] = numArray[i][inp1] * firstNum; // умножаем
			numArray[i][inp2] = numArray[i][inp2] - subArray[i]; // вычитаем
			// console.log(numArray[i][inp2]);
		}
	}

	// функция, срабатывающая при нажатии на кнопку с классом .js-btn
	$('.js-btn').on('click', function () {
		// считывание элементов исходной матрицы
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

		// вывод элементов изменённой матрицы
		for (var i = 0; i < colCount; i++) {
			for (var k = 0; k < rowCount; k++) {
				$('input[data-col=' + i + '][data-row=' + k + ']').val(numArray[i][k]);
			}
		}

		// console.log(numArray[2][0]);

		// вычисление x
		for (var i = (rowCount - 1); i > -1; i--) {
			x[i] = numArray[colCount - 1][i]; // сначала присваиваем x значение самого правого элемента строки
			for (var k = (rowCount - 1); k > i; k--) {
				x[i] = x[i] - (numArray[k][i] * x[k]); // затем отнимаем произведение необходимое количество раз
			}
			x[i] = parseFloat(x[i]).toFixed(5); // 5 знаков после запятой
			$('[data-x=' + (i + 1) + ']').text(x[i]); // выводим x
		}

	});

});
