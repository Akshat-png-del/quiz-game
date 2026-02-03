const questions = [
    {
        question: "which is the largest animal in the world?",
        answers: [
            { text: "shark", correct: false },
            { text: "Blue whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Giraffe", correct: false},
        ]
    },
    {
         question: "which is the smallest country in the world?",
        answers: [
            { text: "Vatican city", correct: true },
            { text: "Bhutan", correct: false},
            { text: "Nepal", correct: false},
            { text: "Shri lanka", correct: false},
        ]
},
{ 
    question: "which is the largest desert in the world?",
        answers: [
            { text: "Kalahari", correct: false },
            { text: "Gobi", correct: false},
            { text: "Sahara", correct: false},
            { text: "Antarctica", correct: true},
        ]
    },
    {
         question: "which is the Smallest Continent in the world?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Australia", correct: true},
            { text: "Artic", correct: false},
            { text: "Africa", correct: false},
        ]
    },
    {
    question: "which is the longest river in the world?",
    answers: [
        { text: "Amazon", correct: false },
        { text: "Nile", correct: true },
        { text: "Yangtze", correct: false },
        { text: "Mississippi", correct: false },
    ]
},
{
    question: "which is the highest mountain in the world?",
    answers: [
        { text: "K2", correct: false },
        { text: "Mount Everest", correct: true },
        { text: "Kangchenjunga", correct: false },
        { text: "Makalu", correct: false },
    ]
},
{
    question: "which is the largest ocean in the world?",
    answers: [
        { text: "Atlantic Ocean", correct: false },
        { text: "Indian Ocean", correct: false },
        { text: "Arctic Ocean", correct: false },
        { text: "Pacific Ocean", correct: true },
    ]
},
{
    question: "which is the smallest planet in the solar system?",
    answers: [
        { text: "Mars", correct: false },
        { text: "Mercury", correct: true },
        { text: "Venus", correct: false },
        { text: "Earth", correct: false },
    ]
},
{
    question: "which is the fastest land animal in the world?",
    answers: [
        { text: "Leopard", correct: false },
        { text: "Cheetah", correct: true },
        { text: "Lion", correct: false },
        { text: "Tiger", correct: false },
    ]
},
{
    question: "which is the largest continent in the world?",
    answers: [
        { text: "Africa", correct: false },
        { text: "Europe", correct: false },
        { text: "Asia", correct: true },
        { text: "North America", correct: false },
    ]
}
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.dataset.correct = answer.correct;
        button.addEventListener("click",selectAnswer);
        answerButton.appendChild(button);
    })
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextButton.style.display ="block";

}
function showScore(){
    resetState();
    questionElement.innerHTML =`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";

}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();