// console.log(results);
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
      selectedAnswer: answer,
      correctAnswer: quizData[currentQuiz].correct,
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
  const correctCount = results.reduce(
    (count, result) =>
      result.selectedAnswer === result.correctAnswer ? count + 1 : count,
    0
  );

  quiz.innerHTML = `
    <h2>Results:</h2>
    <ul>
      ${results
        .map(
          (result) => `<li>${result.question}: ${result.selectedAnswer}</li>`
        )
        .join("")}
    </ul>
    <p>You got ${correctCount} out of ${quizData.length} questions correct!</p>
    ${correctCount === quizData.length ? "<p>You are doing great!</p>" : ""}
    <button onclick="location.reload()">Reload</button>
  `;
}

const backButton = document.getElementById("back");
backButton.addEventListener("click", goBack);

function goBack() {
  if (currentQuiz > 0) {
    currentQuiz--;
    loadQuiz();
  }
}

const startContainer = document.getElementById("start-container");
const userInfoForm = document.getElementById("user-info-form");
const quizContainer = document.getElementById("quiz");

userInfoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;

  // Check if name and age are provided
  if (name.trim() !== "" && age.trim() !== "") {
    startContainer.style.display = "none"; // Hide the user info form
    quizContainer.style.display = "block"; // Display the quiz

    // You can use 'name' and 'age' as needed in your application
    console.log("User Name:", name);
    console.log("User Age:", age);
  } else {
    alert("Please enter both name and age.");
  }
});

// Rest of your existing code
