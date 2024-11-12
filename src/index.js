let quizzes = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    description: "Test your knowledge of HTML, CSS, and JavaScript basics.",
    difficulty: "Easy",
    cover: "./images/Web-Development-Fundamental.jpeg",
    numQuestions: 10,
    duration: 1,
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: "What does HTML stand for?",
        answers: [
          { text: "HyperText Markup Language", points: 10, correct: true },
          { text: "HighText Markup Language", points: 3 },
          { text: "HyperText Markdown Language", points: 5 },
          { text: "HighText Markdown Language", points: 0 },
        ],
      },
      {
        id: 2,
        type: "boolean",
        question: "CSS is only used for changing colors in a webpage.",
        correctAnswer: false,
        points: 10,
        explanation:
          "CSS is used for all aspects of styling including layout, animations, and more.",
      },
      {
        id: 3,
        type: "input",
        question: "Write the HTML tag used for creating a hyperlink.",
        correctAnswer: "<a>",
        alternateAnswers: ["<a/>", "<a></a>"],
        points: 10,
        caseSensitive: false,
      },
      {
        id: 4,
        type: "multiple-choice",
        question: "Which CSS property is used to change the text color?",
        answers: [
          { text: "color", points: 10, correct: true },
          { text: "text-color", points: 5 },
          { text: "font-color", points: 5 },
          { text: "text-style", points: 0 },
        ],
      },
      {
        id: 5,
        type: "boolean",
        question: "JavaScript is a compiled programming language.",
        correctAnswer: false,
        points: 10,
        explanation:
          "JavaScript is an interpreted language that runs in the browser.",
      },
      {
        id: 6,
        type: "multiple-choice",
        question: "Which HTML tag is used for creating a paragraph?",
        answers: [
          { text: "&lt;p&gt;&lt;/p&gt;", points: 10, correct: true },
          { text: "&lt;paragraph&gt;", points: 3 },
          { text: "&lt;para&gt;", points: 3 },
          { text: "&lt;text&gt;", points: 0 },
        ],
      },
      {
        id: 7,
        type: "input",
        question: "Write the CSS property used to make text bold.",
        correctAnswer: "font-weight: bold",
        alternateAnswers: ["font-weight:bold", "font-weight: 700"],
        points: 10,
        caseSensitive: false,
      },
      {
        id: 8,
        type: "multiple-choice",
        question:
          "Which of these is a valid way to declare a JavaScript variable?",
        answers: [
          { text: "let x = 5;", points: 10, correct: true },
          { text: "variable x = 5;", points: 0 },
          { text: "x := 5;", points: 0 },
          { text: "int x = 5;", points: 0 },
        ],
      },
      {
        id: 9,
        type: "boolean",
        question: "The HTML <img> tag requires a closing tag.",
        correctAnswer: false,
        points: 10,
        explanation: "The <img> tag is a self-closing tag in HTML.",
      },
      {
        id: 10,
        type: "multiple-choice",
        question: "Which CSS property is used to change the background color?",
        answers: [
          { text: "background-color", points: 10, correct: true },
          { text: "bgcolor", points: 3 },
          { text: "color-background", points: 3 },
          { text: "bg-color", points: 3 },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "React Mastery",
    description:
      "Assess your React skills, from components to state management.",
    difficulty: "Medium",
    numQuestions: 17,
    duration: 30,
    cover: "./images/React-Mastery.png",
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: "Which hook should you use for side effects in React?",
        answers: [
          { text: "useEffect", points: 15, correct: true },
          { text: "useState", points: 5 },
          { text: "useCallback", points: 5 },
          { text: "useMemo", points: 3 },
        ],
      },
      {
        id: 2,
        type: "input",
        question:
          "Write a React functional component that displays 'Hello, World!'",
        correctAnswer:
          "function HelloWorld() { return <div>Hello, World!</div> }",
        alternateAnswers: [
          "const HelloWorld = () => { return <div>Hello, World!</div> }",
          "const HelloWorld = () => <div>Hello, World!</div>",
        ],
        points: 15,
        hints: [
          "Remember to capitalize component name",
          "Can use function or arrow syntax",
        ],
      },
      {
        id: 3,
        type: "multiple-choice",
        question: "Which of these are valid React hooks? ",
        answers: [
          { text: "useState", correct: true, points: 5 },
          { text: "useComponent", correct: false, points: 0 },
          { text: "useContext", correct: true, points: 5 },
          { text: "useProps", correct: false, points: 0 },
          { text: "useReducer", correct: true, points: 5 },
        ],
        totalPoints: 15,
        minimumCorrectRequired: 2,
      },
      {
        id: 4,
        type: "boolean",
        question:
          "In React, components must always return a single root element.",
        correctAnswer: true,
        points: 15,
        explanation:
          "React components must return a single root element, which can contain multiple child elements.",
      },

      {
        id: 5,
        type: "input",
        question:
          "Write a useState hook to manage a counter variable and initialize it to 0.",
        correctAnswer: "const [count, setCount] = useState(0);",
        alternateAnswers: [
          "const [count, setCount] = useState(0)",
          "let [count, setCount] = useState(0);",
        ],
        points: 15,
        hints: [
          "Remember to destructure both the state variable and setter function",
        ],
      },
      {
        id: 6,
        type: "multiple-choice",
        question:
          "What is the correct way to conditionally render content in React?",
        answers: [
          {
            text: "condition ? <Component /> : null",
            points: 15,
            correct: true,
          },
          { text: "if(condition) { <Component /> }", points: 0 },
          { text: "condition && <Component />", points: 10 },
          { text: "&lt;Component if={condition} /&gt;", points: 0 },
        ],
      },
      {
        id: 7,
        type: "input",
        question:
          "What will be logged to the console when this component renders?",
        code: `
      function Example() {
        const [count, setCount] = useState(0);
        useEffect(() => {
          console.log('Effect ran');
        }, []);
        return <div>{count}</div>;
      }`,
        correctAnswer: "Effect ran",
        points: 15,
        hints: [
          "Consider the empty dependency array",
          "useEffect runs after render",
        ],
      },
      {
        id: 8,
        type: "boolean",
        question:
          "The useEffect hook can replace all lifecycle methods from class components.",
        correctAnswer: false,
        points: 15,
        explanation:
          "While useEffect can handle most lifecycle scenarios, some rare cases still require different solutions.",
      },
      {
        id: 9,
        type: "multiple-choice",
        question:
          "Which of these are valid ways to prevent re-renders in React? ",
        answers: [
          { text: "React.memo", correct: true, points: 5 },
          { text: "useCallback", correct: true, points: 5 },
          { text: "useMemo", correct: true, points: 5 },
          { text: "preventDefault()", correct: false, points: 0 },
        ],
        totalPoints: 15,
      },
      {
        id: 10,
        type: "input",
        question:
          "Write a useEffect hook that runs only when the 'name' prop changes.",
        correctAnswer: "useEffect(() => { // effect }, [name]);",
        alternateAnswers: [
          "useEffect(() => { /* effect */ }, [name])",
          "useEffect(() => { /* effect */ }, [name]);",
        ],
        points: 15,
      },
      {
        id: 11,
        type: "multiple-choice",
        question: "What is the purpose of the key prop in React lists?",
        answers: [
          {
            text: "To help React track which items have changed, been added, or been removed",
            points: 15,
            correct: true,
          },
          { text: "To style list items differently", points: 0 },
          { text: "To count the number of items", points: 0 },
          { text: "To make the list sortable", points: 0 },
        ],
      },
      {
        id: 12,
        type: "input",
        question: "What will this component render?",
        code: `
      function Counter() {
        const [count, setCount] = useState(0);
        return (
          <button onClick={() => setCount(count + 1)}>
            Count: {count}
          </button>
        );
      }`,
        correctAnswer:
          "A button showing 'Count: 0' that increments when clicked",
        points: 15,
      },
      {
        id: 13,
        type: "multiple-choice",
        question: "Which method is used to handle form submission in React?",
        answers: [
          { text: "onSubmit", points: 15, correct: true },
          { text: "handleSubmit", points: 5 },
          { text: "submitForm", points: 0 },
          { text: "formSubmit", points: 0 },
        ],
      },
      {
        id: 14,
        type: "boolean",
        question:
          "React components can return multiple elements without a wrapper.",
        correctAnswer: false,
        points: 15,
        explanation:
          "React components must return a single root element, though you can use fragments (<> </>) to avoid extra DOM nodes.",
      },
      {
        id: 15,
        type: "input",
        question:
          "Write a custom hook that manages a toggle state (true/false).",
        correctAnswer: `function useToggle(initialValue = false) {
        const [value, setValue] = useState(initialValue);
        const toggle = () => setValue(!value);
        return [value, toggle];
      }`,
        points: 20,
        hints: [
          "Use useState",
          "Return both the state and a function to update it",
        ],
      },
      {
        id: 16,
        type: "multiple-choice",
        question: "Which statements about React props are true? ",
        answers: [
          { text: "Props are read-only", correct: true, points: 5 },
          {
            text: "Props can be modified by child components",
            correct: false,
            points: 0,
          },
          { text: "Props can have default values", correct: true, points: 5 },
          {
            text: "Props can be validated using PropTypes",
            correct: true,
            points: 5,
          },
        ],
        totalPoints: 15,
      },

      {
        id: 17,
        type: "input",
        question: "What is wrong with this code and how would you fix it?",
        code: `
      function Example() {
        const [count, setCount] = useState(0);
        setCount(count + 1);
        return <div>{count}</div>;
      }`,
        correctAnswer:
          "The setState call should be in an event handler or useEffect to avoid infinite renders",
        points: 15,
        hints: [
          "Think about when state updates trigger re-renders",
          "Consider the React component lifecycle",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Node.js and Express.js Fundamentals",
    description:
      "Test your knowledge of Node.js core concepts, Express.js framework, middleware, routing, and best practices.",
    difficulty: "Medium",
    numQuestions: 15,
    duration: 45,
    cover: "./images/Node.js-and-Express.js-Fundamentals.png",
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: "Which of the following are core features of Node.js? ",
        answers: [
          { text: "Event-driven programming", correct: true, points: 5 },
          { text: "Non-blocking I/O", correct: true, points: 5 },
          { text: "Static typing", correct: false, points: 0 },
          { text: "Single-threaded event loop", correct: true, points: 5 },
        ],
        totalPoints: 15,
        minimumCorrectRequired: 2,
      },
      {
        id: 2,
        type: "boolean",
        question:
          "Express.js is a minimalist web framework that runs on top of Node.js",
        answer: true,
        points: 5,
      },
      {
        id: 3,
        type: "multiple-choice",
        question: "Which method is used to create a new Express application?",
        answers: [
          { text: "express()", correct: true, points: 10 },
          { text: "new Express()", correct: false, points: 0 },
          { text: "createExpress()", correct: false, points: 0 },
          { text: "Express.create()", correct: false, points: 0 },
        ],
        totalPoints: 10,
      },
      {
        id: 4,
        type: "input",
        question: "What is the command to install Express.js using npm?",
        correctAnswer: "npm install express",
        points: 5,
      },
      {
        id: 5,
        type: "multiple-choice",
        question:
          "Which of the following are valid Express.js middleware types? ",
        answers: [
          { text: "Application-level middleware", correct: true, points: 5 },
          { text: "Router-level middleware", correct: true, points: 5 },
          { text: "Error-handling middleware", correct: true, points: 5 },
          { text: "Database middleware", correct: false, points: 0 },
        ],
        totalPoints: 15,
        minimumCorrectRequired: 2,
      },
      {
        id: 6,
        type: "boolean",
        question: "Node.js can only handle synchronous operations",
        answer: false,
        points: 5,
      },
      {
        id: 7,
        type: "multiple-choice",
        question:
          "Which object in Express.js contains the request information?",
        answers: [
          { text: "req", correct: true, points: 10 },
          { text: "request", correct: false, points: 0 },
          { text: "res", correct: false, points: 0 },
          { text: "response", correct: false, points: 0 },
        ],
        totalPoints: 10,
      },
      {
        id: 8,
        type: "input",
        question:
          "What is the name of the package commonly used for parsing incoming request bodies in Express.js?",
        correctAnswer: "body-parser",
        points: 5,
      },
      {
        id: 9,
        type: "multiple-choice",
        question: "Which HTTP methods are supported by Express.js? ",
        answers: [
          { text: "GET", correct: true, points: 5 },
          { text: "POST", correct: true, points: 5 },
          { text: "PUT", correct: true, points: 5 },
          { text: "FETCH", correct: false, points: 0 },
        ],
        totalPoints: 15,
        minimumCorrectRequired: 2,
      },
      {
        id: 10,
        type: "boolean",
        question:
          "Express.js automatically handles CORS (Cross-Origin Resource Sharing) without additional middleware",
        answer: false,
        points: 5,
      },
      {
        id: 11,
        type: "input",
        question:
          "What is the default port number that Node.js applications listen on?",
        correctAnswer: "3000",
        points: 5,
      },
      {
        id: 12,
        type: "multiple-choice",
        question: "Which module is used for file system operations in Node.js?",
        answers: [
          { text: "fs", correct: true, points: 10 },
          { text: "file", correct: false, points: 0 },
          { text: "filesystem", correct: false, points: 0 },
          { text: "files", correct: false, points: 0 },
        ],
        totalPoints: 10,
      },
      {
        id: 13,
        type: "multiple-choice",
        question:
          "Which of the following are valid ways to handle errors in Express.js? ",
        answers: [
          { text: "Try-catch blocks", correct: true, points: 5 },
          { text: "Error-handling middleware", correct: true, points: 5 },
          { text: "Promise rejections", correct: true, points: 5 },
          { text: "Error events", correct: false, points: 0 },
        ],
        totalPoints: 15,
        minimumCorrectRequired: 2,
      },
      {
        id: 14,
        type: "input",
        question: "What command is used to start a Node.js application?",
        correctAnswer: "node app.js",
        points: 5,
      },
      {
        id: 15,
        type: "multiple-choice",
        question: "Which template engine is NOT commonly used with Express.js?",
        answers: [
          { text: "Django", correct: true, points: 10 },
          { text: "EJS", correct: false, points: 0 },
          { text: "Pug", correct: false, points: 0 },
          { text: "Handlebars", correct: false, points: 0 },
        ],
        totalPoints: 10,
      },
    ],
  },
  {
    id: 4,
    title: "Database Design and SQL",
    description: "Test your knowledge of database concepts and SQL queries.",
    difficulty: "Hard",
    numQuestions: 25,
    duration: 45,
    cover: "./images/Database-Design-and-SQL.avif",
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: "Which of the following are examples of SQL DDL commands? ",
        answers: [
          { text: "CREATE", correct: true, points: 5 },
          { text: "ALTER", correct: true, points: 5 },
          { text: "SELECT", correct: false, points: 0 },
          { text: "TRUNCATE", correct: true, points: 5 },
        ],
        totalPoints: 15,
        minimumCorrectRequired: 2,
      },
      {
        id: 2,
        type: "input",
        question:
          "Write a SQL query to select all columns from table 'employees' where salary is greater than 50000 and department is 'IT'",
        correctAnswer:
          "SELECT * FROM employees WHERE salary > 50000 AND department = 'IT'",
        points: 10,
      },
      {
        id: 3,
        type: "multiple-choice",
        question: "Which normal form eliminates transitive dependencies?",
        answers: [
          { text: "Third Normal Form (3NF)", correct: true, points: 10 },
          { text: "First Normal Form (1NF)", correct: false, points: 0 },
          { text: "Second Normal Form (2NF)", correct: false, points: 0 },
          { text: "Boyce-Codd Normal Form (BCNF)", correct: false, points: 0 },
        ],
        totalPoints: 10,
      },
      {
        id: 4,
        type: "multiple-choice",
        question: "Which of the following are valid types of joins in SQL? ",
        answers: [
          { text: "INNER JOIN", correct: true, points: 5 },
          { text: "LEFT OUTER JOIN", correct: true, points: 5 },
          { text: "MIDDLE JOIN", correct: false, points: 0 },
          { text: "CROSS JOIN", correct: true, points: 5 },
        ],
        totalPoints: 15,
        minimumCorrectRequired: 2,
      },
      {
        id: 5,
        type: "input",
        question:
          "Write a SQL query to find the average salary by department, ordered by average salary in descending order",
        correctAnswer:
          "SELECT department, AVG(salary) as avg_salary FROM employees GROUP BY department ORDER BY avg_salary DESC",
        points: 15,
      },
      {
        id: 6,
        type: "boolean",
        question:
          "A foreign key can reference a non-primary key column in another table",
        answer: false,
        points: 5,
      },
      {
        id: 7,
        type: "multiple-choice",
        question:
          "Which SQL constraint ensures that all values in a column are different?",
        answers: [
          { text: "UNIQUE", correct: true, points: 10 },
          { text: "DISTINCT", correct: false, points: 0 },
          { text: "DIFFERENT", correct: false, points: 0 },
          { text: "NOT NULL", correct: false, points: 0 },
        ],
        totalPoints: 10,
      },
      {
        id: 8,
        type: "input",
        question:
          "Write a SQL query to delete duplicate rows from table 'customers' based on email column",
        correctAnswer:
          "DELETE FROM customers WHERE id NOT IN (SELECT MIN(id) FROM customers GROUP BY email)",
        points: 15,
      },
      {
        id: 9,
        type: "multiple-choice",
        question: "Which of the following are ACID properties? ",
        answers: [
          { text: "Atomicity", correct: true, points: 5 },
          { text: "Consistency", correct: true, points: 5 },
          { text: "Availability", correct: false, points: 0 },
          { text: "Durability", correct: true, points: 5 },
        ],
        totalPoints: 15,
        minimumCorrectRequired: 3,
      },
      {
        id: 10,
        type: "multiple-choice",
        question:
          "Which type of index would be most efficient for a column containing many duplicate values?",
        answers: [
          { text: "Bitmap Index", correct: true, points: 10 },
          { text: "B-tree Index", correct: false, points: 0 },
          { text: "Hash Index", correct: false, points: 0 },
          { text: "Primary Index", correct: false, points: 0 },
        ],
        totalPoints: 10,
      },
      {
        id: 11,
        type: "input",
        question:
          "Write a SQL query to find the second highest salary from the employees table",
        correctAnswer:
          "SELECT DISTINCT salary FROM employees ORDER BY salary DESC LIMIT 1 OFFSET 1",
        points: 15,
      },
      {
        id: 12,
        type: "boolean",
        question:
          "In a FULL OUTER JOIN, if there's no match in either table, NULL values are returned for both tables",
        answer: true,
        points: 5,
      },
      {
        id: 13,
        type: "multiple-choice",
        question: "Which of the following are valid database relationships? ",
        answers: [
          { text: "One-to-One", correct: true, points: 5 },
          { text: "One-to-Many", correct: true, points: 5 },
          { text: "Many-to-Many", correct: true, points: 5 },
          { text: "Some-to-Some", correct: false, points: 0 },
        ],
        totalPoints: 15,
        minimumCorrectRequired: 2,
      },
      {
        id: 14,
        type: "multiple-choice",
        question:
          "Which of the following is NOT a valid aggregate function in SQL?",
        answers: [
          { text: "MEDIAN", correct: true, points: 10 },
          { text: "COUNT", correct: false, points: 0 },
          { text: "AVG", correct: false, points: 0 },
          { text: "MAX", correct: false, points: 0 },
        ],
        totalPoints: 10,
      },
      {
        id: 15,
        type: "input",
        question:
          "Write a SQL query to create a table 'employees' with columns: id (primary key), name, email (unique), salary, department",
        correctAnswer:
          "CREATE TABLE employees (id INT PRIMARY KEY, name VARCHAR(100), email VARCHAR(100) UNIQUE, salary DECIMAL(10,2), department VARCHAR(50))",
        points: 15,
      },
      {
        id: 16,
        type: "multiple-choice",
        question: "Which of the following are true about database views? ",
        answers: [
          {
            text: "Views can simplify complex queries",
            correct: true,
            points: 5,
          },
          { text: "Views can provide data security", correct: true, points: 5 },
          {
            text: "Views always improve query performance",
            correct: false,
            points: 0,
          },
          {
            text: "Views can be used to enforce data independence",
            correct: true,
            points: 5,
          },
        ],
        totalPoints: 15,
        minimumCorrectRequired: 2,
      },
      {
        id: 17,
        type: "boolean",
        question:
          "A composite key must contain at least three columns to be valid",
        answer: false,
        points: 5,
      },
      {
        id: 18,
        type: "multiple-choice",
        question: "Which isolation level prevents phantom reads?",
        answers: [
          { text: "SERIALIZABLE", correct: true, points: 10 },
          { text: "READ COMMITTED", correct: false, points: 0 },
          { text: "READ UNCOMMITTED", correct: false, points: 0 },
          { text: "REPEATABLE READ", correct: false, points: 0 },
        ],
        totalPoints: 10,
      },
      {
        id: 19,
        type: "input",
        question:
          "Write a SQL query to find employees who earn more than the average salary in their department",
        correctAnswer:
          "SELECT * FROM employees e WHERE salary > (SELECT AVG(salary) FROM employees WHERE department = e.department)",
        points: 15,
      },
      {
        id: 20,
        type: "multiple-choice",
        question: "Which of the following are types of database triggers? ",
        answers: [
          { text: "BEFORE INSERT", correct: true, points: 5 },
          { text: "AFTER UPDATE", correct: true, points: 5 },
          { text: "DURING DELETE", correct: false, points: 0 },
          { text: "INSTEAD OF", correct: true, points: 5 },
        ],
        totalPoints: 15,
        minimumCorrectRequired: 2,
      },
      {
        id: 21,
        type: "multiple-choice",
        question: "Which of these is NOT a type of database partition?",
        answers: [
          { text: "Circular Partition", correct: true, points: 10 },
          { text: "Range Partition", correct: false, points: 0 },
          { text: "List Partition", correct: false, points: 0 },
          { text: "Hash Partition", correct: false, points: 0 },
        ],
        totalPoints: 10,
      },
      {
        id: 22,
        type: "input",
        question:
          "Write a SQL query to create a stored procedure that increases the salary of all employees in a given department by a given percentage",
        correctAnswer:
          "CREATE PROCEDURE raise_salary(IN dept VARCHAR(50), IN percentage DECIMAL(5,2)) BEGIN UPDATE employees SET salary = salary * (1 + percentage/100) WHERE department = dept; END",
        points: 15,
      },
      {
        id: 23,
        type: "boolean",
        question:
          "Materialized views are always automatically updated when the underlying tables change",
        answer: false,
        points: 5,
      },
      {
        id: 24,
        type: "multiple-choice",
        question: "Which of the following are valid database backup types? ",
        answers: [
          { text: "Full Backup", correct: true, points: 5 },
          { text: "Differential Backup", correct: true, points: 5 },
          { text: "Incremental Backup", correct: true, points: 5 },
          { text: "Partial Backup", correct: false, points: 0 },
        ],
        totalPoints: 15,
        minimumCorrectRequired: 2,
      },
      {
        id: 25,
        type: "multiple-choice",
        question: "Which statement about database denormalization is FALSE?",
        answers: [
          {
            text: "Denormalization always improves data integrity",
            correct: true,
            points: 10,
          },
          {
            text: "Denormalization can improve query performance",
            correct: false,
            points: 0,
          },
          {
            text: "Denormalization introduces data redundancy",
            correct: false,
            points: 0,
          },
          {
            text: "Denormalization can simplify queries",
            correct: false,
            points: 0,
          },
        ],
        totalPoints: 10,
      },
    ],
  },
  {
    id: 5,
    title: "Python Programming Basics",
    description: "Assess your Python programming fundamentals.",
    difficulty: "Easy",
    numQuestions: 12,
    duration: 20,
    cover: "./images/Python-Programming-Basics.webp",
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: "What will be the output of print(type(5))?",
        answers: [
          { text: "&lt;class 'int'&gt;", correct: true, points: 5 },
          { text: "&ltclass 'str'&gt;", correct: false, points: 0 },
          { text: "integer", correct: false, points: 0 },
          { text: "number", correct: false, points: 0 },
        ],
        totalPoints: 5,
      },
      {
        id: 2,
        type: "boolean",
        question:
          "In Python, lists are mutable (can be changed after creation)",
        answer: true,
        points: 5,
      },
      {
        id: 3,
        type: "multiple-choice",
        question:
          "Which of the following are valid ways to create an empty list in Python? ",
        answers: [
          { text: "list()", correct: true, points: 5 },
          { text: "[]", correct: true, points: 5 },
          { text: "new List()", correct: false, points: 0 },
          { text: "{}", correct: false, points: 0 },
        ],
        totalPoints: 10,
        minimumCorrectRequired: 1,
      },
      {
        id: 4,
        type: "input",
        question:
          "What function do you use to find the length of a list or string in Python?",
        correctAnswer: "len",
        points: 5,
      },
      {
        id: 5,
        type: "multiple-choice",
        question: "Which operator is used for string concatenation in Python?",
        answers: [
          { text: "+", correct: true, points: 5 },
          { text: "&", correct: false, points: 0 },
          { text: ",", correct: false, points: 0 },
          { text: "|", correct: false, points: 0 },
        ],
        totalPoints: 5,
      },
      {
        id: 6,
        type: "input",
        question:
          "Write a Python statement to print 'Hello, World!' to the console",
        correctAnswer: "print('Hello, World!')",
        points: 5,
      },
      {
        id: 7,
        type: "multiple-choice",
        question: "Which of these are valid Python data types? ",
        answers: [
          { text: "int", correct: true, points: 5 },
          { text: "str", correct: true, points: 5 },
          { text: "bool", correct: true, points: 5 },
          { text: "char", correct: false, points: 0 },
        ],
        totalPoints: 15,
        minimumCorrectRequired: 2,
      },
      {
        id: 8,
        type: "boolean",
        question:
          "Python is case-sensitive (name and Name are different variables)",
        answer: true,
        points: 5,
      },
      {
        id: 9,
        type: "multiple-choice",
        question: "What is the correct way to create a comment in Python?",
        answers: [
          { text: "# This is a comment", correct: true, points: 5 },
          { text: "// This is a comment", correct: false, points: 0 },
          { text: "/* This is a comment */", correct: false, points: 0 },
          { text: "<!-- This is a comment -->", correct: false, points: 0 },
        ],
        totalPoints: 5,
      },
      {
        id: 10,
        type: "input",
        question:
          "What built-in function converts a string to an integer in Python?",
        correctAnswer: "int",
        points: 5,
      },
      {
        id: 11,
        type: "multiple-choice",
        question: "Which of these are valid ways to compare values in Python? ",
        answers: [
          { text: "==", correct: true, points: 5 },
          { text: "!=", correct: true, points: 5 },
          { text: "<>", correct: false, points: 0 },
          { text: "is", correct: true, points: 5 },
        ],
        totalPoints: 15,
        minimumCorrectRequired: 2,
      },
      {
        id: 12,
        type: "multiple-choice",
        question: "What is the output of print('Hello'[1])?",
        answers: [
          { text: "e", correct: true, points: 5 },
          { text: "H", correct: false, points: 0 },
          { text: "Hello", correct: false, points: 0 },
          { text: "l", correct: false, points: 0 },
        ],
        totalPoints: 5,
      },
    ],
  },
  {
    id: 6,
    title: "Data Science with Python",
    description:
      "Test your skills in data analysis, machine learning, and data visualization.",
    difficulty: "Hard",
    numQuestions: 27,
    duration: 60,
    cover: "./images/Data-Science-with-Python.jpg",
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: "Which of the following are supervised learning algorithms? ",
        answers: [
          { text: "Linear Regression", correct: true, points: 5 },
          { text: "K-Means Clustering", correct: false, points: 0 },
          { text: "Random Forest", correct: true, points: 5 },
          { text: "PCA", correct: false, points: 0 },
          { text: "Support Vector Machines", correct: true, points: 5 },
        ],
        totalPoints: 15,
        minimumCorrectRequired: 2,
      },
      {
        id: 2,
        type: "input",
        question: "What will be the output of this code?",
        code: `
  import numpy as np
  arr = np.array([1, 2, 3, 4, 5])
  mask = arr > 2
  print(arr[mask].mean())`,
        correctAnswer: "4.0",
        points: 20,
        hints: [
          "Consider which elements satisfy arr > 2",
          "Calculate mean of [3, 4, 5]",
        ],
      },
      {
        id: 3,
        type: "input",
        question:
          "Write a pandas command to read a CSV file named 'data.csv' and handle missing values by filling them with the mean of their respective columns.",
        correctAnswer: "df = pd.read_csv('data.csv').fillna(df.mean())",
        alternateAnswers: [
          "df = pd.read_csv('data.csv')\ndf = df.fillna(df.mean())",
          "df = pd.read_csv('data.csv').fillna(method='mean')",
        ],
        points: 20,
      },
      {
        id: 4,
        type: "multiple-choice",
        question:
          "Which metric would be most appropriate for evaluating a regression model?",
        answers: [
          { text: "Mean Squared Error (MSE)", points: 20, correct: true },
          { text: "Accuracy", points: 0 },
          { text: "F1 Score", points: 5 },
          { text: "ROC AUC", points: 5 },
        ],
      },
      {
        id: 5,
        type: "ordering",
        question:
          "Order the following steps in a typical machine learning pipeline:",
        items: [
          "Data Collection",
          "Data Cleaning",
          "Feature Engineering",
          "Model Selection",
          "Model Training",
          "Model Validation",
          "Hyperparameter Tuning",
        ],
        correctOrder: [0, 1, 2, 3, 4, 5, 6],
        points: 25,
      },
      {
        id: 6,
        type: "input",
        question:
          "Write a function using scikit-learn to split data into training and testing sets with stratification.",
        correctAnswer:
          "X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, stratify=y, random_state=42)",
        points: 20,
        hints: ["Use train_test_split from sklearn.model_selection"],
      },
      {
        id: 7,
        type: "multiple-choice",
        question:
          "Which of these are valid methods for handling missing data? ",
        answers: [
          { text: "Mean Imputation", correct: true, points: 5 },
          { text: "Median Imputation", correct: true, points: 5 },
          { text: "Forward Fill", correct: true, points: 5 },
          { text: "Adding Noise", correct: false, points: 0 },
          { text: "Complete Case Analysis", correct: true, points: 5 },
        ],
        totalPoints: 20,
      },
      {
        id: 8,
        type: "input",
        question: "What will this code return?",
        code: `
  import pandas as pd
  df = pd.DataFrame({'A': [1,2,None,4], 'B': [5,None,7,8]})
  print(df.isnull().sum())`,
        correctAnswer: "A    1\nB    1\ndtype: int64",
        points: 20,
      },

      {
        id: 9,
        type: "input",
        question: "Write code to create a correlation heatmap using seaborn.",
        correctAnswer: "sns.heatmap(df.corr(), annot=True, cmap='coolwarm')",
        alternateAnswers: [
          "sns.heatmap(df.corr(), annot=True)",
          "sns.heatmap(data=df.corr(), annot=True, cmap='coolwarm')",
        ],
        points: 20,
      },
      {
        id: 10,
        type: "multiple-choice",
        question:
          "Which technique is most appropriate for handling highly imbalanced datasets?",
        answers: [
          {
            text: "SMOTE (Synthetic Minority Over-sampling Technique)",
            points: 20,
            correct: true,
          },
          { text: "Linear Scaling", points: 0 },
          { text: "Log Transformation", points: 0 },
          { text: "Min-Max Scaling", points: 0 },
        ],
      },
      {
        id: 11,
        type: "input",
        question: "What's the output of this feature engineering code?",
        code: `
  from sklearn.preprocessing import StandardScaler
  import numpy as np
  data = np.array([[1, 2], [3, 4], [5, 6]])
  scaler = StandardScaler()
  print(scaler.fit_transform(data).mean(axis=0))`,
        correctAnswer: "[0., 0.]",
        points: 20,
      },
      {
        id: 12,
        type: "multiple-choice",
        question: "Which statements about cross-validation are true? ",
        answers: [
          { text: "It helps prevent overfitting", correct: true, points: 5 },
          {
            text: "It's only used for classification",
            correct: false,
            points: 0,
          },
          { text: "It can be stratified", correct: true, points: 5 },
          { text: "It increases training time", correct: true, points: 5 },
        ],
        totalPoints: 15,
      },
      {
        id: 13,
        type: "input",
        question:
          "Write code to perform k-fold cross-validation using scikit-learn.",
        correctAnswer:
          "scores = cross_val_score(model, X, y, cv=5, scoring='accuracy')",
        points: 20,
        hints: ["Use cross_val_score from sklearn.model_selection"],
      },

      {
        id: 14,
        type: "input",
        question: "What will this pandas operation return?",
        code: `
  df = pd.DataFrame({'A': [1,2,3], 'B': [4,5,6]})
  print(df.apply(lambda x: x.max() - x.min()))`,
        correctAnswer: "A    2\nB    2\ndtype: int64",
        points: 20,
      },
      {
        id: 15,
        type: "multiple-choice",
        question:
          "Which algorithm would be most appropriate for anomaly detection?",
        answers: [
          { text: "Isolation Forest", points: 20, correct: true },
          { text: "Linear Regression", points: 0 },
          { text: "Naive Bayes", points: 0 },
          { text: "Decision Tree", points: 5 },
        ],
      },
      {
        id: 16,
        type: "input",
        question:
          "Write code to create a pipeline that scales features and then applies logistic regression.",
        correctAnswer:
          "pipeline = Pipeline([('scaler', StandardScaler()), ('classifier', LogisticRegression())])",
        points: 20,
      },
      {
        id: 17,
        type: "ordering",
        question: "Order these steps for feature selection:",
        items: [
          "Remove Constant Features",
          "Check Feature Correlations",
          "Apply Feature Importance",
          "Recursive Feature Elimination",
          "Cross-validate Performance",
        ],
        correctOrder: [0, 1, 2, 3, 4],
        points: 20,
      },
      {
        id: 18,
        type: "multiple-choice",
        question:
          "Which dimensionality reduction techniques preserve distance relationships? ",
        answers: [
          { text: "t-SNE", correct: true, points: 5 },
          { text: "UMAP", correct: true, points: 5 },
          { text: "PCA", correct: true, points: 5 },
          { text: "Feature Selection", correct: false, points: 0 },
        ],
        totalPoints: 15,
      },
      {
        id: 19,
        type: "input",
        question: "What's the result of this time series analysis?",
        code: `
  import pandas as pd
  dates = pd.date_range('20230101', periods=4)
  ts = pd.Series([1,2,3,4], index=dates)
  print(ts.rolling(window=2).mean())`,
        correctAnswer: `2023-01-01    NaN
  2023-01-02    1.5
  2023-01-03    2.5
  2023-01-04    3.5
  dtype: float64`,
        points: 20,
      },
      {
        id: 20,
        type: "multiple-choice",
        question: "Which technique is best for handling multicollinearity?",
        answers: [
          { text: "Ridge Regression", points: 20, correct: true },
          { text: "Linear Regression", points: 0 },
          { text: "Decision Trees", points: 5 },
          { text: "Naive Bayes", points: 0 },
        ],
      },
      {
        id: 21,
        type: "input",
        question:
          "Write code to perform grid search with cross-validation using scikit-learn.",
        correctAnswer: `
  grid_search = GridSearchCV(
      estimator=model,
      param_grid=params,
      cv=5,
      scoring='accuracy'
  )`,
        points: 20,
      },
      {
        id: 22,
        type: "multiple-choice",
        question: "Which regularization techniques can prevent overfitting? ",
        answers: [
          { text: "L1 (Lasso)", correct: true, points: 5 },
          { text: "L2 (Ridge)", correct: true, points: 5 },
          { text: "Dropout", correct: true, points: 5 },
          { text: "Early Stopping", correct: true, points: 5 },
        ],
        totalPoints: 20,
      },
      {
        id: 23,
        type: "input",
        question: "What will this feature engineering code produce?",
        code: `
  from sklearn.preprocessing import PolynomialFeatures
  X = np.array([[1, 2]])
  poly = PolynomialFeatures(degree=2)
  print(poly.fit_transform(X))`,
        correctAnswer: "[[1. 1. 2. 1. 2. 4.]]",
        points: 20,
      },
      {
        id: 24,
        type: "multiple-choice",
        question: "Which algorithm is most suitable for online learning?",
        answers: [
          { text: "Stochastic Gradient Descent", points: 20, correct: true },
          { text: "Random Forest", points: 0 },
          { text: "K-Means", points: 0 },
          { text: "SVM", points: 5 },
        ],
      },
      {
        id: 25,
        type: "input",
        question:
          "Write code to create a custom transformer using scikit-learn's TransformerMixin.",
        correctAnswer: `
  class CustomTransformer(TransformerMixin):
      def fit(self, X, y=None):
          return self
      def transform(self, X):
          return X`,
        points: 20,
      },
      {
        id: 26,
        type: "ordering",
        question: "Order these steps for model deployment:",
        items: [
          "Model Serialization",
          "API Development",
          "Testing",
          "Containerization",
          "Load Testing",
          "Monitoring Setup",
        ],
        correctOrder: [0, 1, 2, 3, 4, 5],
        points: 20,
      },
      {
        id: 27,
        type: "multiple-choice",
        question: "Which statements about ensemble methods are true? ",
        answers: [
          { text: "They combine multiple models", correct: true, points: 5 },
          { text: "They always improve accuracy", correct: false, points: 0 },
          { text: "They can reduce overfitting", correct: true, points: 5 },
          { text: "They increase model complexity", correct: true, points: 5 },
        ],
        totalPoints: 15,
      },
    ],
  },
  {
    id: 7,
    title: "JavaScript Algorithms and Data Structures",
    description:
      "Gauge your problem-solving and algorithmic thinking abilities.",
    difficulty: "Medium",
    numQuestions: 18,
    duration: 35,
    cover: "./images/JavaScript-Algorithms-and-Data-Structures.webp",
    questions: [
      {
        id: 1,
        type: "input",
        question:
          "Write a function that checks if a string is a palindrome (ignoring spaces and case)",
        correctAnswer:
          "function isPalindrome(str) { return str.toLowerCase().replace(/s/g, '') === str.toLowerCase().replace(/s/g, '').split('').reverse().join(''); }",
        points: 10,
      },
      {
        id: 2,
        type: "multiple-choice",
        question:
          "Which of the following array methods mutate the original array? ",
        answers: [
          { text: "push()", correct: true, points: 5 },
          { text: "splice()", correct: true, points: 5 },
          { text: "map()", correct: false, points: 0 },
          { text: "sort()", correct: true, points: 5 },
        ],
        totalPoints: 15,
        minimumCorrectRequired: 2,
      },
      {
        id: 3,
        type: "multiple-choice",
        question:
          "What is the time complexity of searching for an element in a binary search tree (BST) in the average case?",
        answers: [
          { text: "O(log n)", correct: true, points: 10 },
          { text: "O(n)", correct: false, points: 0 },
          { text: "O(1)", correct: false, points: 0 },
          { text: "O(n²)", correct: false, points: 0 },
        ],
        totalPoints: 10,
      },
      {
        id: 4,
        type: "input",
        question:
          "Write a function to find the first non-repeating character in a string",
        correctAnswer:
          "function firstNonRepeating(str) { return [...str].find(char => str.indexOf(char) === str.lastIndexOf(char)); }",
        points: 10,
      },
      {
        id: 5,
        type: "multiple-choice",
        question:
          "Which of these data structures use LIFO (Last In First Out) principle? ",
        answers: [
          { text: "Stack", correct: true, points: 5 },
          { text: "Function call stack", correct: true, points: 5 },
          { text: "Queue", correct: false, points: 0 },
          { text: "Recursion", correct: true, points: 5 },
        ],
        totalPoints: 15,
        minimumCorrectRequired: 2,
      },
      {
        id: 6,
        type: "boolean",
        question:
          "A Hash Table's average case time complexity for insertion and lookup is O(1)",
        answer: true,
        points: 5,
      },
      {
        id: 7,
        type: "input",
        question: "Write a function to check if two strings are anagrams",
        correctAnswer:
          "function areAnagrams(str1, str2) { return str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join(''); }",
        points: 10,
      },
      {
        id: 8,
        type: "multiple-choice",
        question:
          "Which sorting algorithm has the best average-case time complexity?",
        answers: [
          { text: "Quick Sort", correct: true, points: 10 },
          { text: "Bubble Sort", correct: false, points: 0 },
          { text: "Insertion Sort", correct: false, points: 0 },
          { text: "Selection Sort", correct: false, points: 0 },
        ],
        totalPoints: 10,
      },
      {
        id: 9,
        type: "multiple-choice",
        question:
          "Which of these methods can be used to traverse a Binary Tree? ",
        answers: [
          { text: "In-order", correct: true, points: 5 },
          { text: "Pre-order", correct: true, points: 5 },
          { text: "Linear-order", correct: false, points: 0 },
          { text: "Post-order", correct: true, points: 5 },
        ],
        totalPoints: 15,
        minimumCorrectRequired: 2,
      },
      {
        id: 10,
        type: "input",
        question:
          "Write a function to reverse a linked list (assume each node has a next pointer and value property)",
        correctAnswer:
          "function reverseList(head) { let prev = null; while(head) { let next = head.next; head.next = prev; prev = head; head = next; } return prev; }",
        points: 15,
      },
      {
        id: 11,
        type: "boolean",
        question:
          "A Fibonacci sequence implementation using recursion without memoization has exponential time complexity",
        answer: true,
        points: 5,
      },
      {
        id: 12,
        type: "multiple-choice",
        question:
          "What data structure would be most efficient for implementing a cache with a Least Recently Used (LRU) eviction policy?",
        answers: [
          { text: "Hash Map + Doubly Linked List", correct: true, points: 10 },
          { text: "Array", correct: false, points: 0 },
          { text: "Binary Tree", correct: false, points: 0 },
          { text: "Stack", correct: false, points: 0 },
        ],
        totalPoints: 10,
      },
      {
        id: 13,
        type: "input",
        question:
          "Write a function to find the maximum subarray sum in an array of numbers",
        correctAnswer:
          "function maxSubarraySum(arr) { let max = arr[0]; let currentMax = arr[0]; for(let i = 1; i < arr.length; i++) { currentMax = Math.max(arr[i], currentMax + arr[i]); max = Math.max(max, currentMax); } return max; }",
        points: 15,
      },
      {
        id: 14,
        type: "multiple-choice",
        question:
          "Which of these are valid ways to handle collisions in a hash table? ",
        answers: [
          { text: "Chaining", correct: true, points: 5 },
          { text: "Linear Probing", correct: true, points: 5 },
          { text: "Double Hashing", correct: true, points: 5 },
          { text: "Binary Search", correct: false, points: 0 },
        ],
        totalPoints: 15,
        minimumCorrectRequired: 2,
      },
      {
        id: 15,
        type: "multiple-choice",
        question:
          "What is the space complexity of a recursive function that calculates the nth Fibonacci number using memoization?",
        answers: [
          { text: "O(n)", correct: true, points: 10 },
          { text: "O(1)", correct: false, points: 0 },
          { text: "O(2^n)", correct: false, points: 0 },
          { text: "O(log n)", correct: false, points: 0 },
        ],
        totalPoints: 10,
      },
      {
        id: 16,
        type: "input",
        question: "Write a function to implement a queue using two stacks",
        correctAnswer:
          "class Queue { constructor() { this.stack1 = []; this.stack2 = []; } enqueue(x) { this.stack1.push(x); } dequeue() { if (this.stack2.length === 0) { while(this.stack1.length > 0) { this.stack2.push(this.stack1.pop()); } } return this.stack2.pop(); } }",
        points: 15,
      },
      {
        id: 17,
        type: "multiple-choice",
        question:
          "Which of these operations have O(1) time complexity in a doubly linked list? ",
        answers: [
          { text: "Insert at beginning", correct: true, points: 5 },
          { text: "Delete from end", correct: true, points: 5 },
          { text: "Search for element", correct: false, points: 0 },
          { text: "Insert after a given node", correct: true, points: 5 },
        ],
        totalPoints: 15,
        minimumCorrectRequired: 2,
      },
      {
        id: 18,
        type: "multiple-choice",
        question:
          "What is the time complexity of building a heap from an array of n elements?",
        answers: [
          { text: "O(n)", correct: true, points: 10 },
          { text: "O(n log n)", correct: false, points: 0 },
          { text: "O(log n)", correct: false, points: 0 },
          { text: "O(n²)", correct: false, points: 0 },
        ],
        totalPoints: 10,
      },
    ],
  },
  {
    id: 8,
    title: "Cybersecurity Fundamentals",
    description:
      "Test your knowledge of cybersecurity concepts and best practices.",
    difficulty: "Medium",
    numQuestions: 15,
    duration: 25,
    cover: "./images/Cybersecurity-Fundamentals.png",
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: "Which of the following are components of the CIA triad? ",
        answers: [
          { text: "Confidentiality", correct: true, points: 5 },
          { text: "Integrity", correct: true, points: 5 },
          { text: "Availability", correct: true, points: 5 },
          { text: "Authentication", correct: false, points: 0 },
        ],
        totalPoints: 15,
        minimumCorrectRequired: 2,
      },
      {
        id: 2,
        type: "multiple-choice",
        question:
          "Which encryption type uses the same key for encryption and decryption?",
        answers: [
          { text: "Symmetric Encryption", correct: true, points: 10 },
          { text: "Asymmetric Encryption", correct: false, points: 0 },
          { text: "Hashing", correct: false, points: 0 },
          { text: "Digital Signatures", correct: false, points: 0 },
        ],
        totalPoints: 10,
      },
      {
        id: 3,
        type: "boolean",
        question:
          "HTTPS uses TLS/SSL to secure communication between client and server",
        answer: true,
        points: 5,
      },
      {
        id: 4,
        type: "multiple-choice",
        question: "Which of the following are common types of malware? ",
        answers: [
          { text: "Ransomware", correct: true, points: 5 },
          { text: "Trojan Horse", correct: true, points: 5 },
          { text: "Firewall", correct: false, points: 0 },
          { text: "Spyware", correct: true, points: 5 },
        ],
        totalPoints: 15,
        minimumCorrectRequired: 2,
      },
      {
        id: 5,
        type: "input",
        question:
          "What is the term for a security vulnerability that exists from the moment software is released?",
        correctAnswer: "zero day",
        points: 10,
      },
      {
        id: 6,
        type: "multiple-choice",
        question:
          "Which of the following is NOT a common authentication factor?",
        answers: [
          { text: "Location", correct: false, points: 0 },
          { text: "Knowledge", correct: false, points: 0 },
          { text: "Time", correct: true, points: 10 },
          { text: "Possession", correct: false, points: 0 },
        ],
        totalPoints: 10,
      },
      {
        id: 7,
        type: "multiple-choice",
        question: "Which of these are characteristics of a strong password? ",
        answers: [
          { text: "Contains special characters", correct: true, points: 5 },
          { text: "At least 12 characters long", correct: true, points: 5 },
          { text: "Uses common dictionary words", correct: false, points: 0 },
          {
            text: "Mix of upper and lowercase letters",
            correct: true,
            points: 5,
          },
        ],
        totalPoints: 15,
        minimumCorrectRequired: 2,
      },
      {
        id: 8,
        type: "boolean",
        question:
          "A VPN (Virtual Private Network) can completely guarantee anonymity online",
        answer: false,
        points: 5,
      },
      {
        id: 9,
        type: "multiple-choice",
        question:
          "Which attack involves sending multiple requests to overwhelm a system?",
        answers: [
          { text: "DDoS", correct: true, points: 10 },
          { text: "SQL Injection", correct: false, points: 0 },
          { text: "Phishing", correct: false, points: 0 },
          { text: "Man-in-the-Middle", correct: false, points: 0 },
        ],
        totalPoints: 10,
      },
      {
        id: 10,
        type: "input",
        question:
          "What is the process of converting plaintext into a scrambled ciphertext called?",
        correctAnswer: "encryption",
        points: 10,
      },
      {
        id: 11,
        type: "multiple-choice",
        question: "Which of these are common network security tools? ",
        answers: [
          { text: "Firewall", correct: true, points: 5 },
          { text: "IDS/IPS", correct: true, points: 5 },
          { text: "Antivirus", correct: true, points: 5 },
          { text: "Compiler", correct: false, points: 0 },
        ],
        totalPoints: 15,
        minimumCorrectRequired: 2,
      },
      {
        id: 12,
        type: "multiple-choice",
        question:
          "What type of attack exploits input validation vulnerabilities in web applications?",
        answers: [
          { text: "Cross-Site Scripting (XSS)", correct: true, points: 10 },
          { text: "Brute Force", correct: false, points: 0 },
          { text: "Social Engineering", correct: false, points: 0 },
          { text: "Shoulder Surfing", correct: false, points: 0 },
        ],
        totalPoints: 10,
      },
      {
        id: 13,
        type: "input",
        question:
          "What is the term for a network security model that assumes no trust by default?",
        correctAnswer: "zero trust",
        points: 10,
      },
      {
        id: 14,
        type: "multiple-choice",
        question: "Which of these are examples of social engineering attacks? ",
        answers: [
          { text: "Phishing", correct: true, points: 5 },
          { text: "Pretexting", correct: true, points: 5 },
          { text: "SQL Injection", correct: false, points: 0 },
          { text: "Baiting", correct: true, points: 5 },
        ],
        totalPoints: 15,
        minimumCorrectRequired: 2,
      },
      {
        id: 15,
        type: "multiple-choice",
        question: "What is the purpose of salting a password before hashing?",
        answers: [
          {
            text: "To prevent rainbow table attacks",
            correct: true,
            points: 10,
          },
          { text: "To make the password longer", correct: false, points: 0 },
          { text: "To encrypt the password", correct: false, points: 0 },
          { text: "To compress the password", correct: false, points: 0 },
        ],
        totalPoints: 10,
      },
    ],
  },
  {
    id: 9,
    title: "Networking Basics",
    description: "Assess your understanding of network protocols and concepts.",
    difficulty: "Easy",
    numQuestions: 9,
    duration: 15,
    cover: "./images/Networking-Basics.png",
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: "What does LAN stand for?",
        answers: [
          { text: "Large Area Network", correct: false, points: 0 },
          { text: "Local Area Network", correct: true, points: 10 },
          { text: "Limited Access Network", correct: false, points: 0 },
          { text: "Long Antenna Network", correct: false, points: 0 },
        ],
        totalPoints: 10,
      },
      {
        id: 2,
        type: "boolean",
        question:
          "A switch connects devices within a single network, while a router connects multiple networks.",
        answers: [
          { text: "True", correct: true, points: 10 },
          { text: "False", correct: false, points: 0 },
        ],
        totalPoints: 10,
      },
      {
        id: 3,
        type: "multiple-choice",
        question:
          "Which protocol is primarily used for transferring files over the internet?",
        answers: [
          { text: "HTTP", correct: false, points: 0 },
          { text: "FTP", correct: true, points: 10 },
          { text: "SMTP", correct: false, points: 0 },
          { text: "DNS", correct: false, points: 0 },
        ],
        totalPoints: 10,
      },

      {
        id: 4,
        type: "multiple-choice",
        question: "What is the purpose of a firewall?",
        answers: [
          {
            text: "To speed up network connections",
            correct: false,
            points: 0,
          },
          {
            text: "To block unauthorized access to a network",
            correct: true,
            points: 10,
          },
          {
            text: "To assign IP addresses to devices",
            correct: false,
            points: 0,
          },
          {
            text: "To encrypt data transmitted over a network",
            correct: false,
            points: 0,
          },
        ],
        totalPoints: 10,
      },
      {
        id: 5,
        type: "boolean",
        question: "IPv4 addresses are longer than IPv6 addresses.",
        answers: [
          { text: "True", correct: false, points: 0 },
          { text: "False", correct: true, points: 10 },
        ],
        totalPoints: 10,
      },
      {
        id: 6,
        type: "input",
        question: "What is the difference between a hub and a switch?",
        answer:
          "A hub broadcasts data to all devices, while a switch sends data only to the intended recipient.",
        totalPoints: 10,
      },
      {
        id: 7,
        type: "multiple-choice",
        question: "Which of these is a common network cable type?",
        answers: [
          { text: "Coaxial cable", correct: true, points: 3.33 },
          { text: "Fiber optic cable", correct: true, points: 3.33 },
          { text: "Ethernet cable", correct: true, points: 3.34 },
          { text: "All of the above", correct: true, points: 10 },
        ],
        totalPoints: 10,
      },
      {
        id: 8,
        type: "boolean",
        question: "The Internet is an example of a WAN (Wide Area Network).",
        answers: [
          { text: "True", correct: true, points: 10 },
          { text: "False", correct: false, points: 0 },
        ],
        totalPoints: 10,
      },
      {
        id: 9,
        type: "input",
        question: "What is the function of the DNS (Domain Name System)?",
        answer:
          "To translate domain names (e.g., google.com) into IP addresses.",
        totalPoints: 10,
      },
    ],
  },
];
localStorage.setItem("quizzes", JSON.stringify(quizzes)) || [];

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

    const htmlContent = `<p class="hidden id">${id}</p>
    <img src="${cover}" alt="thumbnail" class="w-full flex-shrink-0" />
    <div class=" p-2 flex-1 flex flex-col gap-2">
        <h3 class="text-lg font-medium dark:text-primary-light">${title}</h3>
        <p class="dark:text-primary-light">${description}</p>
        <p class="text-sm font-light text-gray-500 dark:text-primary-light">Difficulty: ${difficulty}</p>
        <p class="text-sm font-light text-gray-500 dark:text-primary-light">${numQuestions} questions</p>
        <p class="text-sm font-light text-gray-500 dark:text-primary-light">Duration: ${duration} minutes</p>
         </div>
         <button id="startBtn"class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-b">
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
let startBtn;
setTimeout(() => {
  startBtn = document.querySelectorAll("#startBtn");
}, 20);
const dialog = document.querySelector("dialog");
setTimeout(() => {
  startBtn.forEach((Btn) => {
    Btn.addEventListener("click", () => {
      console.log(Btn.parentElement.querySelector(".id").textContent);
      dialog.showModal();
      quizzes.forEach((quiz) => {
        if (
          quiz.id === Number(Btn.parentElement.querySelector(".id").textContent)
        ) {
          console.log("hello"); //?
          document.querySelector(".dialog-title").textContent = quiz.title;
          document.querySelector(".dialog-description").textContent =
            quiz.description;
          document.querySelector(".dialog-difficulty").textContent =
            `Difficulty: ${quiz.difficulty}`;
          document.querySelector(".dialog-duration").textContent =
            `Duration: ${quiz.duration} minutes`;
          document.querySelector(".dialog-NumQuestions").textContent =
            `Number of questions: ${quiz.numQuestions}`;
          localStorage.setItem(
            "currentQuiz",
            Btn.parentElement.querySelector(".id").textContent
          );
        }
      });
    });
  });
}, 100);

document.querySelector(".close-modal").addEventListener("click", () => {
  dialog.close();
});

dialog.addEventListener("click", (e) => {
  const dialogDimensions = dialog.getBoundingClientRect();
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    dialog.close();
  }
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
