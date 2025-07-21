const es6Concepts = [
    {
      title: '1. let & const',
      description: `let is block-scoped and can be reassigned. const is also block-scoped but cannot be reassigned.`,
      example: `let age = 25;\nage = 30;\nconst name = "Vikas";`
    },
    {
      title: '2. Arrow Functions',
      description: `Shorter syntax for writing functions, and they don't bind their own 'this'.`,
      example: `const greet = name => \`Hello, \${name}!\`;`
    },
    {
      title: '3. Destructuring',
      description: `Allows unpacking values from arrays or properties from objects into distinct variables.`,
      example: `const {name, age} = user;\nconst [a, b] = [1, 2];`
    },
    {
      title: '4. Spread & Rest Operator',
      description: `Spread expands arrays/objects. Rest collects parameters into an array.`,
      example: `const arr = [1, 2];\nconst newArr = [...arr, 3];\nconst sum = (...nums) => nums.reduce((a, b) => a + b);`
    },
    {
      title: '5. Array map() & filter()',
      description: `map transforms each item. filter removes items based on condition.`,
      example: `users.map(u => u.name);\nusers.filter(u => u.age > 18);`
    },
    {
      title: '6. Template Literals',
      description: `Allow embedded expressions and multi-line strings.`,
      example: `const name = "Vikas";\nconst msg = \`Hello, \${name}!\`;`
    },
    {
      title: '7. Default Parameters',
      description: `Set default values for function parameters.`,
      example: `function greet(name = "Guest") {\n  return \`Hello \${name}\`; \n}`
    },
    {
      title: '8. Promises',
      description: `Used for asynchronous operations and chaining.`,
      example: `fetch(url).then(res => res.json()).then(data => console.log(data));`
    },
    {
      title: '9. async/await',
      description: `Cleaner syntax for handling asynchronous code.`,
      example: `const getData = async () => {\n  const res = await fetch(url);\n  const data = await res.json();\n};`
    },
    {
      title: '10. Classes',
      description: `ES6 introduced class syntax for constructor functions.`,
      example: `class Person {\n  constructor(name) {\n    this.name = name;\n  }\n}`
    },
    {
      title: '11. Class Inheritance',
      description: `Use 'extends' and 'super' for subclassing.`,
      example: `class Student extends Person {\n  constructor(name, grade) {\n    super(name);\n    this.grade = grade;\n  }\n}`
    },
    {
      title: '12. Modules (import/export)',
      description: `Split code into reusable pieces with import/export.`,
      example: `export const name = "Vikas";\nimport { name } from './module.js';`
    },
    {
      title: '13. Enhanced Object Literals',
      description: `Shorthand for assigning variables to object keys.`,
      example: `const name = "Vikas";\nconst user = { name, greet() { return "Hi"; } };`
    },
    {
      title: '14. for...of Loop',
      description: `Iterates over iterable objects like arrays.`,
      example: `for (let item of arr) {\n  console.log(item);\n}`
    },
    {
      title: '15. for...in Loop',
      description: `Iterates over object keys.`,
      example: `for (let key in obj) {\n  console.log(key, obj[key]);\n}`
    },
    {
      title: '16. Set & WeakSet',
      description: `Set stores unique values. WeakSet stores weakly held objects.`,
      example: `const set = new Set([1,2,3,3]); // 1,2,3 only`
    },
    {
      title: '17. Map & WeakMap',
      description: `Map stores key-value pairs. WeakMap only allows objects as keys.`,
      example: `const map = new Map();\nmap.set('a', 1);`
    },
    {
      title: '18. Symbol',
      description: `Unique and immutable primitive used as object keys.`,
      example: `const sym = Symbol("id");\nconst obj = { [sym]: 123 };`
    },
    {
      title: '19. Optional Chaining',
      description: `Safely access deeply nested properties.`,
      example: `const name = user?.info?.name;`
    },
    {
      title: '20. Nullish Coalescing Operator (??)',
      description: `Returns right-hand value if left is null or undefined.`,
      example: `const name = input ?? "Guest";`
    },
    {
      title: '21. Object.assign()',
      description: `Copies properties from source to target object.`,
      example: `const newObj = Object.assign({}, obj1, obj2);`
    },
    {
      title: '22. Object.entries(), keys(), values()',
      description: `Convert object to array of key/value pairs or list keys/values.`,
      example: `Object.entries(obj); Object.keys(obj);`
    },
    {
      title: '23. Array.find() & findIndex()',
      description: `Find element or its index in array by condition.`,
      example: `users.find(u => u.id === 1);`
    },
    {
      title: '24. Array.includes()',
      description: `Checks if value exists in array.`,
      example: `arr.includes(3);`
    },
    {
      title: '25. Chaining map(), filter(), reduce()',
      description: `Combine transformations in a pipeline.`,
      example: `arr.filter(x=>x>2).map(x=>x*2).reduce((a,b)=>a+b);`
    },
    {
      title: '26. Function Hoisting (vs Arrow)',
      description: `Function declarations are hoisted, arrow functions are not.`,
      example: `console.log(fn()); function fn() { return 1; }`
    },
    {
      title: '27. this in Arrow vs Normal Function',
      description: `Arrow functions don't have their own 'this'.`,
      example: `const obj = { val: 1, fn: () => console.log(this.val) };`
    },
    {
      title: '28. Shallow Copy vs Deep Copy',
      description: `Spread (...) makes shallow copies. Deep copies need recursion or libraries.`,
      example: `const shallow = {...obj};`
    },
    {
      title: '29. Closures in ES6',
      description: `Functions remember variables from outer scope.`,
      example: `function outer() {\n  let x = 10;\n  return function inner() { console.log(x); };\n}`
    },
    {
      title: '30. Event Loop & Microtask Queue',
      description: `Understanding async code execution order.`,
      example: `Promise.resolve().then(()=>console.log("micro")); console.log("sync");`
    }
  ];
  
export default es6Concepts