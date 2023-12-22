const hdrsQuestions = [
  {
    sl: 1,
    title: "Falling Asleep",
    options: [
      {
        label: "I never take longer than 30 minutes to fall asleep.",
        value: 0,
      },
      {
        label:
          "I take at least 30 minutes to fall asleep, less than half the time.",
        value: 1,
      },
      {
        label:
          "I take at least 30 minutes to fall asleep, more than half the time.",
        value: 2,
      },
      {
        label:
          "I take more than 60 minutes to fall asleep, more than half the time.",
        value: 3,
      },
    ],
  },
  // Add more questions as needed...
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const submitBtn = document.getElementById("submit");
const results = [];

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = hdrsQuestions[currentQuiz];
  questionEl.innerText = currentQuizData.title;

  // Display options dynamically
  currentQuizData.options.forEach((option, index) => {
    const optionElement = document.getElementById(index);
    optionElement.nextElementSibling.innerText = option.label;
  });
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl, index) => {
    if (answerEl.checked) {
      answer = index.toString();
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer !== undefined) {
    const result = {
      question: hdrsQuestions[currentQuiz].title,
      selectedAnswer: answer,
    };
    results.push(result);

    currentQuiz++;
    if (currentQuiz < hdrsQuestions.length) {
      loadQuiz();
    } else {
      displayResults();
    }
  }
});

function displayResults() {
  console.log("All results:", results);

  // Display the results as you wish (e.g., show on the page)
  quiz.innerHTML = `
    <h2>Results:</h2>
    <ul>
      ${results
        .map(
          (result) => `<li>${result.question}: ${result.selectedAnswer}</li>`
        )
        .join("")}
    </ul>
    <button onclick="location.reload()">Reload</button>
  `;
}
