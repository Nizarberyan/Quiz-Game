let quizzes = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    description: "Test your knowledge of HTML, CSS, and JavaScript basics.",
    difficulty: "Easy",
    numQuestions: 10,
    duration: 15, // minutes
  },
  {
    id: 2,
    title: "React Mastery",
    description:
      "Assess your React skills, from components to state management.",
    difficulty: "Medium",
    numQuestions: 20,
    duration: 30,
  },
  {
    id: 3,
    title: "Node.js and Express.js",
    description:
      "Gauge your understanding of server-side JavaScript and web frameworks.",
    difficulty: "Medium",
    numQuestions: 15,
    duration: 25,
  },
  {
    id: 4,
    title: "Database Design and SQL",
    description: "Test your knowledge of database concepts and SQL queries.",
    difficulty: "Hard",
    numQuestions: 25,
    duration: 45,
  },
  {
    id: 5,
    title: "Python Programming Basics",
    description: "Assess your Python programming fundamentals.",
    difficulty: "Easy",
    numQuestions: 12,
    duration: 20,
  },
  {
    id: 6,
    title: "Data Science with Python",
    description:
      "Test your skills in data analysis, machine learning, and data visualization.",
    difficulty: "Hard",
    numQuestions: 30,
    duration: 60,
  },
  {
    id: 7,
    title: "JavaScript Algorithms and Data Structures",
    description:
      "Gauge your problem-solving and algorithmic thinking abilities.",
    difficulty: "Medium",
    numQuestions: 18,
    duration: 35,
  },
  {
    id: 8,
    title: "Cybersecurity Fundamentals",
    description:
      "Test your knowledge of cybersecurity concepts and best practices.",
    difficulty: "Medium",
    numQuestions: 15,
    duration: 25,
  },
  {
    id: 9,
    title: "Networking Basics",
    description: "Assess your understanding of network protocols and concepts.",
    difficulty: "Easy",
    numQuestions: 10,
    duration: 15,
  },
  {
    id: 10,
    title: "Cloud Computing Concepts",
    description:
      "Test your knowledge of cloud computing platforms and services.",
    difficulty: "Medium",
    numQuestions: 18,
    duration: 30,
  },
];

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

  function createQuiz(title, description, difficulty, numQuestions, duration) {
    const quizElement = document.createElement("div");
    quizElement.classList.add(
      "quiz",
      "bg-white",
      "dark:bg-dark-primary-dark",
      "h-[50vh]",
      "shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)]",
      "w-full",
      "max-w-sm",
      "rounded-lg",
      "overflow-hidden",
      "mx-auto",
      "font-[sans-serif]",
      "mt-4",
      "flex",
      "flex-col"
    );

    const htmlContent = `
  <img src="images/thumbnail.png" alt="thumbnail" class="w-full flex-shrink-0" />
  <div class="p-3 flex-1 flex flex-col">
    <h3 class="text-lg font-medium dark:text-primary-light">${title}</h3>
    <p class="dark:text-primary-light">${description}</p>
    <p class="text-sm font-light text-gray-500 dark:text-primary-light">Difficulty: ${difficulty}</p>
    <p class="text-sm font-light text-gray-500 dark:text-primary-light">${numQuestions} questions</p>
    <p class="text-sm font-light text-gray-500 dark:text-primary-light">Duration: ${duration} minutes</p>
  </div>
`;
    quizElement.innerHTML = htmlContent;

    return quizElement;
  }

  quizzes.forEach(function (quiz) {
    quizzesContainer.appendChild(
      createQuiz(
        quiz.title,
        quiz.description,
        quiz.difficulty,
        quiz.numQuestions,
        quiz.duration
      )
    );
  });
});
