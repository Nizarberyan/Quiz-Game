let quizzes = JSON.parse(localStorage.getItem("quizzes"));
let currentId = localStorage.getItem("currentQuiz");

// let totalScore = 0;

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
const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector("aside");
const closeBtn = document.querySelector(".close");

hamburger.addEventListener("click", () => {
  sidebar.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.add("hidden");
});

// Close sidebar when clicking outside
document.addEventListener("click", (e) => {
  if (
    !sidebar.contains(e.target) &&
    !hamburger.contains(e.target) &&
    !sidebar.classList.contains("hidden")
  ) {
    sidebar.classList.add("hidden");
  }
});
currentId = localStorage.getItem("currentQuiz");
quizzes.forEach((quiz) => {
  if (quiz.id == currentId) {
    document.querySelector(".title").textContent = quiz.title;
  }
});

function shuffleQuizQuestions(quizzes) {
  const shuffledQuizzes = quizzes.map((quiz) => {
    // Create a copy of the questions array for each quiz
    const shuffledQuestions = [...quiz.questions];

    // Fisher-Yates Shuffle for each quiz's questions
    for (let i = shuffledQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledQuestions[i], shuffledQuestions[j]] = [
        shuffledQuestions[j],
        shuffledQuestions[i],
      ];
    }

    // Return a new quiz object with the shuffled questions
    return { ...quiz, questions: shuffledQuestions };
  });

  return shuffledQuizzes;
}

let finalQuiz = shuffleQuizQuestions(quizzes);
const currentQuiz = finalQuiz.find((quiz) => quiz.id == currentId);

let currentQuestionIndex = 0;

let answerBoolean = `<button class="true bg-gray-400 px-9 py-4 rounded-md">true</button>
                <button class="false bg-gray-400 px-9 py-4 rounded-md">false</button>`;

function showCurrentQuestion() {
  const currentQuestion = currentQuiz.questions[currentQuestionIndex];
  const questionContainer = document.querySelector(".quiz-area");
  questionContainer.innerHTML = "";

  switch (currentQuestion.type) {
    case "boolean":
      questionContainer.innerHTML = `
        <div class="question-boolean" style="max-width: 95%;">
          <p class="question-text text-xl mb-6 text-white">${currentQuestion.question}</p>
          <div class="answer-options flex gap-4">
            <button class="answer-btn text-white bg-gray-700 hover:bg-gray-500 px-9 py-4 rounded-md transition-colors" data-value="true">True</button>
            <button class="answer-btn text-white bg-gray-700 hover:bg-gray-500 px-9 py-4 rounded-md transition-colors" data-value="false">False</button>
          </div>
        </div>`;
      break;

    case "multiple-choice":
      questionContainer.innerHTML = `
        <div class="question-multiple" style="max-width: 95%;">
          <p class="question-text text-xl text-white mb-6">${currentQuestion.question}</p>
          <div class="answer-options flex flex-col gap-3">
            ${currentQuestion.answers
              .map(
                (answer) =>
                  `<button class="answer-btn text-white bg-gray-700 hover:bg-gray-500 px-6 py-4 rounded-md text-left transition-colors" 
                data-points="${answer.points}">${answer.text}</button>`
              )
              .join("")}
          </div>
        </div>`;
      break;
    case "ordering":
      questionContainer.innerHTML = `
        <div class="question-ordering flex flex-col gap-4" style="max-width: 95%;">
          <p class="question-text text-xl text-white">${currentQuestion.question}</p>
          <div class="items-container flex flex-col gap-2">
            ${currentQuestion.items
              .map(
                (item, index) => `
              <div class="item flex items-center gap-4 bg-gray-700 hover:bg-gray-500 p-4 rounded-md cursor-move transition-colors" draggable="true" data-index="${index}">
                <span class="order-number w-8 h-8 flex items-center justify-center bg-gray-700 text-white rounded-full">${index + 1}</span>
                <span class="item-text text-white">${item}</span>
              </div>
            `
              )
              .join("")}
          </div>
          <button class="submit-order text-white mt-6 bg-gray-700 hover:bg-gray-500 px-6 py-4 rounded-md transition-colors">Submit Order</button>
        </div>`;

      // Add drag and drop functionality
      const items = document.querySelectorAll(".item");
      const container = document.querySelector(".items-container");

      document.querySelector(".submit-order").addEventListener("click", () => {
        const currentOrder = Array.from(document.querySelectorAll(".item")).map(
          (item) => parseInt(item.dataset.index)
        );
        const isCorrect = currentQuestion.correctOrder.every(
          (pos, idx) => pos === currentOrder[idx]
        );
        const points = isCorrect ? currentQuestion.points : 0;

        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuiz.questions.length) {
          showCurrentQuestion();
        } else {
          window.alert("Quiz completed!");
        }
      });
      break;

    case "matching":
      questionContainer.innerHTML = `
        <div class="question-matching gap-6 flex flex-col">
          <p class="question-text text-xl mb-6 text-white">${currentQuestion.question}</p>
          <div class="matching-container grid grid-cols-2 gap-4">
            <div class="text-white left-items flex flex-col gap-3">
              ${currentQuestion.pairs
                .map(
                  (pair, index) => `
                <div class="left-item bg-gray-700 p-4 rounded-md" data-index="${index}">
                  ${pair.left}
                </div>
              `
                )
                .join("")}
            </div>
            <div class=" right-items flex flex-col gap-3">
              ${shuffleArray([...currentQuestion.pairs])
                .map(
                  (pair, index) => `
                <div class="right-item text-white bg-gray-700 p-4 rounded-md cursor-pointer hover:bg-gray-500 transition-colors" 
                     data-index="${index}" draggable="true">
                  ${pair.right}
                </div>
              `
                )
                .join("")}
            </div>
          </div>
          <button class="text-white check-matches mt-6 bg-gray-700 hover:bg-gray-500 px-6 py-4 rounded-md transition-colors">
            Check Matches
          </button>
        </div>`;

      // Add matching functionality
      const rightItems = document.querySelectorAll(".right-item");
      rightItems.forEach((item) => {
        item.addEventListener("dragstart", handleMatchDragStart);
        item.addEventListener("dragend", handleMatchDragEnd);
      });

      const leftItems = document.querySelectorAll(".left-item");
      leftItems.forEach((item) => {
        item.addEventListener("dragover", handleMatchDragOver);
        item.addEventListener("drop", handleMatchDrop);
      });

      document.querySelector(".check-matches").addEventListener("click", () => {
        const matches = document.querySelectorAll(".left-item");
        let correctMatches = 0;

        matches.forEach((item, index) => {
          const matchedRight = item.querySelector(".right-item");
          if (
            matchedRight &&
            currentQuestion.pairs[index].right ===
              matchedRight.textContent.trim()
          ) {
            correctMatches++;
          }
        });

        const points =
          correctMatches === currentQuestion.pairs.length
            ? currentQuestion.points
            : 0;

        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuiz.questions.length) {
          showCurrentQuestion();
        } else {
          window.alert("Quiz completed!");
        }
      });
      break;
    case "input":
      questionContainer.innerHTML = `
        <div class="question-text-input " style="max-width: 95%;">
          <p class="question-text text-xl mb-6 text-white">${currentQuestion.question}</p>
          <div class="answer-input">
            <input type="text" class=" w-full p-4 rounded-md border border-gray-400 focus:outline-none focus:border-gray-600" 
              placeholder="Type your answer here">
            <button class="submit-answer mt-4 text-white bg-gray-700 hover:bg-gray-500 px-6 py-4 rounded-md transition-colors">Submit Answer</button>
          </div>
        </div>`;
      break;
  }

  attachAnswerEventListeners();
}
let totalScore = 0;
let timeLeft = 0;
let timer;
let correctAnswerCount = 0;
let incorrectAnswerCount = 0;
let CompletionTime = 0;

