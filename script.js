const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const aText = document.getElementById('a-text')
const bText = document.getElementById('b-text')
const cText = document.getElementById('c-text')
const dText = document.getElementById('d-text')
const submitBtn = document.getElementById('submit')

const quizData = [
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

let currentQuestion = 0
let score = 0

startQuiz()

function startQuiz() {
    unselectAnswer()

    const currentQuestionData = quizData[currentQuestion]

    questionEl.innerText = currentQuestionData.question
    aText.innerText = currentQuestionData.a
    bText.innerText = currentQuestionData.b
    cText.innerText = currentQuestionData.c
    dText.innerText = currentQuestionData.d 
}

function unselectAnswer() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected()

    if(answer) {
        if(answer === quizData[currentQuestion].correct) {
            score++
        }

        currentQuestion++

        if(currentQuestion < quizData.length) {
            startQuiz()
        } else {
            quiz.innerHTML = `<h2>Your score is ${score}/${quizData.length}</h2>
            <div class="review" id="review">
                <ol>
                    <li>${quizData[0].question} <br> <span style="font-weight: bold;">Ans: ${quizData[0].correct}</span></li>
                    <li>${quizData[1].question} <br> <span style="font-weight: bold;">Ans: ${quizData[1].correct}</span></li>
                    <li>${quizData[2].question} <br> <span style="font-weight: bold;">Ans: ${quizData[2].correct}</span></li>
                    <li>${quizData[3].question} <br> <span style="font-weight: bold;">Ans: ${quizData[3].correct}</span></li>
                </ol>
            </div>

            <div class="btns">
            <button class="restart" onclick="location.reload()">Restart</button>
            <button class="restart" id="review-btn" onclick="review()">Review answers</button>
            </btn>`
        }
    }
})

function review() {
    const review = document.getElementById("review")
    const reviewBtn = document.getElementById("review-btn")

    reviewBtn.addEventListener("click", () => {
        review.style.display = "block"}
    )
}

