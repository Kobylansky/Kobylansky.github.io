(function($) {
    "use strict";
    $(function() {
        
        // загрузим данные из localStorage
        var testData = JSON.parse(localStorage.getItem('test-data'));

        initTest();

        // Обработчик закрытия модального окна
        $('.modal-window').on('click', function(e) {
            if(e.target.id === 'btnOk') {
                $(this).css('display', 'none');
                initTest();
            }
        });
       
           
        function initTest() {
            // преобразуем шаблон в HTML
            var listTemplate = $('#test').html();
            var listHTML = tmpl(listTemplate, testData);
            $('.quiz').html(listHTML);
            // обработчики событий
            $('#btnCheckResult').on('click', checkResultEvent);
        }

        function checkResultEvent() {
            var total = testData.questions.length;
            var correct = 0;
            
            for(var curQuestionInd = 0; curQuestionInd < total; curQuestionInd++) {
                var $questionCheckBoxes = $('#quiz-q'+(curQuestionInd+1)+' input[type="checkbox"]');
                var curQuestion = testData.questions[curQuestionInd];
                var wrongAnswer = false;

                for(var curOptionInd = 0; curOptionInd < curQuestion.correctAnswers.length; curOptionInd++) {
                    // Выполняем проверку: если есть правильный и есть еще галки не защитываем
                    if($questionCheckBoxes[curOptionInd].checked !== curQuestion.correctAnswers[curOptionInd]) {
                        wrongAnswer = true;
                        break;
                    }
                }
                correct += !wrongAnswer;
            }

            // отобразим результат
            $('#correct-count').html(correct);
            $('#total-count').html(total);
            $('.modal-window').css('display', 'block');
        }
    });
})(jQuery);