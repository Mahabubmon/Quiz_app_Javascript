const hdrsQuestions = [
  {
    sl: 1,
    title: "Falling Asleep",
    options: [
      {
        lable: "I never take longer than 30 minutes to fall asleep.",
        value: 0,
      },
      {
        lable:
          "I  take at least 30 minutes to fall asleep,less than half the time.",
        value: 1,
      },
      {
        lable:
          "I take at least 30 minutes to fall asleep, more than half the time.",
        value: 2,
      },
      {
        lable:
          "I take more than 60 minutes to fall asleep,more than half the time.",
        value: 3,
      },
    ],
  },
  {
    sl: 2,
    title: "Sleep During the Night",
    options: [
      {
        lable: "I do not wake up at night.",
        value: 0,
      },
      {
        lable:
          "I have a restless, light sleep with a few brief awakenings each night.",
        value: 1,
      },
      {
        lable:
          "I wake up at least once a night, but I go  back to sleep easily. ",
        value: 2,
      },
      {
        lable:
          "I awaken more than once a night and stay awake for 20 minutes or more, more than half the time.",
        value: 3,
      },
    ],
  },
  {
    sl: 3,
    title: "Waking Up Too Early",
    options: [
      {
        lable:
          "Most of the time, I awaken no more than 30 minutes before I need to get up.",
        value: 0,
      },
      {
        lable:
          "I More than half the time, I awaken more than 30 minutes before I need to get up.",
        value: 1,
      },
      {
        lable:
          "I almost always awaken at least one hour or so before I need to, but I go back to sleep eventually.",
        value: 2,
      },
      {
        lable:
          "I awaken at least one hour before I need to, and can't go back to sleep",
        value: 3,
      },
    ],
  },
  {
    sl: 4,
    title: "Sleeping Too Much",
    options: [
      {
        lable:
          "I sleep no longer than 7-8 hours/night,without napping during the day. ",
        value: 0,
      },
      {
        lable:
          "I sleep no longer than 10 hours in a 24 hour period including naps",
        value: 1,
      },
      {
        lable:
          "I sleep no longer than 12 hours in a 24 hour period including naps. ",
        value: 2,
      },
      {
        lable:
          "I sleep longer than 12 hours in a 24 hour period including naps. ",
        value: 3,
      },
    ],
  },
  {
    sl: 5,
    title: "Feeling Sad",
    options: [
      {
        lable: "I do not feel sad. ",
        value: 0,
      },
      {
        lable: "I feel sad less than half the time",
        value: 1,
      },
      {
        lable: "I feel sad more than half the time",
        value: 2,
      },
      {
        lable: "I feel sad nearly all of the time",
        value: 3,
      },
    ],
  },
  {
    sl: 6,
    title: "Decreased Appetite",
    options: [
      {
        lable: "There is no change in my usual appetite.",
        value: 0,
      },
      {
        lable:
          "I eat somewhat less often or lesser amounts of food than usual.",
        value: 1,
      },
      {
        lable: "I eat much less than usual and only with personal effort.",
        value: 2,
      },
      {
        lable:
          "I rarely eat within a 24-hour period, and only with extreme personal effort or when others persuade me to eat.",
        value: 3,
      },
    ],
  },
  {
    sl: 7,
    title: "Increased Appetite",
    options: [
      {
        lable: "There is no change from my usual appetite.",
        value: 0,
      },
      {
        lable: "I feel a need to eat more frequently than usual.",
        value: 1,
      },
      {
        lable:
          "I regularly eat more often and/or greater amounts of food than usual.",
        value: 2,
      },
      {
        lable: "I feel driven to overeat both at mealtime and between meals.",
        value: 3,
      },
    ],
  },
  {
    sl: 8,
    title: "Decreased Weight (Within the Last Two Weeks)",
    options: [
      {
        lable: "I have not had a change in my weight.",
        value: 0,
      },
      {
        lable: "I feel as if I've had a slight weight loss.",
        value: 1,
      },
      {
        lable: "I have lost 2 pounds or more.",
        value: 2,
      },
      {
        lable: "I have lost 5 pounds or more.",
        value: 3,
      },
    ],
  },
  {
    sl: 9,
    title: "Increased Weight (Within the Last Two Weeks)",
    options: [
      {
        lable: "I have not had a change in my weight.",
        value: 0,
      },
      {
        lable: "I feel as if I've had a slight weight gain.",
        value: 1,
      },
      {
        lable: "I have gained 2 pounds or more.",
        value: 2,
      },
      {
        lable: "I have gained 5 pounds or more.",
        value: 3,
      },
    ],
  },
  {
    sl: 10,
    title: "Concentration/Decision Making",
    options: [
      {
        lable:
          "There is no change in my usual capacity to concentrate or make decisions.",
        value: 0,
      },
      {
        lable:
          "I occasionally feel indecisive or find that  my attention wanders..",
        value: 1,
      },
      {
        lable:
          "Most of the time, I struggle to focus my attention or to make decisions.",
        value: 2,
      },
      {
        lable:
          "I cannot concentrate well enough to read or cannot make even minor decisions. ",
        value: 3,
      },
    ],
  },
  {
    sl: 11,
    title: "View of Myself",
    options: [
      {
        lable:
          "I see myself as equally worthwhile and deserving as other people.",
        value: 0,
      },
      {
        lable: "I am more self-blaming than usual.",
        value: 1,
      },
      {
        lable: "I largely believe that I cause problems for others.",
        value: 2,
      },
      {
        lable:
          "I think almost constantly about major and minor defects in myself.",
        value: 3,
      },
    ],
  },
  {
    sl: 12,
    title: "Thoughts of Death or Suicide",
    options: [
      {
        lable: "I do not think of suicide or death.",
        value: 0,
      },
      {
        lable: "I feel that life is empty or wonder if it's worth living.",
        value: 1,
      },
      {
        lable:
          "I think of suicide or death several times a week for several minutes.",
        value: 2,
      },
      {
        lable:
          "I think of suicide or death several times a day in some detail, or I have made specific plans for suicide or have actually tried to take my life",
        value: 3,
      },
    ],
  },
  {
    sl: 13,
    title: "General Interest",
    options: [
      {
        lable:
          "There is no change from usual in how interested I am in other people or activities",
        value: 0,
      },
      {
        lable: "I notice that I am less interested in people or activities.",
        value: 1,
      },
      {
        lable:
          "I find I have interest in only one or two of my formerly pursued activities.",
        value: 2,
      },
      {
        lable: "I have virtually no interest in formerly pursued activities.",
        value: 3,
      },
    ],
  },
  {
    sl: 14,
    title: "Energy Level",
    options: [
      {
        lable: "There is no change in my usual level of energy",
        value: 0,
      },
      {
        lable: "I get tired more easily than usual.",
        value: 1,
      },
      {
        lable:
          "I have to make a big effort to start or finish my usual daily activities (for example,shopping, homework, cooking or going towork).",
        value: 2,
      },
      {
        lable:
          "I really cannot carry out most of my usual  daily activities because I just don't have the energy..",
        value: 3,
      },
    ],
  },
  {
    sl: 15,
    title: "Feeling slowed down",
    options: [
      {
        lable: "I think, speak, and move at my usual rate of speed.",
        value: 0,
      },
      {
        lable:
          "I find that my thinking is slowed down or my voice sounds dull or flat.",
        value: 1,
      },
      {
        lable:
          "It takes me several seconds to respond to most questions and I'm sure my thinking is slowed.",
        value: 2,
      },
      {
        lable:
          "I am often unable to respond to questions without extreme effort.",
        value: 3,
      },
    ],
  },
  {
    sl: 16,
    title: "Feeling restless",
    options: [
      {
        lable: "I do not feel restless.",
        value: 0,
      },
      {
        lable:
          "I'm often fidgety, wringing my hands, or need to shift how I am sitting.",
        value: 1,
      },
      {
        lable: "I have impulses to move about and am quite restless.",
        value: 2,
      },
      {
        lable: "At times, I am unable to stay seated and need to pace around.",
        value: 3,
      },
    ],
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
  const currentQuizData = hdrsQuestions[currentQuiz];
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
      question: hdrsQuestions[currentQuiz].title,
      selectedAnswer: answer, // Store the selected answer instead of correct answer
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
