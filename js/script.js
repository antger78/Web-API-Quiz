var startQuiz = document.querySelector("#start-quiz-button");
var openingPage = document.querySelector("#main-opening-page");

// startQuiz.addEventListener("click",openingPage.style.display)

startQuiz.onclick = function() {
    if (openingPage.style.display !== 'none') {
        openingPage.style.display = 'none';
    }
    else {
        openingPage.style.display = 'block';
    }
};