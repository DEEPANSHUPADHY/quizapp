const quizData = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
    correct: 1
  },
  {
    question: "Which language runs in the browser?",
    options: ["Python", "C++", "Java", "JavaScript"],
    correct: 3
  },
  {
    question: "HTML stands for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlinks Text Mark Language",
      "None of these"
    ],
    correct: 0
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.querySelectorAll(".option");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");

loadQuestion();

function loadQuestion() {
  nextBtn.style.display = "none";
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;

  optionsEl.forEach((btn, index) => {
    btn.textContent = q.options[index];
    btn.classList.remove("correct", "wrong");
    btn.disabled = false;
  });
}

function selectAnswer(index) {
  const correctIndex = quizData[currentQuestion].correct;

  optionsEl.forEach(btn => btn.disabled = true);

  if (index === correctIndex) {
    optionsEl[index].classList.add("correct");
    score++;
  } else {
    optionsEl[index].classList.add("wrong");
    optionsEl[correctIndex].classList.add("correct");
  }

  nextBtn.style.display = "block";
}

function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  questionEl.textContent = "Quiz Completed!";
  document.querySelector(".options").style.display = "none";
  nextBtn.style.display = "none";
  scoreEl.textContent = `Your Score: ${score} / ${quizData.length}`;
}
