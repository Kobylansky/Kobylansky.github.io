
var $links = $('.menu li');
$(function () {

	$links.on('click', function() {
		if ($(this)[0].className == 'tab1'){
			resetDivOpacity(1);
		}
		if ($(this)[0].className == 'tab2'){
			resetDivOpacity(2);
		}
		if ($(this)[0].className == 'tab3'){
			resetDivOpacity(3);
		}
		console.log($(this));
		$(this).css({
			border: '1px solid #7c9ed5',
			'background-color': 'white'
		});
	});
});

function resetDivOpacity(i){
	var $divTabTxt1 = $('.tabTxt1');
	var $divTabTxt2 = $('.tabTxt2');
	var $divTabTxt3 = $('.tabTxt3');

	if (i == 1){
		$divTabTxt1[0].style.opacity = '1';
		$divTabTxt2[0].style.opacity = '0';
		$divTabTxt3[0].style.opacity = '0';
	}
	if (i == 2){
		$divTabTxt1[0].style.opacity = '0';
		$divTabTxt2[0].style.opacity = '1';
		$divTabTxt3[0].style.opacity = '0';
	}
	if (i == 3){
		$divTabTxt1[0].style.opacity = '0';
		$divTabTxt2[0].style.opacity = '0';
		$divTabTxt3[0].style.opacity = '1';
	}

		$('li').css({
		 	border: '1px solid lightgrey',
			'background-color': 'lightgrey'
		 });
}

resetDivOpacity(1); //установим активный и обнулим остальны (прозрачность)


//обработчик form-box
$(function(){
  $('.showhelp').on('click', function(){ 
    $('.tooltip').css('display', 'block');
  });

    $(".input").mouseover(function (){ 
    $(this).next('.tooltip').fadeIn(300); 
    }); 

    $(".input").mouseout(function (){
    $(this).next('.tooltip').fadeOut(50); 
    }); 
});