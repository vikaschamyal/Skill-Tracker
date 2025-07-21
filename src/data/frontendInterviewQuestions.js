const  frontendInterviewQuestions =  [
      {
        "id": 1,
        "category": "HTML",
        "question": "What is the purpose of the DOCTYPE declaration?",
        "answer": "Tells the browser which HTML version to use 📜 (HTML5: <!DOCTYPE html>)"
      },
      {
        "id": 2,
        "category": "HTML",
        "question": "Difference between <div> and <span>?",
        "answer": "<div> is block-level (full width), <span> is inline (text level) 📦 vs 📝"
      },
      {
        "id": 3,
        "category": "HTML",
        "question": "What are semantic HTML elements?",
        "answer": "Tags with meaning like <header>, <footer>, <article> (better SEO & accessibility) 🏷️"
      },
      {
        "id": 4,
        "category": "HTML",
        "question": "How to make a responsive image?",
        "answer": "Use <img srcset='...'> or CSS max-width: 100% 📱➡️🖥️"
      },
      {
        "id": 5,
        "category": "HTML",
        "question": "What does HTML5 localStorage do?",
        "answer": "Stores data in browser with no expiration (5MB limit) 💾"
      },
      {
        "id": 6,
        "category": "JavaScript",
        "question": "Difference between let, const, and var?",
        "answer": "var: function-scoped, let/const: block-scoped. const can't be reassigned 🔒"
      },
      {
        "id": 7,
        "category": "JavaScript",
        "question": "What is closure?",
        "answer": "Function + its outer variables (remembers its environment) 🧠"
      },
      {
        "id": 8,
        "category": "JavaScript",
        "question": "What is event delegation?",
        "answer": "Attach event to parent instead of children (better performance) 👆➡️👨‍👧‍👦"
      },
      {
        "id": 9,
        "category": "JavaScript",
        "question": "What is the event loop?",
        "answer": "JS runtime handles async callbacks (stack → queue → stack) 🔄"
      },
      {
        "id": 10,
        "category": "JavaScript",
        "question": "Difference between == and ===?",
        "answer": "== converts types, === strict equality (no type conversion) 1=='1'✅ vs 1==='1'❌"
      },
      {
        "id": 11,
        "category": "JavaScript",
        "question": "What is hoisting?",
        "answer": "Variables/functions moved to top of scope (var is hoisted, let/const aren't) 🏗️"
      },
      {
        "id": 12,
        "category": "JavaScript",
        "question": "What is a promise?",
        "answer": "Object representing async operation (pending → fulfilled/rejected) 🤝"
      },
      {
        "id": 13,
        "category": "JavaScript",
        "question": "What is async/await?",
        "answer": "Syntax sugar for promises (makes async code look synchronous) ⏳➡️🚀"
      },
      {
        "id": 14,
        "category": "JavaScript",
        "question": "What is 'this' keyword?",
        "answer": "Refers to current object context (changes based on how function is called) 👈"
      },
      {
        "id": 15,
        "category": "JavaScript",
        "question": "What is arrow function?",
        "answer": "Shorter syntax + no own 'this' (inherits from parent scope) => 🏹"
      },
      {
        "id": 16,
        "category": "React",
        "question": "What is React?",
        "answer": "JS library for building UI components (not a framework) 🧩"
      },
      {
        "id": 17,
        "category": "React",
        "question": "What is JSX?",
        "answer": "HTML-like syntax that compiles to JavaScript 🏷️+🔄=⚛️"
      },
      {
        "id": 18,
        "category": "React",
        "question": "Difference between state and props?",
        "answer": "State: internal data, Props: external data (passed down) 🏠 vs 📦"
      },
      {
        "id": 19,
        "category": "React",
        "question": "What are React hooks?",
        "answer": "Functions that let you use state in functional components 🎣"
      },
      {
        "id": 20,
        "category": "React",
        "question": "What does useState do?",
        "answer": "Adds state to functional components [value, setValue] = useState(initial) 🔄"
      },
      {
        "id": 21,
        "category": "React",
        "question": "What does useEffect do?",
        "answer": "Handles side effects (API calls, subscriptions) in functional components ♻️"
      },
      {
        "id": 22,
        "category": "React",
        "question": "What is Virtual DOM?",
        "answer": "Lightweight copy of real DOM (faster updates) 🏎️💨"
      },
      {
        "id": 23,
        "category": "React",
        "question": "What are keys in React lists?",
        "answer": "Unique IDs to help React track elements (improves performance) 🔑"
      },
      {
        "id": 24,
        "category": "React",
        "question": "What is prop drilling?",
        "answer": "Passing props through multiple levels (fix with Context/Redux) 🚚📦"
      },
      {
        "id": 25,
        "category": "React",
        "question": "Difference between controlled and uncontrolled components?",
        "answer": "Controlled: React manages state, Uncontrolled: DOM manages state 🎮 vs 🆓"
      },
      {
        "id": 26,
        "category": "HTML",
        "question": "What is the viewport meta tag?",
        "answer": "<meta name='viewport' content='width=device-width'> (makes site mobile-friendly) 📱"
      },
      {
        "id": 27,
        "category": "HTML",
        "question": "What are data- attributes?",
        "data-answer": "Custom attributes (data-id='123') for storing extra info 💽"
      },
      {
        "id": 28,
        "category": "HTML",
        "question": "Difference between <script>, <script async>, and <script defer>?",
        "answer": "Normal: blocks parsing, async: downloads parallel + executes immediately, defer: waits for parsing ⏳"
      },
      {
        "id": 29,
        "category": "HTML",
        "question": "What is HTML Canvas?",
        "answer": "Element for drawing graphics with JavaScript 🎨"
      },
      {
        "id": 30,
        "category": "HTML",
        "question": "What is Web Storage API?",
        "answer": "localStorage (persistent) and sessionStorage (tab session) 💾"
      },
      {
        "id": 31,
        "category": "JavaScript",
        "question": "What is destructuring?",
        "answer": "Unpack values from objects/arrays into variables const {name} = obj 🧩"
      },
      {
        "id": 32,
        "category": "JavaScript",
        "question": "What is the spread operator?",
        "answer": "The spread operator (...) expands iterables [...arr, ...arr2] or copies objects {...obj} ✨"
      },
      {
        "id": 33,
        "category": "JavaScript",
        "question": "What is a higher-order function?",
        "answer": "Function that takes/returns functions (like map, filter) 🏗️"
      },
      {
        "id": 34,
        "category": "JavaScript",
        "question": "What is memoization?",
        "answer": "Caching function results to avoid recomputation 🧠"
      },
      {
        "id": 35,
        "category": "JavaScript",
        "question": "What is a pure function?",
        "answer": "Same input → same output, no side effects 🔄"
      },
      {
        "id": 36,
        "category": "React",
        "question": "What is React Context?",
        "answer": "Global state management without prop drilling 🌎"
      },
      {
        "id": 37,
        "category": "React",
        "question": "What is React Router?",
        "answer": "Library for handling navigation in SPA 🗺️"
      },
      {
        "id": 38,
        "category": "React",
        "question": "What is useReducer?",
        "answer": "State management hook for complex logic (like Redux) 🎛️"
      },
      {
        "id": 39,
        "category": "React",
        "question": "What is React.memo?",
        "answer": "Optimization: memoizes component to prevent unnecessary re-renders 🚀"
      },
      {
        "id": 40,
        "category": "React",
        "question": "What are custom hooks?",
        "answer": "Reusable hook logic (must start with 'use') ♻️"
      },
      {
        "id": 41,
        "category": "HTML",
        "question": "What is accessibility (a11y)?",
        "answer": "Making websites usable for everyone (screen readers, keyboard nav) ♿"
      },
      {
        "id": 42,
        "category": "HTML",
        "question": "What is the difference between GET and POST?",
        "answer": "GET: data in URL (bookmarkable), POST: data in body (secure) 🔍 vs 📮"
      },
      {
        "id": 43,
        "category": "JavaScript",
        "question": "What is JSON?",
        "answer": "JavaScript Object Notation (data format) { \"key\": \"value\" } 📄"
      },
      {
        "id": 44,
        "category": "JavaScript",
        "question": "What is CORS?",
        "answer": "Security: blocks cross-origin requests unless allowed by server 🚧"
      },
      {
        "id": 45,
        "category": "JavaScript",
        "question": "What is the difference between null and undefined?",
        "answer": "undefined: variable declared but not assigned, null: intentional empty value ❓ vs 🚫"
      },
      {
        "id": 46,
        "category": "React",
        "question": "What is Redux?",
        "answer": "Predictable state container (store → actions → reducers) 🏪"
      },
      {
        "id": 47,
        "category": "React",
        "question": "What is the difference between class and functional components?",
        "answer": "Class: lifecycle methods, Functional: hooks (modern approach) 🏛️ vs 🏗️"
      },
      {
        "id": 48,
        "category": "React",
        "question": "What is React Fragment?",
        "answer": "<>...</> - Group elements without extra DOM nodes 🧩"
      },
      {
        "id": 49,
        "category": "React",
        "question": "What is code splitting?",
        "answer": "Splitting code into smaller bundles (load what's needed) ✂️"
      },
      {
        "id": 50,
        "category": "React",
        "question": "What is Next.js?",
        "answer": "React framework with SSR, SSG, and routing built-in ⚡"
      }
];
  
export default frontendInterviewQuestions;