const startTime = new Date();

function calculateCompletionTime(startTime) {
  const endTime = new Date();
  const timeDiff = endTime - startTime;
  const minutes = Math.floor(timeDiff / 60000);
  const seconds = Math.floor((timeDiff % 60000) / 1000);

  return `${minutes}m ${seconds}s`;
}

function attachAnswerEventListeners() {
  const buttons = document.querySelectorAll(".answer-btn, .submit-answer");
  buttons.forEach((button) => {
    button.addEventListener("click", handleAnswer);
  });
}
function updateQuizUI() {
  const quizHeader = `
      <div class="quiz-stats flex  justify-between items-center mb-6 p-4 bg-gray-200 dark:bg-dark-primary-dark rounded-lg flex-col">
        <div class="score-display text-white">
          Score: <span class="score-value font-bold">${totalScore}</span>
        </div>
        
        <div class="timer font-bold text-white">
          Time: <span class="time-value">${timeLeft}</span>s
        </div>
        <div class="progress-bar w-full h-3 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
          <div class="progress rounded-full transition-all duration-300" style="width: ${(currentQuestionIndex / currentQuiz.questions.length) * 100 + "%"};height:20px; background-color:green"></div>
        </div>
        <p class="question text-white">
  Question <span >${currentQuestionIndex}</span>/<span >${finalQuiz.length}</span>
</p>
      </div>`;

  document.querySelector(".quiz-stats-container ").innerHTML = quizHeader;
}

function startTimer() {
  timeLeft = currentQuiz.duration * 60; // Convert minutes to seconds
  timer = setInterval(() => {
    timeLeft--;
    updateQuizUI();

    if (timeLeft <= 0) {
      clearInterval(timer);

      finishQuiz();
    }
  }, 1000);
}

function finishQuiz() {
  clearInterval(timer);
  console.log(`Final Score: ${totalScore}`);
  showResultsDialog();
}

