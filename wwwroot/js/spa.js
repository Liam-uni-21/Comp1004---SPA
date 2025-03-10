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
        if (quizData.Answered[page] == false) {
            quizData.AnsweredA[page] = "A1";
            if (quizData.A1[page] == true) {
                document.getElementById("option-11").style.border = "3px solid limegreen";
                document.getElementById("option-11").style.backgroundColor = "limegreen";
                document.getElementById("result-11").innerHTML = "Correct!!";
            } else {
                document.getElementById("option-11").style.border = "3px solid red";
                document.getElementById("option-11").style.backgroundColor = "red";
                document.getElementById("result-11").innerHTML = "Incorrect!!";
            }
            quizData.Answered[page] = true;
        } 
    }
    if (element == document.getElementById("option-12")) {
        if (quizData.Answered[page] == false) { 
            quizData.AnsweredA[page] = "A2";
            if (quizData.A2[page] == true) {
                document.getElementById("option-12").style.border = "3px solid limegreen";
                document.getElementById("option-12").style.backgroundColor = "limegreen";
                document.getElementById("result-12").innerHTML = "Correct!!";
            } else {
                document.getElementById("option-12").style.border = "3px solid red";
                document.getElementById("option-12").style.backgroundColor = "red";
                document.getElementById("result-12").innerHTML = "Incorrect!!";
            }
            quizData.Answered[page] = true;
        }
    }
    if (element == document.getElementById("option-13")) {
        if (quizData.Answered[page] == false) {
            quizData.AnsweredA[page] = "A3";
            if (quizData.A3[page] == true) {
                document.getElementById("option-13").style.border = "3px solid limegreen";
                document.getElementById("option-13").style.backgroundColor = "limegreen";
                document.getElementById("result-13").innerHTML = "Correct!!";
            } else {
                document.getElementById("option-13").style.border = "3px solid red";
                document.getElementById("option-13").style.backgroundColor = "red";
                document.getElementById("result-13").innerHTML = "Incorrect!!";
            }
            quizData.Answered[page] = true;
        }
    }
    if (element == document.getElementById("option-14")) {
        if (quizData.Answered[page] == false) { 
            quizData.AnsweredA[page] = "A4";
            if (quizData.A4[page] == true) {
                document.getElementById("option-14").style.border = "3px solid limegreen";
                document.getElementById("option-14").style.backgroundColor = "limegreen";
                document.getElementById("result-14").innerHTML = "Correct!!";
            } else {
                document.getElementById("option-14").style.border = "3px solid red";
                document.getElementById("option-14").style.backgroundColor = "red";
                document.getElementById("result-14").innerHTML = "Incorrect!!";
            }
            quizData.Answered[page] = true;
        }
    }
}

function updateQuestion() {
    // Reset option styles before applying new data
    let options = ["option-11", "option-12", "option-13", "option-14"];
    options.forEach(optionId => {
        let option = document.getElementById(optionId);
        option.style.border = "1px solid black"; // Default border
        option.style.backgroundColor = "white"; // Reset background
    });

    // Update option values with new question data
    document.getElementById("option-11").value = quizData.Q1Answers[page];
    document.getElementById("option-12").value = quizData.Q1Answers[page + 10];
    document.getElementById("option-13").value = quizData.Q1Answers[page + 20];
    document.getElementById("option-14").value = quizData.Q1Answers[page + 30];
    document.getElementById("QuestionHeader").innerHTML = quizData.Q1Questions[page];

    // Reset results
    document.getElementById("result-11").innerHTML = "";
    document.getElementById("result-12").innerHTML = "";
    document.getElementById("result-13").innerHTML = "";
    document.getElementById("result-14").innerHTML = "";

    // Only apply styles if an answer has been given for this question
    if (quizData.Answered[page] === true) {
        let answerId = quizData.AnsweredA[page];
        let correctAnswerKey = "A" + answerId.charAt(1); // "A1", "A2", etc.

        if (quizData[correctAnswerKey][page] === true) {
            document.getElementById(`option-1${answerId.charAt(1)}`).style.border = "3px solid limegreen";
            document.getElementById(`option-1${answerId.charAt(1)}`).style.backgroundColor = "limegreen";
            document.getElementById(`result-1${answerId.charAt(1)}`).innerHTML = "Correct!!";
        } else {
            document.getElementById(`option-1${answerId.charAt(1)}`).style.border = "3px solid red";
            document.getElementById(`option-1${answerId.charAt(1)}`).style.backgroundColor = "red";
            document.getElementById(`result-1${answerId.charAt(1)}`).innerHTML = "Incorrect!!";
        }
    }
}
