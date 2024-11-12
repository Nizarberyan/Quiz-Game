// Load quizzes from localStorage
let quizzes = JSON.parse(localStorage.getItem("quizzes")) || [];

// Function to generate quiz table rows
function generateQuizRows() {
  const quizTableBody = document.getElementById("quizTable");
  quizTableBody.innerHTML = "";

  quizzes.forEach((quiz) => {
    const row = document.createElement("tr");
    row.classList.add(
      "border-b",
      "dark:border-gray-700",
      "transition-colors",
      "duration-200",
      "hover:bg-gray-50",
      "dark:hover:bg-gray-800"
    );

    const titleCell = document.createElement("td");
    titleCell.classList.add("px-4", "py-3");
    titleCell.textContent = quiz.title;

    const questionsCell = document.createElement("td");
    questionsCell.classList.add("px-4", "py-3");
    questionsCell.textContent = quiz.questions.length;

    const actionsCell = document.createElement("td");
    actionsCell.classList.add("px-4", "py-3", "flex", "justify-end", "gap-2");

    const editButton = document.createElement("button");
    editButton.classList.add(
      "bg-blue-500",
      "hover:bg-blue-600",
      "text-white",
      "px-3",
      "py-2",
      "rounded-md"
    );
    editButton.innerHTML = '<i class="fas fa-edit"></i>';
    editButton.addEventListener("click", () => handleEditQuiz(quiz.id));

    const deleteButton = document.createElement("button");
    deleteButton.classList.add(
      "bg-red-500",
      "hover:bg-red-600",
      "text-white",
      "px-3",
      "py-2",
      "rounded-md"
    );
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.addEventListener("click", () => handleDeleteQuiz(quiz.id));

    actionsCell.appendChild(editButton);
    actionsCell.appendChild(deleteButton);

    row.appendChild(titleCell);
    row.appendChild(questionsCell);
    row.appendChild(actionsCell);

    quizTableBody.appendChild(row);
  });
}

function handleDeleteQuiz(id) {
  quizzes = quizzes.filter((quiz) => quiz.id !== id);
  localStorage.setItem("quizzes", JSON.stringify(quizzes));
  generateQuizRows();
}

// Function to handle quiz editing
function handleEditQuiz(id) {
  console.log(`Editing quiz with ID: ${id}`);
}

document.getElementById("createQuiz").addEventListener("click", () => {
  console.log("Creating a new quiz");
});

generateQuizRows();
let theme = document.querySelector(".theme-btn");
theme.addEventListener("click", () => {
  const isDark = localStorage.getItem("isDark") === "true";
  localStorage.setItem("isDark", !isDark);
  document.querySelector("body").classList.toggle("dark", !isDark);
});

window.addEventListener("load", () => {
  const isDark = localStorage.getItem("isDark") === "true";
  document.querySelector("body").classList.toggle("dark", isDark);
});

// Load quizzes from localStorage
//  let quizzes = JSON.parse(localStorage.getItem("quizzes")) || [];

// Function to generate quiz table rows
function generateQuizRows() {
  const quizTableBody = document.getElementById("quizTable");
  quizTableBody.innerHTML = "";

  quizzes.forEach((quiz) => {
    const row = document.createElement("tr");
    row.classList.add("border-b", "dark:border-gray-700");

    const titleCell = document.createElement("td");
    titleCell.classList.add("px-4", "py-3");
    titleCell.textContent = quiz.title;

    const difficultyCell = document.createElement("td");
    difficultyCell.classList.add("px-4", "py-3");
    difficultyCell.textContent = quiz.difficulty;

    const durationCell = document.createElement("td");
    durationCell.classList.add("px-4", "py-3");
    durationCell.textContent = quiz.duration;

    const actionsCell = document.createElement("td");
    actionsCell.classList.add("px-4", "py-3", "flex", "justify-end", "gap-2");

    const editButton = document.createElement("button");
    editButton.classList.add(
      "bg-blue-500",
      "hover:bg-blue-600",
      "text-white",
      "px-3",
      "py-2",
      "rounded-md"
    );
    editButton.innerHTML = '<i class="fas fa-edit"></i>';
    editButton.addEventListener("click", () => handleEditQuiz(quiz.id));

    const deleteButton = document.createElement("button");
    deleteButton.classList.add(
      "bg-red-500",
      "hover:bg-red-600",
      "text-white",
      "px-3",
      "py-2",
      "rounded-md"
    );
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.addEventListener("click", () => handleDeleteQuiz(quiz.id));

    actionsCell.appendChild(editButton);
    actionsCell.appendChild(deleteButton);

    row.appendChild(titleCell);
    row.appendChild(difficultyCell);
    row.appendChild(durationCell);
    row.appendChild(actionsCell);

    quizTableBody.appendChild(row);
  });
}

// Function to handle quiz deletion
function handleDeleteQuiz(id) {
  // Remove quiz from localStorage
  quizzes = quizzes.filter((quiz) => quiz.id !== id);
  localStorage.setItem("quizzes", JSON.stringify(quizzes));
  generateQuizRows();
}

// Function to handle quiz editing
function handleEditQuiz(id) {
  // Navigate to edit quiz page
  console.log(`Editing quiz with ID: ${id}`);
}
