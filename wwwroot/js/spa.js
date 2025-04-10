$(document).ready(function () {
    $('#quiz').click(function () {
        $('#page-content-wrapper').load('quizhome.html');
    })
});
$(document).ready(function () {
    $('#flashcards').click(function () {
        $('#page-content-wrapper').load('flashcardhome.html');
    })
});
$(document).ready(function () {
    $('#dashboard').click(function () {
        $('#page-content-wrapper').load('dashboard.html');
    })
});
$(document).ready(function () {
    $('#home').click(function () {
        $('#page-content-wrapper').load('home.html');
    })
});

// Quiz functionality
function displayAnswer(element) {
    let selectedQuiz = localStorage.getItem("selectedQuiz");
    let progressKey = `quizProgress_${selectedQuiz}`;

    let selectedOption = "";
    if (element == document.getElementById("option-11")) selectedOption = "A1";
    if (element == document.getElementById("option-12")) selectedOption = "A2";
    if (element == document.getElementById("option-13")) selectedOption = "A3";
    if (element == document.getElementById("option-14")) selectedOption = "A4";

    if (!quizData.Answered[page]) {
        quizData.AnsweredA[page] = selectedOption;
        quizData.Answered[page] = true;

        localStorage.setItem(progressKey, JSON.stringify(quizData));

        let correctAnswerKey = selectedQuiz + selectedOption;
        let isCorrect = quizData[correctAnswerKey][page];

        let optionId = `option-1${selectedOption.charAt(1)}`;
        document.getElementById(optionId).style.border = isCorrect ? "3px solid limegreen" : "3px solid red";
        document.getElementById(optionId).style.backgroundColor = isCorrect ? "limegreen" : "red";
        document.getElementById(`result-1${selectedOption.charAt(1)}`).innerHTML = isCorrect ? "Correct!!" : "Incorrect!!";
    }
}
function updateQuestion() {
    let selectedQuiz = localStorage.getItem("selectedQuiz");
    let questionSet = selectedQuiz + "Questions";
    let answerSet = selectedQuiz + "Answers";
    let progressKey = `quizProgress_${selectedQuiz}`;

    let savedProgress = JSON.parse(localStorage.getItem(progressKey));
    if (savedProgress) {
        quizData = savedProgress;
    }

    let options = ["option-11", "option-12", "option-13", "option-14"];
    options.forEach(optionId => {
        let option = document.getElementById(optionId);
        option.style.border = "1px solid black";
        option.style.backgroundColor = "white";
    });

    document.getElementById("QuestionHeader").innerHTML = quizData[questionSet][page];

    document.getElementById("option-11").value = quizData[answerSet][page];
    document.getElementById("option-12").value = quizData[answerSet][page + 10];
    document.getElementById("option-13").value = quizData[answerSet][page + 20];
    document.getElementById("option-14").value = quizData[answerSet][page + 30];

    document.getElementById("result-11").innerHTML = "";
    document.getElementById("result-12").innerHTML = "";
    document.getElementById("result-13").innerHTML = "";
    document.getElementById("result-14").innerHTML = "";

    if (quizData.Answered[page] === true) {
        let answerId = quizData.AnsweredA[page];
        let selectedOption = `option-1${answerId.charAt(1)}`;
        let correctAnswerKey = selectedQuiz + answerId;
        let isCorrect = quizData[correctAnswerKey][page];

        document.getElementById(selectedOption).style.border = isCorrect ? "3px solid limegreen" : "3px solid red";
        document.getElementById(selectedOption).style.backgroundColor = isCorrect ? "limegreen" : "red";
        document.getElementById(`result-1${answerId.charAt(1)}`).innerHTML = isCorrect ? "Correct!!" : "Incorrect!!";
    }
}