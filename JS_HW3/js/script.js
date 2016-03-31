var wTimeMs = document.getElementById('miliSeconds');
var wTimes = document.getElementById('times');
var buttonStart = document.getElementById('butStart');
var buttonPause = document.getElementById('butPause');
var buttonContinue = document.getElementById('butContinue');
var buttonClear = document.getElementById('butClear');

var miliMs =0;
var Second = 0;
var Minutes = 0;
var Hours = 0;

var initial = 0; //aрбитр для кнопок

function updateTime(h,m,s,ms){

	//допишем 0, где нужно
	if (Second < 10) s = '0' + s;
	if (Minutes < 10) m = '0' + m;
	if (Hours < 10) h = '0' + h;

	//выводим на экран
	wTimes.innerHTML = h + ':' + m + ':' + s;
	wTimeMs.innerHTML = ms;
}

function statusButton(start, pause, contin) {
	if (start == 1) {
		buttonStart.style.display='block';
	}
	else
	{
		buttonStart.style.display='none';
	}
	if (pause== 1) {
		buttonPause.style.display='block';
	}
	else
	{
		buttonPause.style.display='none';
	}
	if (contin == 1) {
		buttonContinue.style.display='block';
	}
	else
	{
		buttonContinue.style.display='none';
	}
}

function clearTime() {
	wTimes.innerHTML = '00:00:00';
	wTimeMs.innerHTML = '0';
	clearInterval(timerId);
	initial = 0;
	statusButton(1,0,0);
}

function calculationTime() {
	if (initial == 2) return false; //активирована пауза
	
	miliMs = miliMs + 10;

	// секунда прошла
	if (miliMs == 1000) { 
		Second++;
		miliMs = 0;
		console.log(initial);
	}

	// минута прошла
	if (Second == 60) { 
		Minutes++;
		Second = 0;
		miliMs = 0;
	}

	// час прошел
	if (Minutes == 60) { 
		Hours++;
		Hours = 0;
		Minutes = 0;
		miliMs = 0;
	}	

	updateTime(Hours, Minutes, Second, miliMs); //выводим текущие значения на экран

	// прячем кнопки
	if (initial == 1) statusButton(0,1,0);
}
	

	
if (initial == 0) statusButton(1,0,0);

buttonStart.onclick = function() {
	initial = 1;
	timerId = setInterval(calculationTime, 10); //запуск таймера
}

buttonPause.onclick = function() {
	initial = 2;
	statusButton(0,0,1);
}


buttonContinue.onclick = function() {
	initial = 1;
	statusButton(0,1,0);
}

buttonClear.onclick = function() {
	clearTime();
}




