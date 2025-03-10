$(document).ready(function () {
    $('#quiz').click(function () {
        $('#page-content-wrapper').load('quiz.html');
    })
});
$(document).ready(function () {
    $('#flashcards').click(function () {
        $('#page-content-wrapper').load('flashcards.html');
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
function displayAnswer1(element) {
    if (element == document.getElementById("option-11")) {
        if (quizData.A1[page] == true) {
            document.getElementById("option-11").style.border = "3px solid limegreen";
            document.getElementById("option-11").style.backgroundColor = "limegreen";
            document.getElementById("result-11").innerHTML = "Correct!!";
        } else {
            document.getElementById("option-11").style.border = "3px solid red";
            document.getElementById("option-11").style.backgroundColor = "red";
            document.getElementById("result-11").innerHTML = "Incorrect!!";
        }
    }
    if (element == document.getElementById("option-12")) {
        if (quizData.A2[page] == true) {
            document.getElementById("option-12").style.border = "3px solid limegreen";
            document.getElementById("option-12").style.backgroundColor = "limegreen";
            document.getElementById("result-12").innerHTML = "Correct!!";
        } else {
            document.getElementById("option-12").style.border = "3px solid red";
            document.getElementById("option-12").style.backgroundColor = "red";
            document.getElementById("result-12").innerHTML = "Incorrect!!";
        }
    }
    if (element == document.getElementById("option-13")) {
        if (quizData.A3[page] == true) {
            document.getElementById("option-13").style.border = "3px solid limegreen";
            document.getElementById("option-13").style.backgroundColor = "limegreen";
            document.getElementById("result-13").innerHTML = "Correct!!";
        } else {
            document.getElementById("option-13").style.border = "3px solid red";
            document.getElementById("option-13").style.backgroundColor = "red";
            document.getElementById("result-13").innerHTML = "Incorrect!!";
        }
    }
    if (element == document.getElementById("option-14")) {
        if (quizData.A4[page] == true) {
            document.getElementById("option-14").style.border = "3px solid limegreen";
            document.getElementById("option-14").style.backgroundColor = "limegreen";
            document.getElementById("result-14").innerHTML = "Correct!!";
        } else {
            document.getElementById("option-14").style.border = "3px solid red";
            document.getElementById("option-14").style.backgroundColor = "red";
            document.getElementById("result-14").innerHTML = "Incorrect!!";
        }
    }
}

function updateQuestion() {
    document.getElementById("option-11").value = quizData.Q1Answers[page];
    document.getElementById("option-12").value = quizData.Q1Answers[page + 10];
    document.getElementById("option-13").value = quizData.Q1Answers[page + 20];
    document.getElementById("option-14").value = quizData.Q1Answers[page + 30];
    document.getElementById("QuestionHeader").innerHTML = quizData.Q1Questions[page];
}