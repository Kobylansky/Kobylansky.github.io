(function() {
    "use strict";
    var testData = {
        caption: "Тест по математике",
        questions: [
            {
                question: "Сколько будет 15+7-10=?",
                answers: ["13", "15", "10", "22", "0"],
                correctAnswers: [true, false, false, false, false]
            },
            {
                question: "Сколько будет 5х5?",
                answers: ["10", "25", "20", "15", "5"],
                correctAnswers: [false, true, false, false, false]
            },
            {
                question: "Сколько будет 10х15?",
                answers: ["1015", "115", "150", "151"],
                correctAnswers: [false, false, true, false]
            },
            {
                question: "Решите уравнение: 125/х=5 Чему равен х?",
                answers: ["5", "10", "25", "100", "23"],
                correctAnswers: [false, false, true, false, false]
            },
            {
                question: "Решите уравнение: 300/х=3 Чему равен х?",
                answers: ["10", "100", "1000", "1"],
                correctAnswers: [false, true, false, false]
            }
        ]
    };
    localStorage.setItem('test-data', JSON.stringify(testData));
})();