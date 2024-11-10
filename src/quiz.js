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

      items.forEach((item) => {
        item.addEventListener("dragstart", handleDragStart);
        item.addEventListener("dragover", handleDragOver);
        item.addEventListener("drop", handleDrop);
        item.addEventListener("dragend", handleDragEnd);
      });

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
        <div class="progress-bar w-full h-3 h-4 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
          <div class="progress rounded-full transition-all duration-300" style="width: ${(currentQuestionIndex / currentQuiz.questions.length) * 100 + "%"};height:20px; background-color:green"></div>
        </div>
      </div>`;

  document.querySelector(".quiz-stats-container ").innerHTML = quizHeader;
  //console.log(currentQuestionIndex);
  //console.log(typeof((currentQuestionIndex / currentQuiz.questions.length) * 100));
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
  window.alert(`Quiz completed! Your score: ${totalScore}`);
}

function handleAnswer(event) {
  const currentQuestion = currentQuiz.questions[currentQuestionIndex];
  let isCorrect = false;
  let points = 0;

  if (currentQuestion.type === "input") {
    const userInput = event.target.previousElementSibling.value;
    const correctAnswer = currentQuestion.correctAnswer || "";
    const alternateAnswers = currentQuestion.alternateAnswers || [];
    const validAnswers = [correctAnswer, ...alternateAnswers];

    isCorrect = validAnswers
      .filter((answer) => answer)
      .map((answer) => answer.toString().toLowerCase())
      .includes(userInput.toLowerCase());
    points = isCorrect ? currentQuestion.points : 0;
  } else if (currentQuestion.type === "boolean") {
    const userAnswer = event.target.dataset.value === "true";
    isCorrect = userAnswer === currentQuestion.correctAnswer;
    points = isCorrect ? currentQuestion.points : 0;
  } else if (
    currentQuestion.type === "multiple-choice" ||
    currentQuestion.type === "multiple"
  ) {
    points = parseInt(event.target.dataset.points);
    isCorrect = points === 10;
  }

  totalScore += points;
  updateQuizUI();

  currentQuestionIndex++;
  if (currentQuestionIndex < currentQuiz.questions.length) {
    showCurrentQuestion();
  } else {
    finishQuiz();
  }
}

window.addEventListener("load", () => {
  updateQuizUI();
  startTimer();
});

showCurrentQuestion();

let draggedItem = null;

function handleDragStart(e) {
  draggedItem = this;
  this.classList.add("opacity-50");
}

function handleDragOver(e) {
  e.preventDefault();
}

function handleDrop(e) {
  e.preventDefault();
  if (this !== draggedItem) {
    const allItems = [...document.querySelectorAll(".item")];
    const draggedIndex = allItems.indexOf(draggedItem);
    const droppedIndex = allItems.indexOf(this);

    if (draggedIndex < droppedIndex) {
      this.parentNode.insertBefore(draggedItem, this.nextSibling);
    } else {
      this.parentNode.insertBefore(draggedItem, this);
    }

    // Update order numbers
    document.querySelectorAll(".order-number").forEach((num, idx) => {
      num.textContent = idx + 1;
    });
  }
}

function handleDragEnd(e) {
  this.classList.remove("opacity-50");
  draggedItem = null;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function handleMatchDragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.dataset.index);
  setTimeout(() => e.target.classList.add("opacity-50"), 0);
}

function handleMatchDragEnd(e) {
  e.target.classList.remove("opacity-50");
}

function handleMatchDragOver(e) {
  e.preventDefault();
}

function handleMatchDrop(e) {
  e.preventDefault();
  const draggedItem = document.querySelector(".right-item.opacity-50");
  if (draggedItem) {
    e.target.appendChild(draggedItem);
    draggedItem.classList.remove("opacity-50");
  }
}

// Create and insert quiz stats container
const quizContainer = document.querySelector(".quiz-area").parentElement;
const statsContainer = document.createElement("div");
statsContainer.className = "quiz-stats-container w-[300px]";
quizContainer.insertBefore(
  statsContainer,
  document.querySelector(".quiz-area")
);