function handleAnswer(event) {
  const currentQuestion = currentQuiz.questions[currentQuestionIndex];
  let isCorrect = false;
  let points = 0;
  const button = event.target;

  // Get all answer buttons for this question
  const allButtons = button.parentElement.querySelectorAll("button");

  // Handle different question types
  switch (currentQuestion.type) {
    case "input":
      const userInput = event.target.previousElementSibling.value;
      const correctAnswer = currentQuestion.correctAnswer || "";
      const alternateAnswers = currentQuestion.alternateAnswers || [];
      const validAnswers = [correctAnswer, ...alternateAnswers];

      isCorrect = validAnswers
        .filter((answer) => answer)
        .map((answer) => answer.toString().toLowerCase())
        .includes(userInput.toLowerCase());
      points = isCorrect ? currentQuestion.points : 0;
      break;

    case "boolean":
      const userAnswer = button.dataset.value === "true";
      isCorrect = userAnswer === currentQuestion.answer; // Changed from correctAnswer to answer
      points = isCorrect ? currentQuestion.points : 0;
      break;

    case "multiple-choice":
    case "multiple":
      points = parseInt(button.dataset.points) || 0;
      isCorrect = points === 10;
      break;

    default:
      console.warn("Unknown question type:", currentQuestion.type);
      return;
  }

  // Gray out all buttons first
  allButtons.forEach((btn) => {
    if (btn !== button) {
      btn.classList.add("opacity-50", "bg-gray-400");
      btn.disabled = true; // Prevent further clicks
    }
  });

  if (isCorrect) {
    correctAnswerCount++;
    // Make selected button green
    button.classList.remove("bg-gray-700", "hover:bg-gray-500");
    button.classList.add("bg-green-500");
  } else {
    incorrectAnswerCount++;
    // Make selected button red
    button.classList.remove("bg-gray-700", "hover:bg-gray-500");
    button.classList.add("bg-red-500");

    // Find and highlight the correct answer button
    allButtons.forEach((btn) => {
      if (
        (currentQuestion.type === "boolean" &&
          btn.dataset.value === currentQuestion.answer?.toString()) ||
        (["multiple-choice", "multiple"].includes(currentQuestion.type) &&
          parseInt(btn.dataset.points) === 10)
      ) {
        btn.classList.remove("bg-gray-700", "hover:bg-gray-500", "opacity-50");
        btn.classList.add("bg-green-500");
      }
    });
  }

  totalScore += points;
  updateQuizUI();

  // Add a delay before moving to next question
  setTimeout(() => {
    // Reset all button styles
    allButtons.forEach((btn) => {
      btn.classList.remove(
        "bg-green-500",
        "bg-red-500",
        "opacity-50",
        "bg-gray-400"
      );
      btn.classList.add("bg-gray-700", "hover:bg-gray-500");
      btn.disabled = false;
    });

    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuiz.questions.length) {
      showCurrentQuestion();
    } else {
      const completionTime = calculateCompletionTime(startTime);
      console.log(`Completion Time: ${completionTime}`);
      finishQuiz();
    }
  }, 1500);
}
window.addEventListener("load", () => {
  updateQuizUI();
  startTimer();
});

showCurrentQuestion();

let draggedItem = null;

// Create and insert quiz stats container
const quizContainer = document.querySelector(".quiz-area").parentElement;
const statsContainer = document.createElement("div");
statsContainer.className = "quiz-stats-container w-[300px]";
quizContainer.insertBefore(
  statsContainer,
  document.querySelector(".quiz-area")
);
function showResultsDialog() {
  const dialog = document.getElementById("resultsDialog");

  // Calculate accuracy percentage
  const totalQuestions = currentQuiz.questions.length;
  const accuracyPercentage = Math.round(
    (correctAnswerCount / totalQuestions) * 100
  );

  // Update dialog content with final results
  document.getElementById("finalScore").textContent = totalScore;
  document.getElementById("completionTime").textContent =
    calculateCompletionTime(startTime);
  document.getElementById("correctAnswers").textContent = correctAnswerCount;
  document.getElementById("totalQuestions").textContent = totalQuestions;
  document.getElementById("accuracy").textContent = accuracyPercentage;

  // Show the dialog
  dialog.showModal();
}

function closeResultsDialog() {
  const dialog = document.getElementById("resultsDialog");
  dialog.close();

  // Redirect to home or quiz list after closing
  window.location.href = "index.html";
}

// Update your finishQuiz function to use the dialog

// Add event listener for ESC key to close dialog
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && document.getElementById("resultsDialog").open) {
    closeResultsDialog();
    window.location.href = "index.html";
  }
});

// Update timer finish to show dialog
function startTimer() {
  timeLeft = currentQuiz.duration * 60; // Convert minutes to seconds
  timer = setInterval(() => {
    timeLeft--;
    updateQuizUI();

    if (timeLeft <= 0) {
      clearInterval(timer);
      finishQuiz(); // This will now show the dialog
    }
  }, 1000);
}

