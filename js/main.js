import { Question } from "./question.js";
import { Quiz } from "./quiz.js";
let categoryMenu = document.getElementById("categoryMenu");
let difficultyOptions = document.getElementById("difficultyOptions");
let questionsNumber = document.getElementById("questionsNumber");
let startQuiz = document.getElementById("startQuiz");
export let questionContainer = document.getElementById("questionContainer");
export let quizOptions = document.getElementById("quizOptions");
export let questions;
export let quiz;
$("#startQuiz").click(async function () {
  let category = categoryMenu.value;
  let difficulty = difficultyOptions.value;
  let amount = questionsNumber.value;
  quiz = new Quiz(category, difficulty, amount);
  questions = await quiz.getQuestion();
  let task = new Question(0);
  task.displayQuestion();
  quizOptions.classList.replace("d-flex", "d-none");
  questionContainer.classList.replace("d-none", "d-flex");
});
