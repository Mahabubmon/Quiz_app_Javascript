const quizData = [
  {
    sl: 1,
    title: "Which language runs in a web browser?",
    options: [
      {
        label: "Java",
        value: "option_0",
      },
      {
        label: "C",
        value: "option_1",
      },
      {
        label: "Python",
        value: "option_2",
      },
      {
        label: "JavaScript",
        value: "option_3",
      },
    ],
    correct: "option_3",
  },
  {
    sl: 2,
    title: "What does CSS stand for?",
    options: [
      {
        label: "Central Style Sheets",
        value: "option_0",
      },
      {
        label: "Cascading Style Sheets",
        value: "option_1",
      },
      {
        label: "Cascading Simple Sheets",
        value: "option_2",
      },
      {
        label: "Cars SUVs Sailboats",
        value: "option_3",
      },
    ],
    correct: "option_1",
  },
  {
    sl: 3,
    title: "What does HTML stand for?",
    options: [
      {
        label: "Hypertext Markup Language",
        value: "option_0",
      },
      {
        label: "Hypertext Markdown Language",
        value: "option_1",
      },
      {
        label: "Hyperloop Machine Language",
        value: "option_2",
      },
      {
        label: "Helicopters Terminals Motorboats Lamborghinis",
        value: "option_3",
      },
    ],
    correct: "option_0",
  },
  {
    sl: 4,
    title: "What year was JavaScript launched?",
    options: [
      {
        label: "1996",
        value: "option_0",
      },
      {
        label: "1995",
        value: "option_1",
      },
      {
        label: "1994",
        value: "option_2",
      },
      {
        label: "none of the above",
        value: "option_3",
      },
    ],
    correct: "option_1",
  },
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
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.title;

  // Display options dynamically
  currentQuizData.options.forEach((option, index) => {
    const optionElement = document.getElementById(option.value);
    optionElement.nextElementSibling.innerText = option.label;
  });
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    const result = {
      question: quizData[currentQuiz].title,
      selectedAnswer: answer, // Store the selected answer instead of correct answer
    };
    results.push(result);

    currentQuiz++;
    if (currentQuiz < quizData.length) {
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

// console.log(results);
