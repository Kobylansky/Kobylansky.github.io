

function math_pow(base, exponent) {
	var res = base; 
	console.log('base=', base);
	console.log('exponent=', exponent);
	for (var i = 1; i <= exponent - 1; i++) {
			res = res * base;
		}
		return res;
}


var base = prompt('Введите число:', '1');
if (base == 0) {
	alert('Результат будет 0!');
}
//проверка, число целое?
if (parseInt(base) != base) {
    alert("Введеное число дробное!");
} else {
	//число целое, введем степерь и проверим правильность ввода
	var exponent = prompt('Введите число:', '2');
	if (exponent <= 0){
		alert('Степень отрицательная или равна 0');
	}
	if ( parseInt( exponent ) != exponent ) {
    alert("Введеное число дробное!");
	} else {
		console.log('resultat=', math_pow(base, exponent));
	}
}
