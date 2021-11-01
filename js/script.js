var currentQuestionIndex = 0;
var startQuiz = document.querySelector("#start-quiz-button");
var openingPage = document.querySelector("#main-opening-page");

startQuiz.onclick = function createCurrentQuestion(){
    if(currentQuestionIndex < questions.length) {
        console.log(questions[currentQuestionIndex])
    }
};

startQuiz.onclick = function() {
    if (openingPage.style.display !== 'none') {
        openingPage.style.display = 'none';
    }
    else {
        openingPage.style.display = 'block';
    };

};

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