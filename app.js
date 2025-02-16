const questions = [
    {
        question: "What does HTML stands for",
        answers:[
            {text:"Hypertext Mark slang", correct: false },
            {text:"Hypertext Markup language", correct: true },
            {text:"Hypertext Marksman language", correct: false },
            {text:"Hyper Markup language", correct: false },
        ]
    },
    {
        question: "What does CSS stands for",
        answers:[
            {text:"stylesheet", correct: false },
            {text:"Hyper style sheet", correct: false },
            {text:"Cascading Style sheet", correct: true },
            {text:"Styling", correct: false },
        ]
    },
    {
        question: "What is the most popular programming language",
        answers:[
            {text:"Jquery", correct: false },
            {text:"Python", correct: true },
            {text:"Java", correct: false },
            {text:"CSS", correct: false },
        ]
    },
    {
        question: "Which is not a backend language",
        answers:[
            {text:"Jquery", correct: true },
            {text:"Python", correct: false },
            {text:"Java", correct: false },
            {text:"CSS", correct: false },
        ]
    },
    {
        question: "Which of this a frontend language",
        answers:[
            {text:"React", correct: true },
            {text:"Python", correct: false },
            {text:"Java", correct: false },
            {text:"Node Js", correct: false },
        ]
    },
]

const questionEL = document.getElementById('question')
const answerEL = document.getElementById('ans-btn')
const nextBtnEL = document.getElementById('next-btn')
const scoreEL = document.getElementById('score')

let currentQuestionIndex = 0;
let score = 0;
  
function startQuiz(){
    currentQuestionIndex = 0;
    score: 0;
    nextBtnEL.innerHTML = 'Next';
    showQuestion();
            
}

function showQuestion(){
    resetState();

    let currentQuestion = questions[currentQuestionIndex]
    let questionNum = currentQuestionIndex + 1;
    questionEL.innerText = `${questionNum}. ${currentQuestion.question}`

    currentQuestion.answers.forEach(answer => {
     const button = document.createElement('button');
     button.innerHTML = answer.text
     button.classList.add('btn')
     answerEL.appendChild(button)

     if(answer.correct){
        button.dataset.correct = answer.correct;
     }

     button.addEventListener('click', selectAns)
    })
}

function resetState(){
    nextBtnEL.style.display = "none"
    while(answerEL.firstChild){
        answerEL.removeChild(answerEL.firstChild)
    }
        
}


function selectAns(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';

    if(isCorrect){
        selectedBtn.classList.add("correct")
        score++;
     
    }else{
        selectedBtn.classList.add("incorrect")
    }

    Array.from(answerEL.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }else{
            button.disabled = true;
        }
    });

    nextBtnEL.style.display = 'block';
}


function showScore(){
    resetState();
    questionEL.innerHTML = `Your Scored ${score} out of ${questions.length}`
   nextBtnEL.innerHTML = "Play Again";
    nextBtnEL.style.display = "block"
}

function handleNextBtn(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextBtnEL.addEventListener('click', () => {
    if(currentQuestionIndex < questions.length){
        handleNextBtn();
    }else{
        startQuiz()
    }
})

startQuiz()




