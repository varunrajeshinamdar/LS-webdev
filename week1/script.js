const quizData = [
    {
        question: "Which of the following is an epic rarity card?",
        choices: {
            A: "Knight",
            B: "Lumberjack",
            C: "Goblin barrel",
            D: "Ice spirit"
        },
        correctAnswer: "C"
    },
    {
        question: "Which is the latest tower troop which has come in the game?",
        choices: {
            A: "Canoneer",
            B: "Dagger duchess",
            C: "Princess tower",
            D: "Goblin queen"
        },
        correctAnswer: "D"
    },
    {
        question: "Which of the following troops doesnt have an evolution yet?",
        choices: {
            A: "Giant",
            B: "Royal giant",
            C: "Firecracker",
            D: "Bomber"
        },
        correctAnswer: "A"
    }
];

// Initialize quiz
let currentQuestion = 0, score = 0;

const quiz = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const submitBtn = document.getElementById('submitBtn');
const resultsElement = document.getElementById('results');

// Function to load question and choices
function loadQuestion() {
    const q = quizData[currentQuestion];
    questionElement.textContent = q.question;
    choiceA.textContent = q.choices.A;
    choiceB.textContent = q.choices.B;
    choiceC.textContent = q.choices.C;
    choiceD.textContent = q.choices.D;
}

// Function to check answer and move to next question
function checkAnswer() {
    const userChoice = document.querySelector('input[name="choice"]:checked');
    if (!userChoice) {
        alert('Please select an answer.');
        return;
    }

    const answer = userChoice.value;
    if (answer === quizData[currentQuestion].correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

// Function to show quiz results
function showResults() {
    quiz.style.display = 'none';
    resultsElement.textContent = `You scored ${score} out of ${quizData.length}`;
    resultsElement.style.display = 'block';
}

// Event listener for submit button
submitBtn.addEventListener('click', checkAnswer);

// Start quiz
loadQuestion();
