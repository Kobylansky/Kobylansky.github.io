$(function(){
	var html = $('#profile').html();
	var data = {
		name: 'Кобылянский Сергей Витальевич',
		image: 'img/foto1.jpg',
		work: 'Студент курсов GoIT',
		target1: 'Это интересно',
		target2: 'Есть перспектива роста',
		target3: 'Это хобби',
		phone: '+380222222222',
		hrefF: 'https://www.facebook.com/profile.php?id=100011275924634',
		hrefFN: 'Мой профиль в facebook',
		feedback: 'Могу забацать сайт :)'
	};
	var content = tmpl(html, data);
	$('body').append(content);

});