var currentQuestionIndex = 0;
var startQuiz = document.querySelector("#start-quiz-button");
var openingPage = document.querySelector("#main-opening-page");
var questionsPage = document.querySelector("#questions-page");
var timerId; 
var timer = document.querySelector("#timer");
var remainingTime = 60;
var questionIndex = 0;
var questionHeader = document.querySelector ("#question");
var questionChoices = document.querySelector ("#choices");
var questions = [
    {
        "question": "First Question",
        "answers": ["a","b","c","d"],
        "correct index": 0
    },
    {
        "question": "Second Question",
        "answers": ["a","b","c","d"],
        "correct index": 0
    },
    {
        "question": "Third Question",
        "answers": ["a","b","c","d"],
        "correct index": 0
    },
];

function endTheQuiz (){
    // tbd
}

function secondHandler (){
    remainingTime--;
    timer.innerHTML = "Remaining Time = " + remainingTime;
    if (remainingTime<=0){
        endTheQuiz();
    };
}

function choiceClick (){
    // tbd
}

function getNextQuestion (){
    console.log ("in get nextQuestion");
    let nextQuestion = questions [questionIndex];
    questionHeader.innerHTML = nextQuestion.question;
    questionChoices.innerHTML = "";
    nextQuestion.answers.forEach (function(answer, i){
        let answerBtn = document.createElement("button");
        answerBtn.setAttribute ("class", answer);
        answerBtn.setAttribute ("value", answer);
        answerBtn.innerHTML = i+1 + ". " + answer;
        answerBtn.onclick = choiceClick; 
        questionChoices.appendChild (answerBtn);
    });
} 

startQuiz.onclick = function createCurrentQuestion(){
    if(currentQuestionIndex < questions.length) {
        console.log(questions[currentQuestionIndex].question)
    };
        openingPage.style.display = 'none';
        questionsPage.removeAttribute ("class");
        timerId = setInterval (secondHandler, 1000);
        timer.innerHTML = "Remaining Time = " + remainingTime;
        getNextQuestion();
};

// startQuiz.onclick = function() {
//     if (openingPage.style.display !== 'none') {
//         openingPage.style.display = 'none';
//     }
//     else {
//         openingPage.style.display = 'block';
//     };

// };

// var count = 60, timer = setInterval(function() {
//     $("#60sec").html(count--);
//     if(count == 1) clearInterval(timer);
// }, 1000);

// setInterval(myTimer, 1000);

// function myTimer() {
//   const d = new Date();
//   document.getElementById("60sec").innerHTML = d.toLocaleTimeString();
// }

// console.log(questions);

// var question1 = document.querySelector("#question-1-page");
// question1.style.display = "none";

// startQuiz.addEventListener("click",openingPage.style.display)

// startQuiz.onclick = function() {
//     if (question1.style.display !== 'none') {
//         question1.style.display = 'block';
//     }
//     else {
//         question1.style.display = 'none';
//     };
// };


//     function (){
// if(openingPage.style.display == 'none'){
//     question1.style.display == "block";
// }
// else{
//     question1.style.display == "none";
// }
// };

// function startCountdown(seconds) {
//     let counter = seconds;
      
//     const interval = setInterval(() => {
//       console.log(counter);
//       counter--;
        
//       if (counter < 0 ) {
//         clearInterval(interval);
//         console.log('Ding!');
//       }
//     }, 1000);
//   };