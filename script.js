const quizData = [
  {
    question:
      "	What is the correct syntax for referring to an external script called “script.js”?",
    answers: [
      { text: 'a: <script href = "script.js">', correct: false },
      { text: 'b: <script name = "script.js">', correct: false },
      { text: 'c: <script src="script.js">', correct: true },
      { text: 'd: <script file="script.js">', correct: false },
    ],
  },
  {
    question:
      "	Which built-in method returns the calling string value converted to upper case?",
    answers: [
      { text: "a: toUpperCase()", correct: true },
      { text: "b: toUpper()", correct: false },
      { text: "c: changeCase(case)", correct: false },
      { text: "d: None of the above", correct: false },
    ],
  },
  {
    question: "Which of the following will create an empty array?",
    answers: [
      { text: "a: var arr = {};", correct: false },
      { text: "b: var arr = [];", correct: false },
      { text: "c: var arr = new array();", correct: false },
      { text: "d: Both b and c ", correct: true },
    ],
  },
  {
    question: "How do you find the length of an array ‘arr’?",
    answers: [
      { text: "a: arr.size", correct: true },
      { text: "b: arr.length", correct: false },
      { text: "c: arr.count", correct: false },
      { text: "d: arr.length() ", correct: false },
    ],
  },
  {
    question: "Which method can be used to combine two or more arrays?",
    answers: [
      { text: "a: concat()", correct: true },
      { text: "b: combine()", correct: false },
      { text: "c: merge()", correct: false },
      { text: "d: append()", correct: false },
    ],
  },
  {
    question:
      "Given the array let fruits = ['apple', 'banana', 'orange'];, how do you access the element 'banana'?",
    answers: [
      { text: "a: fruits.1", correct: false },
      { text: "b: fruits[1]", correct: true },
      { text: "c: fruits[“banana”]", correct: false },
      { text: "d: fruits.get(1)", correct: false },
    ],
  },
  {
    question:
      "What is the output of the following code? let numbers = [10,20,30]; console.log(numbers.length);",
    answers: [
      { text: "a: 3", correct: true },
      { text: "b: 4", correct: false },
      { text: "c: 10,20,30", correct: false },
      { text: "d: Undefined", correct: false },
    ],
  },
  {
    question:
      "What will be the output of the following code? try { console.log('Hello'); throw new Error('Something went wrong');console.log('This will not be logged'); } catch (e) { console.log(e.message);",
    answers: [
      { text: "a: ‘Hello’", correct: false },
      { text: "b: 'Hello' 'This will not be logged'", correct: false },
      { text: "c: ‘Something went wrong’", correct: false },
      { text: "d: ‘Hello’ ‘Something went wrong’", correct: true },
    ],
  },
  {
    question:
      "What will be logged to the console after the following code is executed?const arr = [10, 20, , 30];for (let i in arr) {console.log(i);",
    answers: [
      { text: "a: 0 1 2 3 ", correct: false },
      { text: "b: 10 20 30 ", correct: false },
      { text: "c: 0 1 3 ", correct: true },
      { text: "d: undefined", correct: false },
    ],
  },
  {
    question: "How do you find the index of a specific element in an array?",
    answers: [
      { text: "a: arr.indexOf(element)", correct: true },
      { text: "b: arr.findIndex(element)", correct: false },
      { text: "c: arr.search(element)", correct: false },
      { text: "d: arr.find(element)", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");
const questionContainer = document.getElementById("question-container");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerText = "Next";
  resultElement.classList.add("hide");
  questionContainer.classList.remove("hide");
  nextButton.classList.add("hide");
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = quizData[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("li");
    button.innerText = answer.text;
    button.classList.add("btn");
    button.addEventListener("click", () => selectAnswer(answer));
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(answer) {
  if (answer.correct) {
    score++;
  }

  if (quizData.length > currentQuestionIndex + 1) {
    currentQuestionIndex++;
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionContainer.classList.add("hide");
  resultElement.classList.remove("hide");
  scoreElement.innerText = `${score} out of ${quizData.length}`;
  nextButton.classList.add("hide");
}

nextButton.addEventListener("click", () => {
  startQuiz();
});

startQuiz();
