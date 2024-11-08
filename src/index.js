quizzes = JSON.parse(localStorage.getItem("quizzes")) || [];
console.log(quizzes);
document.querySelector(".theme-btn").addEventListener("click", () => {
  const isDark = localStorage.getItem("isDark") === "true";
  localStorage.setItem("isDark", !isDark);
  document.querySelector("body").classList.toggle("dark", !isDark);
});

window.addEventListener("load", () => {
  const isDark = localStorage.getItem("isDark") === "true";
  document.querySelector("body").classList.toggle("dark", isDark);
});

const sidebar = document.querySelector(".hamburger");
const aside = document.querySelector("aside");

sidebar.addEventListener("click", () => {
  aside.classList.toggle("hidden");
});

document.querySelector(".close").addEventListener("click", () => {
  aside.classList.add("hidden");
});
document.addEventListener("DOMContentLoaded", () => {
  const quizzesContainer = document.querySelector(".quizzes");

  function createQuiz(
    id,
    title,
    description,
    difficulty,
    numQuestions,
    duration,
    cover
  ) {
    const quizElement = document.createElement("div");
    quizElement.classList.add(
      "quiz",
      "bg-white",
      "dark:bg-dark-primary-dark",

      "shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)]",
      "w-full",
      "max-w-sm",
      "rounded-lg",
      "overflow-hidden",
      "font-[sans-serif]",
      "mt-4",
      "flex",
      "flex-col"
    );

    const htmlContent = `<p class="hidden">${id}</p>
    <img src="${cover}" alt="thumbnail" class="w-full flex-shrink-0" />
    <div class=" p-2 flex-1 flex flex-col gap-2">
        <h3 class="text-lg font-medium dark:text-primary-light">${title}</h3>
        <p class="dark:text-primary-light">${description}</p>
        <p class="text-sm font-light text-gray-500 dark:text-primary-light">Difficulty: ${difficulty}</p>
        <p class="text-sm font-light text-gray-500 dark:text-primary-light">${numQuestions} questions</p>
        <p class="text-sm font-light text-gray-500 dark:text-primary-light">Duration: ${duration} minutes</p>
         </div>
         <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-b">
            Start Quiz
        </button>`;
    quizElement.innerHTML = htmlContent;

    return quizElement;
  }

  quizzes.forEach(function (quiz) {
    quizzesContainer.appendChild(
      createQuiz(
        quiz.id,
        quiz.title,
        quiz.description,
        quiz.difficulty,
        quiz.numQuestions,
        quiz.duration,
        quiz.cover
      )
    );
  });
});
