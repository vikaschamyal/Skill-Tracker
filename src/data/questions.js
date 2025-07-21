// src/data/questions.js
const questions = [
    
          {
            "id": 1,
            "question": "What is React?",
            "answer": "React is an open-source JavaScript library for building user interfaces, particularly single-page applications."
          },
          {
            "id": 2,
            "question": "What are the main features of React?",
            "answer": "Virtual DOM, JSX, Components, One-way data binding, Performance, Extensions."
          },
          {
            "id": 3,
            "question": "What is JSX?",
            "answer": "JSX is a syntax extension for JavaScript that allows writing HTML-like code in JavaScript."
          },
          {
            "id": 4,
            "question": "What is the Virtual DOM?",
            "answer": "A lightweight copy of the real DOM that React uses to optimize updates by minimizing direct DOM manipulation."
          },
          {
            "id": 5,
            "question": "What are React components?",
            "answer": "Reusable, independent pieces of UI that can be composed together to build complex interfaces."
          },
          {
            "id": 6,
            "question": "What is the difference between state and props?",
            "answer": "State is internal and controlled by the component, props are external and passed to the component."
          },
          {
            "id": 7,
            "question": "What are controlled components?",
            "answer": "Components where form data is handled by React state, making React the 'single source of truth'."
          },
          {
            "id": 8,
            "question": "What are uncontrolled components?",
            "answer": "Components where form data is handled by the DOM itself, using refs to access values."
          },
          {
            "id": 9,
            "question": "What are React hooks?",
            "answer": "Functions that let you use state and other React features in functional components."
          },
          {
            "id": 10,
            "question": "What is useState hook?",
            "answer": "A hook that lets you add React state to functional components."
          },
          {
            "id": 11,
            "question": "What is useEffect hook?",
            "answer": "A hook that performs side effects in functional components (like data fetching, subscriptions)."
          },
          {
            "id": 12,
            "question": "What is useContext hook?",
            "answer": "A hook that allows you to access the value of a React context in a functional component."
          },
          {
            "id": 13,
            "question": "What is useReducer hook?",
            "answer": "An alternative to useState for managing complex state logic in functional components."
          },
          {
            "id": 14,
            "question": "What is React.memo?",
            "answer": "A higher-order component that memoizes the result to prevent unnecessary re-renders."
          },
          {
            "id": 15,
            "question": "What is useCallback hook?",
            "answer": "A hook that returns a memoized callback function to prevent unnecessary re-renders."
          },
          {
            "id": 16,
            "question": "What is useMemo hook?",
            "answer": "A hook that memoizes expensive calculations to optimize performance."
          },
          {
            "id": 17,
            "question": "What is useRef hook?",
            "answer": "A hook that creates a mutable ref object whose .current property is initialized to the passed argument."
          },
          {
            "id": 18,
            "question": "What are React Fragments?",
            "answer": "A way to group multiple elements without adding extra nodes to the DOM."
          },
          {
            "id": 19,
            "question": "What is the purpose of keys in React?",
            "answer": "Keys help React identify which items have changed, are added, or are removed in lists."
          },
          {
            "id": 20,
            "question": "What is prop drilling?",
            "answer": "The process of passing props through multiple levels of components."
          },
          {
            "id": 21,
            "question": "How to prevent prop drilling?",
            "answer": "Using Context API or state management libraries like Redux."
          },
          {
            "id": 22,
            "question": "What is React Context?",
            "answer": "A way to share values between components without explicitly passing props."
          },
          {
            "id": 23,
            "question": "What is the difference between React and React Native?",
            "answer": "React is for web apps, React Native is for mobile apps using native components."
          },
          {
            "id": 24,
            "question": "What is the difference between class and functional components?",
            "answer": "Class components use ES6 classes, functional components are plain JavaScript functions (now with hooks)."
          },
          {
            "id": 25,
            "question": "What are Higher-Order Components (HOC)?",
            "answer": "Functions that take a component and return a new component with added functionality."
          },
          {
            "id": 26,
            "question": "What are React Portals?",
            "answer": "A way to render children into a DOM node that exists outside the parent component's DOM hierarchy."
          },
          {
            "id": 27,
            "question": "What is Error Boundary in React?",
            "answer": "A component that catches JavaScript errors in its child component tree and displays a fallback UI."
          },
          {
            "id": 28,
            "question": "What is React Router?",
            "answer": "A library for handling routing in React applications."
          },
          {
            "id": 29,
            "question": "What is Redux?",
            "answer": "A predictable state container for JavaScript apps, often used with React."
          },
          {
            "id": 30,
            "question": "What are the three principles of Redux?",
            "answer": "Single source of truth, state is read-only, changes are made with pure functions."
          },
          {
            "id": 31,
            "question": "What are actions in Redux?",
            "answer": "Plain JavaScript objects that send data from your application to your Redux store."
          },
          {
            "id": 32,
            "question": "What are reducers in Redux?",
            "answer": "Pure functions that specify how the application's state changes in response to actions."
          },
          {
            "id": 33,
            "question": "What is the Redux store?",
            "answer": "An object that holds the application state and provides methods to access and update it."
          },
          {
            "id": 34,
            "question": "What is middleware in Redux?",
            "answer": "Functions that intercept actions before they reach the reducer, used for logging, async operations, etc."
          },
          {
            "id": 35,
            "question": "What is React's one-way data binding?",
            "answer": "Data flows from parent to child components via props, and changes are made via callbacks."
          },
          {
            "id": 36,
            "question": "What is the significance of the 'key' prop?",
            "answer": "It helps React identify which items have changed, are added, or are removed in lists."
          },
          {
            "id": 37,
            "question": "What is the difference between Element and Component?",
            "answer": "An element is a plain object describing what you want to appear on screen, a component can be a function or class that returns elements."
          },
          {
            "id": 38,
            "question": "What is Lifting State Up in React?",
            "answer": "Moving shared state to the closest common ancestor of components that need it."
          },
          {
            "id": 39,
            "question": "What are synthetic events in React?",
            "answer": "Cross-browser wrappers around the browser's native events for consistent behavior."
          },
          {
            "id": 40,
            "question": "What is server-side rendering in React?",
            "answer": "Rendering React components on the server to improve performance and SEO."
          },
          {
            "id": 41,
            "question": "What is the difference between createElement and cloneElement?",
            "answer": "createElement creates a new React element, cloneElement clones an existing element with new props."
          },
          {
            "id": 42,
            "question": "What are the lifecycle methods in React class components?",
            "answer": "Mounting: constructor, render, componentDidMount; Updating: shouldComponentUpdate, render, componentDidUpdate; Unmounting: componentWillUnmount."
          },
          {
            "id": 43,
            "question": "What is the purpose of constructor in React?",
            "answer": "To initialize state and bind event handler methods."
          },
          {
            "id": 44,
            "question": "What is the purpose of componentDidMount?",
            "answer": "It's invoked immediately after a component is mounted, good for API calls and subscriptions."
          },
          {
            "id": 45,
            "question": "What is the purpose of componentDidUpdate?",
            "answer": "It's invoked after updating occurs, good for DOM operations after updates."
          },
          {
            "id": 46,
            "question": "What is the purpose of componentWillUnmount?",
            "answer": "It's invoked immediately before a component is unmounted, good for cleanup like invalidating timers."
          },
          {
            "id": 47,
            "question": "What is the purpose of shouldComponentUpdate?",
            "answer": "To let React know if a component's output is not affected by the current change in state or props."
          },
          {
            "id": 48,
            "question": "What is the difference between React.PureComponent and React.Component?",
            "answer": "PureComponent implements shouldComponentUpdate with a shallow prop and state comparison."
          },
          {
            "id": 49,
            "question": "What is React Fiber?",
            "answer": "The new reconciliation engine in React 16 that enables incremental rendering of the virtual DOM."
          },
          {
            "id": 50,
            "question": "What are React hooks rules?",
            "answer": "Only call hooks at the top level (not in loops/conditions/nested functions), and only from React functions."
          },
          {
            "id": 51,
            "question": "What is custom hook in React?",
            "answer": "A JavaScript function whose name starts with 'use' and that may call other hooks."
          },
          {
            "id": 52,
            "question": "What is the difference between useEffect and useLayoutEffect?",
            "answer": "useEffect runs after render, useLayoutEffect runs synchronously after all DOM mutations."
          },
          {
            "id": 53,
            "question": "What is code splitting in React?",
            "answer": "Splitting your code into smaller bundles that can be loaded on demand to improve performance."
          },
          {
            "id": 54,
            "question": "What is lazy loading in React?",
            "answer": "Loading components only when they're needed, using React.lazy and Suspense."
          },
          {
            "id": 55,
            "question": "What is React Suspense?",
            "answer": "A component that lets you specify a loading fallback while child components are loading."
          },
          {
            "id": 56,
            "question": "What is React.StrictMode?",
            "answer": "A tool for highlighting potential problems in an application during development."
          },
          {
            "id": 57,
            "question": "What is prop-types library?",
            "answer": "A library for runtime type checking of React props."
          },
          {
            "id": 58,
            "question": "What is the difference between create-react-app and Next.js?",
            "answer": "CRA is for client-side apps, Next.js is a framework with SSR, SSG, and other features."
          },
          {
            "id": 59,
            "question": "What is the purpose of refs in React?",
            "answer": "To access DOM nodes or React elements directly."
          },
          {
            "id": 60,
            "question": "What is forwardRef in React?",
            "answer": "A technique for passing refs through components to child components."
          },
          {
            "id": 61,
            "question": "What is reconciliation in React?",
            "answer": "The process through which React updates the DOM by comparing the new element tree with the previous one."
          },
          {
            "id": 62,
            "question": "What is the difference between React and Angular?",
            "answer": "React is a library focused on UI, Angular is a full MVC framework with more built-in features."
          },
          {
            "id": 63,
            "question": "What is the difference between React and Vue?",
            "answer": "React uses JSX and one-way data binding, Vue uses templates and two-way data binding."
          },
          {
            "id": 64,
            "question": "What is the purpose of the dependency array in useEffect?",
            "answer": "It specifies when the effect should re-run based on changes to those dependencies."
          },
          {
            "id": 65,
            "question": "What is the children prop in React?",
            "answer": "A special prop that contains the content between the opening and closing tags of a component."
          },
          {
            "id": 66,
            "question": "What is the difference between useRef and useState?",
            "answer": "useRef doesn't trigger re-renders when changed, useState does."
          },
          {
            "id": 67,
            "question": "What is the purpose of ReactDOM?",
            "answer": "It provides DOM-specific methods for React, like render() and hydrate()."
          },
          {
            "id": 68,
            "question": "What is the difference between ReactDOM.render and ReactDOM.hydrate?",
            "answer": "render() is for client-side rendering, hydrate() is for SSR to attach event listeners."
          },
          {
            "id": 69,
            "question": "What is the purpose of defaultProps?",
            "answer": "To define default values for props in case they're not provided."
          },
          {
            "id": 70,
            "question": "What is the purpose of displayName in React?",
            "answer": "To set the display name for debugging messages and React DevTools."
          },
          {
            "id": 71,
            "question": "What is the difference between state and context?",
            "answer": "State is local to a component, context is global to a component tree."
          },
          {
            "id": 72,
            "question": "What is the purpose of React DevTools?",
            "answer": "A browser extension for inspecting React component hierarchies and their state/props."
          },
          {
            "id": 73,
            "question": "What is the purpose of React's Concurrent Mode?",
            "answer": "To make apps more responsive by rendering without blocking the main thread."
          },
          {
            "id": 74,
            "question": "What is the difference between useMemo and useCallback?",
            "answer": "useMemo memoizes values, useCallback memoizes functions."
          },
          {
            "id": 75,
            "question": "What is the purpose of React's Profiler API?",
            "answer": "To measure how often components render and what 'costs' they have."
          },
          {
            "id": 76,
            "question": "What is the difference between React.memo and useMemo?",
            "answer": "React.memo memoizes components, useMemo memoizes values."
          },
          {
            "id": 77,
            "question": "What is the purpose of React's createPortal?",
            "answer": "To render children into a DOM node outside the parent component's hierarchy."
          },
          {
            "id": 78,
            "question": "What is the purpose of React's cloneElement?",
            "answer": "To clone and return a new React element with merged props."
          },
          {
            "id": 79,
            "question": "What is the purpose of React's createRef?",
            "answer": "To create a ref that can be attached to React elements."
          },
          {
            "id": 80,
            "question": "What is the purpose of React's forwardRef?",
            "answer": "To forward refs through components to child components."
          },
          {
            "id": 81,
            "question": "What is the purpose of React's lazy function?",
            "answer": "To enable code-splitting by lazy-loading components."
          },
          {
            "id": 82,
            "question": "What is the purpose of React's Suspense component?",
            "answer": "To specify a fallback UI while waiting for lazy components to load."
          },
          {
            "id": 83,
            "question": "What is the purpose of React's memo function?",
            "answer": "To memoize a component and prevent unnecessary re-renders."
          },
          {
            "id": 84,
            "question": "What is the purpose of React's useImperativeHandle hook?",
            "answer": "To customize the instance value exposed when using ref with forwardRef."
          },
          {
            "id": 85,
            "question": "What is the purpose of React's useDebugValue hook?",
            "answer": "To display a label for custom hooks in React DevTools."
          },
          {
            "id": 86,
            "question": "What is the purpose of React's useDeferredValue hook?",
            "answer": "To defer updating non-urgent parts of the UI."
          },
          {
            "id": 87,
            "question": "What is the purpose of React's useTransition hook?",
            "answer": "To mark state updates as transitions that can be interrupted."
          },
          {
            "id": 88,
            "question": "What is the purpose of React's useId hook?",
            "answer": "To generate unique IDs that are stable across server and client."
          },
          {
            "id": 89,
            "question": "What is the purpose of React's useSyncExternalStore hook?",
            "answer": "To subscribe to external stores in a way that works with concurrent rendering."
          },
          {
            "id": 90,
            "question": "What is the purpose of React's useInsertionEffect hook?",
            "answer": "For CSS-in-JS libraries to inject styles before layout effects fire."
          },
          {
            "id": 91,
            "question": "What is the difference between React's useEffect and useInsertionEffect?",
            "answer": "useInsertionEffect fires synchronously before all DOM mutations, useEffect fires after."
          },
          {
            "id": 92,
            "question": "What is the purpose of React's startTransition API?",
            "answer": "To mark non-urgent state updates that can be interrupted."
          },
          {
            "id": 93,
            "question": "What is the purpose of React's flushSync API?",
            "answer": "To force React to flush updates synchronously in rare cases."
          },
          {
            "id": 94,
            "question": "What is the purpose of React's unstable_batchedUpdates API?",
            "answer": "To batch multiple state updates into a single re-render (legacy API)."
          },
          {
            "id": 95,
            "question": "What is the purpose of React's createRoot API?",
            "answer": "To create a root for concurrent rendering in React 18+."
          },
          {
            "id": 96,
            "question": "What is the purpose of React's hydrateRoot API?",
            "answer": "To hydrate server-rendered content with concurrent features in React 18+."
          },
          {
            "id": 97,
            "question": "What is the purpose of React's renderToPipeableStream API?",
            "answer": "To render React components to a Node.js stream for SSR with Suspense."
          },
          {
            "id": 98,
            "question": "What is the purpose of React's renderToReadableStream API?",
            "answer": "To render React components to a web stream for SSR with Suspense."
          },
          {
            "id": 99,
            "question": "What is the purpose of React's renderToStaticMarkup API?",
            "answer": "To render React components to static HTML string without extra DOM attributes."
          },
          {
            "id": 100,
            "question": "What is the purpose of React's renderToString API?",
            "answer": "To render React components to an HTML string for SSR."
          }
        
      
  ];
  
  export default questions;
  