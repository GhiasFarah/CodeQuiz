const questions = [
    {
        question: "What type of language is js?",
        option: {
            0: 'computer programming language',
            1: 'scripting language',
            2: 'spoken language',
            3: 'sign language'
        },
        correct: 'scripting language'
    },
    {
        question: "Which one of these is used to declare a variable?",
        option: {
            0: 'let',
            1: 'const',
            2: 'var',
            3: 'all of the above'
        },
        correct: 'all of the above'
    },
    {
        question: 'What file type do the letters "md" stand for in README.md',
        option: {
            0: 'markdown',
            1: 'mcDouble',
            2: 'mkdir',
            3: 'most definitely'
        },
        correct: 'markdown'
    },
    {
        question: 'What do the letters "css" stand for in a style.css file',
        option: {
            0: 'cascading style sheet',
            1: 'core storage septicle',
            2: 'common standard system',
            3: 'cobble stone slats'
        },
        correct: 'cascading style sheet'
    },
]

let time = 60

const timerEl = document.querySelector('.timer')
const startSection = document.querySelector('.start')
const startBtn = document.querySelector('.startBtn')
const q1 = document.querySelector('.q0')
const q2 = document.querySelector('.q1')
const q3 = document.querySelector('.q2')
const q4 = document.querySelector('.q3')
let isCorrect = true || false
let score = 0
let userScore = {}
let scores
let existnigScores = localStorage.getItem('scores')
console.log(existnigScores)
if (existnigScores){
    scores = localStorage.getItem('scores')
} else {
    scores = []
}

for (let i = 0; i < questions.length; i++) {
    $(`.q${i}`).children('.question').text(questions[i].question)
    $(`.q${i}`).children(`.ans0`).text(questions[i].option[0])
    $(`.q${i}`).children(`.ans1`).text(questions[i].option[1])
    $(`.q${i}`).children(`.ans2`).text(questions[i].option[2])
    $(`.q${i}`).children(`.ans3`).text(questions[i].option[3])

    $(`.q${i}`).children(`.ans0`).click(function (e) {
        e.preventDefault()
        console.log(e.target.innerHTML)
        document.querySelector(`.q${i}`).style = "display: none;"
        if (e.target.innerHTML != questions[i].correct) {
            console.log("WRONG!!!!")
            isCorrect = false
        } else { isCorrect = true }
        if (i != 3) {
            document.querySelector(`.q${i + 1}`).style = "display: block;"
        } else {

            localStorage.setItem('scores', scores)
            window.location.replace('file:///C:/Users/Farah/OneDrive/Desktop/code/BootCamp/Challenges/CodeQuiz/highscores.html')
        }
    })
    $(`.q${i}`).children(`.ans1`).click(function (e) {
        e.preventDefault()
        console.log(e.target.innerHTML)
        document.querySelector(`.q${i}`).style = "display: none;"
        if (e.target.innerHTML != questions[i].correct) {
            console.log("WRONG!!!!")
            isCorrect = false
        } else { isCorrect = true }
        if (i != 3) {
            document.querySelector(`.q${i + 1}`).style = "display: block;"
        } else {

            localStorage.setItem('scores', scores)
            window.location.replace('file:///C:/Users/Farah/OneDrive/Desktop/code/BootCamp/Challenges/CodeQuiz/highscores.html')
        }
    })
    $(`.q${i}`).children(`.ans2`).click(function (e) {
        e.preventDefault()
        console.log(e.target.innerHTML)
        document.querySelector(`.q${i}`).style = "display: none;"
        if (e.target.innerHTML != questions[i].correct) {
            console.log("WRONG!!!!")
            isCorrect = false
        } else { isCorrect = true }
        if (i != 3) {
            document.querySelector(`.q${i + 1}`).style = "display: block;"
        } else {

            localStorage.setItem('scores', scores)
            window.location.replace('file:///C:/Users/Farah/OneDrive/Desktop/code/BootCamp/Challenges/CodeQuiz/highscores.html')
        }
    })
    $(`.q${i}`).children(`.ans3`).click(function (e) {
        e.preventDefault()
        console.log(e.target.innerHTML)
        document.querySelector(`.q${i}`).style = "display: none;"
        if (e.target.innerHTML != questions[i].correct) {
            console.log("WRONG!!!!")
            isCorrect = false
        } else { isCorrect = true }
        if (i != 3) {
            document.querySelector(`.q${i + 1}`).style = "display: block;"
        } else {

            localStorage.setItem('scores', scores)
            window.location.replace('file:///C:/Users/Farah/OneDrive/Desktop/code/BootCamp/Challenges/CodeQuiz/highscores.html')
        }
    })

}
if (q1) {

    q1.style = "display: none"
}
if (q1) {

    q2.style = "display: none"
}
if (q1) {

    q3.style = "display: none"
}
if (q1) {

    q4.style = "display: none"
}
if (timerEl) {

    timerEl.style = 'display: none;';
}

if (startBtn) {

    startBtn.addEventListener('click', function () {
        let timeleft = time;
        const timer = setInterval(function () {
            if (timeleft <= 0) {
                clearInterval(timer);
            }

            timerEl.textContent = 'Time: ' + timeleft;
            timeleft -= 1;
            score = timeleft
            
            userScore.score = timeleft
            localStorage.setItem('score', score)
            if (!isCorrect) {
                timeleft -= 10
                isCorrect = true || false
            }
        }, 1000);
        document.querySelector('.highscores_nav').style = 'display: none;';
        timerEl.style = 'display: block;';
        startSection.style = 'display: none;';
        q1.style = "display: block";
    })
}