function dynamicPageHtml(){
	var body = document.querySelector('body');
	body.style.backgroundColor = 'grey';

	//генерим wrapper
	var divWrapper = document.createElement('div');
	divWrapper.classList.add('wrapper');
	body.appendChild(divWrapper);

	//Тест по программированию
	var headerWrapper = document.createElement('p');
	headerWrapper.classList.add('head1');
	headerWrapper.innerHTML = 'Тест по программированию';
	divWrapper.appendChild(headerWrapper);
	
	// ***** Вопрос №1 *****
	var question1Wrapper = document.createElement('p');
	question1Wrapper.classList.add('question1Txt');
	question1Wrapper.innerHTML = '1. Вопрос №1';
	divWrapper.appendChild(question1Wrapper);

	//Вопрос №1 checkbox Группа 1
	var label1Question1 = document.createElement('label');
	label1Question1.classList.add('checkbox1Question1');
	divWrapper.appendChild(label1Question1);
	
	var checkbox1Label1 = document.createElement('input');
	checkbox1Label1.classList.add('inputQuestion');
	checkbox1Label1.setAttribute('type', 'checkbox');
	checkbox1Label1.setAttribute('value', 'text');
	label1Question1.appendChild(checkbox1Label1);
	label1Question1.appendChild(document.createTextNode('Вариант ответа №1'));
	
	//Вопрос №2 checkbox Группа 1

	var label1Question2 = document.createElement('label');
	label1Question2.classList.add('checkbox1Question2');
	divWrapper.appendChild(label1Question2);
	
	var checkbox2Label1 = document.createElement('input');
	checkbox2Label1.classList.add('inputQuestion');
	checkbox2Label1.setAttribute('type', 'checkbox');
	checkbox2Label1.setAttribute('value', 'text');
	label1Question2.appendChild(checkbox2Label1);
	label1Question2.appendChild(document.createTextNode('Вариант ответа №2'));

	//Вопрос №3 checkbox Группа 1

	var label1Question3 = document.createElement('label');
	label1Question3.classList.add('checkbox1Question3');
	divWrapper.appendChild(label1Question3);
	
	var checkbox3Label1 = document.createElement('input');
	checkbox3Label1.classList.add('inputQuestion');
	checkbox3Label1.setAttribute('type', 'checkbox');
	checkbox3Label1.setAttribute('value', 'text');
	label1Question3.appendChild(checkbox3Label1);
	label1Question3.appendChild(document.createTextNode('Вариант ответа №3'));


	// ***** Вопрос №2 *****
	var question2Wrapper = document.createElement('p');
	question2Wrapper.classList.add('question2Txt');
	question2Wrapper.innerHTML = '2. Вопрос №2';
	divWrapper.appendChild(question2Wrapper);

	//Вопрос №2 checkbox Группа 2
	var label2Question1 = document.createElement('label');
	label2Question1.classList.add('checkbox2Question1');
	divWrapper.appendChild(label2Question1);
	
	var checkbox1Label2 = document.createElement('input');
	checkbox1Label2.classList.add('inputQuestion');
	checkbox1Label2.setAttribute('type', 'checkbox');
	checkbox1Label2.setAttribute('value', 'text');
	label2Question1.appendChild(checkbox1Label2);
	label2Question1.appendChild(document.createTextNode('Вариант ответа №1'));
	
	//Вопрос №2 checkbox Группа 2

	var label2Question2 = document.createElement('label');
	label2Question2.classList.add('checkbox2Question2');
	divWrapper.appendChild(label2Question2);
	
	var checkbox2Label2 = document.createElement('input');
	checkbox2Label2.classList.add('inputQuestion');
	checkbox2Label2.setAttribute('type', 'checkbox');
	checkbox2Label2.setAttribute('value', 'text');
	label2Question2.appendChild(checkbox2Label2);
	label2Question2.appendChild(document.createTextNode('Вариант ответа №2'));

	//Вопрос №3 checkbox Группа 2

	var label2Question3 = document.createElement('label');
	label2Question3.classList.add('checkbox2Question3');
	divWrapper.appendChild(label2Question3);
	
	var checkbox3Label2 = document.createElement('input');
	checkbox3Label2.classList.add('inputQuestion');
	checkbox3Label2.setAttribute('type', 'checkbox');
	checkbox3Label2.setAttribute('value', 'text');
	label2Question3.appendChild(checkbox3Label2);
	label2Question3.appendChild(document.createTextNode('Вариант ответа №3'));
	
	// ***** Вопрос №3 *****
	var question3Wrapper = document.createElement('p');
	question3Wrapper.classList.add('question3Txt');
	question3Wrapper.innerHTML = '3. Вопрос №3';
	divWrapper.appendChild(question3Wrapper);

	//Вопрос №1 checkbox Группа 3
	var label3Question1 = document.createElement('label');
	label3Question1.classList.add('checkbox3Question1');
	divWrapper.appendChild(label3Question1);
	
	var checkbox1Label3 = document.createElement('input');
	checkbox1Label3.classList.add('inputQuestion');
	checkbox1Label3.setAttribute('type', 'checkbox');
	checkbox1Label3.setAttribute('value', 'text');
	label3Question1.appendChild(checkbox1Label3);
	label3Question1.appendChild(document.createTextNode('Вариант ответа №1'));
	
	//Вопрос №2 checkbox Группа 3

	var label3Question2 = document.createElement('label');
	label3Question2.classList.add('checkbox3Question2');
	divWrapper.appendChild(label3Question2);
	
	var checkbox2Label3 = document.createElement('input');
	checkbox2Label3.classList.add('inputQuestion');
	checkbox2Label3.setAttribute('type', 'checkbox');
	checkbox2Label3.setAttribute('value', 'text');
	label3Question2.appendChild(checkbox2Label3);
	label3Question2.appendChild(document.createTextNode('Вариант ответа №2'));

	//Вопрос №3 checkbox Группа 3

	var label3Question3 = document.createElement('label');
	label3Question3.classList.add('checkbox3Question3');
	divWrapper.appendChild(label3Question3);
	
	var checkbox3Label3 = document.createElement('input');
	checkbox3Label3.classList.add('inputQuestion');
	checkbox3Label3.setAttribute('type', 'checkbox');
	checkbox3Label3.setAttribute('value', 'text');
	label3Question3.appendChild(checkbox3Label3);
	label3Question3.appendChild(document.createTextNode('Вариант ответа №3'));

	// ****************************************************
	// *** Подключаем кнопку "Проверить мои результаты" ***
	// ****************************************************

	var mybutton = document.createElement('button');
	mybutton.setAttribute('type', 'button');
	mybutton.classList.add("btn", "btn-primary");
	mybutton.innerHTML = 'Проверить мои результаты';
	divWrapper.appendChild(mybutton);
}

dynamicPageHtml();//вуаля и все готово
