// React Hooks Interview Guide: From 0 to Hero

// ----------------------------
// What are React Hooks?
// ----------------------------
// Hooks are special built-in functions in React that let you "hook into" React features
// like state and lifecycle methods inside functional components (instead of using class components).
// Introduced in React 16.8 to make code cleaner, reusable, and easier to test.

// ----------------------------
// 1. useState - Add Local State
// ----------------------------
// Definition: Allows you to add a piece of local state to a functional component.
// It returns an array: [currentValue, functionToUpdateValue].
import { useState } from 'react';
const [count, setCount] = useState(0); // count = 0 initially

// ----------------------------
// 2. useEffect - Side Effects (like Lifecycle Methods)
// ----------------------------
// Definition: Runs code after the component renders (similar to componentDidMount, componentDidUpdate).
// Perfect for: API calls, subscriptions, timers, and cleanup tasks.
import { useEffect } from 'react';
useEffect(() => {
  console.log("Component mounted or updated");

  return () => {
    console.log("Cleanup when component unmounts or before next run");
  };
}, []); // Empty array = run once on mount

// ----------------------------
// 3. useContext - Use Global Data (Context API)
// ----------------------------
// Definition: Access shared state or data without prop drilling.
// Great for themes, auth, language preferences, etc.
import { useContext, createContext } from 'react';
const ThemeContext = createContext();
const theme = useContext(ThemeContext); // gets the current context value

// ----------------------------
// 4. useRef - Keep Values Between Renders
// ----------------------------
// Definition: Creates a mutable object that holds a value and doesn't trigger re-render when changed.
// Commonly used to access DOM nodes or store previous values.
import { useRef } from 'react';
const inputRef = useRef(null);
<input ref={inputRef} />; // Access DOM node like inputRef.current.focus()

// ----------------------------
// 5. useMemo - Cache Expensive Calculations
// ----------------------------
// Definition: Memoizes the result of a function to avoid recalculating unless dependencies change.
// Useful for performance optimization in slow or expensive computations.
import { useMemo } from 'react';
const result = useMemo(() => computeExpensiveValue(a), [a]);

// ----------------------------
// 6. useCallback - Cache Functions
// ----------------------------
// Definition: Returns the same function instance between renders unless dependencies change.
// Useful when passing callbacks to memoized child components to avoid unnecessary re-renders.
import { useCallback } from 'react';
const handleClick = useCallback(() => doSomething(), [dependency]);

// ----------------------------
// 7. useReducer - Manage Complex State Logic
// ----------------------------
// Definition: Like useState, but better for when state has many sub-values or complex logic.
// It uses a reducer function and a dispatch method to update the state.
import { useReducer } from 'react';
const initialState = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    default: return state;
  }
}
const [state, dispatch] = useReducer(reducer, initialState);

// ----------------------------
// 8. useLayoutEffect - Run Code Before Screen Paints
// ----------------------------
// Definition: Works like useEffect but runs synchronously **before** the browser paints the screen.
// Best used when you need to measure DOM size or change layout before paint.
import { useLayoutEffect } from 'react';
useLayoutEffect(() => {
  // measure layout or DOM size
}, []);

// ----------------------------
// 9. useImperativeHandle - Expose Methods to Parent
// ----------------------------
// Definition: Customize what gets exposed when using `ref` in the parent.
// Typically used with forwardRef to allow parent components to call functions in child.
import { useImperativeHandle, forwardRef } from 'react';
const MyInput = forwardRef((props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus()
  }));
  return <input ref={inputRef} />;
});

// ----------------------------
// Interview Questions
// ----------------------------
// 1. What is the difference between useState and useRef?
// 2. When should you use useCallback or useMemo?
// 3. How does useReducer compare to Redux?
// 4. What happens if you change the order of hooks?
// 5. When would you use useLayoutEffect instead of useEffect?

// ----------------------------
// Interview Tips:
// ----------------------------
// - Always call hooks at the top level of your function
// - Never call hooks conditionally or inside loops
// - useMemo and useCallback improve performance, but avoid overusing
// - useReducer is great for form logic or complex UI state
// - useContext simplifies prop drilling and global config

// ----------------------------
// End of React Hooks Interview Guide
