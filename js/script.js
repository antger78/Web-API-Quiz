var currentQuestionIndex = 0;
var startQuiz = document.querySelector("#start-quiz-button");
var openingPage = document.querySelector("#main-opening-page");
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

startQuiz.onclick = function createCurrentQuestion(){
    if(currentQuestionIndex < questions.length) {
        console.log(questions[currentQuestionIndex].question)
    };
    if (openingPage.style.display !== 'none') {
        openingPage.style.display = 'none';
    }
    else {
        openingPage.style.display = 'block';
    };
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