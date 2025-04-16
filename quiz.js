const questionText = document.getElementById("question-text");
const choicesBtn = document.getElementById("choices");
const questionContainer = document.getElementById("container");

let currentQuestion = 0;

const questions = [
    {
        question: "Maitim ba si Jeremy?",
        answers: [
            { text: "Oo", correct: true},
            { text: "Hindi", correct: false},
            { text: "Medyo", correct: false},
            { text: "50/50", correct: false},
        ]
    },
    {
        question: "Maputi ba si Aron?",
        answers: [
            { text: "Oo", correct: false},
            { text: "Hindi", correct: true},
            { text: "Medyo", correct: false},
            { text: "50/50", correct: false},
        ]
    },
    {
        question: "Sino ang walang natulong sa SYSARC?",
        answers: [
            { text: "Aron", correct: true},
            { text: "Aron", correct: true},
            { text: "Aron", correct: true},
            { text: "Aron", correct: true},
        ]
    },
    {
        question: "Ano ano ang natulong ni Aron sa groupings?",
        answers: [
            { text: "Wala", correct: true},
            { text: "Wala", correct: true},
            { text: "Wala", correct: true},
            { text: "Wala", correct: true},
        ]
    },
    {
        question: "Bakit hindi siya tumulong?",
        answers: [
            { text: "Tinatamad", correct: true},
            { text: "Walang alam", correct: true},
            { text: "Walang oras", correct: true},
            { text: "Walang pakialam", correct: true}
        ]
    }
];

function showQuestion(question) {
    questionText.innerText = question.question;
    choicesBtn.innerHTML = "";

    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        choicesBtn.appendChild(button);

        button.addEventListener("click", () => {
            if (answer.correct) {
                alert("Correct!");
            } else {
                alert("Wrong!");
            }
            currentQuestion++;
            if (currentQuestion < questions.length) {
                showQuestion(questions[currentQuestion]);
            } else {
                questionContainer.innerHTML = "<h1>Ang galing mo!</h1>";
            }
        })
    })
}

showQuestion(questions[currentQuestion]);