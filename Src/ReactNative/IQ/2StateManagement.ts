// ==========================================
// Topic 3 — State Management in React Native
// ==========================================

// 1) Why State Management matters
// State = the data that determines what the UI shows
// Proper state management prevents:
// - Unnecessary re-renders
// - Confusing prop-drilling
// - Hard-to-maintain code in large apps

import React from 'react';
import {Text} from 'react-native';

// Example: Counter app using local state
export function CounterLocal() {
  const [count, setCount] = React.useState(0);
  return <Text onPress={() => setCount(count + 1)}>Count: {count}</Text>;
}
// This is local state (component-specific)
// For shared data, we need global state management

// ------------------------------------------
// 2) Local State — useState and useReducer
// ------------------------------------------

// useState: simple state
const [name, setName] = React.useState('Kalyan');

// useReducer: complex logic / multiple state
function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'remove':
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
}
const [todos, dispatch] = React.useReducer(reducer, []);
dispatch({type: 'add', payload: {id: 1, text: 'Learn RN'}});

// Interview tip: Explain why useReducer over useState
// - Complex state logic
// - Multiple actions
// - Predictable updates

// ------------------------------------------
// 3) Context API — lightweight global state
// ------------------------------------------

// Built-in React feature to pass state without prop drilling
// Ideal for small to medium apps

const ThemeContext = React.createContext();

export function ThemeProvider({children}) {
  const [darkMode, setDarkMode] = React.useState(false);
  return (
    <ThemeContext.Provider value={{darkMode, setDarkMode}}>
      {children}
    </ThemeContext.Provider>
  );
}

export function ThemedText() {
  const {darkMode} = React.useContext(ThemeContext);
  return <Text>{darkMode ? 'Dark Mode' : 'Light Mode'}</Text>;
}

// Interview tip:
// - Provider wraps app → all children can access context
// - Frequent updates may re-render many components

// ------------------------------------------
// 4) Redux — scalable global state
// ------------------------------------------

// Popular for large apps
// Central store with actions, reducers, dispatch, selectors
// Maintains predictable state changes

// actions.js
export const increment = () => ({type: 'INCREMENT'});

// reducer.js
export default function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    default:
      return state;
  }
}

// store.js
import {createStore} from 'redux';
import counter from './reducer';
export const store = createStore(counter);

// App.js
import {Provider, useDispatch, useSelector} from 'react-redux';
import {increment} from './actions';

export function CounterRedux() {
  const count = useSelector(state => state);
  const dispatch = useDispatch();
  return <Text onPress={() => dispatch(increment())}>Count: {count}</Text>;
}

export function AppRedux() {
  return (
    <Provider store={store}>
      <CounterRedux />
    </Provider>
  );
}

// Interview points:
// - Redux is predictable, debuggable, easy to track state
// - Middleware: Redux Thunk or Saga for async calls

// ------------------------------------------
// 5) AsyncStorage — persistent local state
// ------------------------------------------

import AsyncStorage from '@react-native-async-storage/async-storage';

export async function saveToken(token) {
  try {
    await AsyncStorage.setItem('authToken', token);
  } catch (error) {
    console.log('Error saving token', error);
  }
}

export async function getToken() {
  try {
    return await AsyncStorage.getItem('authToken');
  } catch (error) {
    console.log('Error getting token', error);
  }
}

// Interview tip:
// - Always try/catch for AsyncStorage
// - Don’t store sensitive info in AsyncStorage → use Keychain

// ------------------------------------------
// 6) Zustand & Recoil — modern state management
// ------------------------------------------

import create from 'zustand';

// Zustand example
const useStore = create(set => ({
  count: 0,
  increment: () => set(state => ({count: state.count + 1})),
}));

export function CounterZustand() {
  const {count, increment} = useStore();
  return <Text onPress={increment}>Count: {count}</Text>;
}

// Library comparison table (interview tip)
/*
| Library | Pros                          | Cons           | Use case              |
|---------|-------------------------------|----------------|---------------------|
| Zustand | Simple, minimal boilerplate   | Less tooling   | Medium apps          |
| Recoil  | Fine-grained state updates    | Learning curve | Complex apps         |
*/

// ------------------------------------------
// 7) Choosing state management — cheat table
// ------------------------------------------
/*
| Scenario                | Recommendation                |
|-------------------------|-------------------------------|
| Small UI state          | useState / useReducer         |
| App theme / language    | Context API                   |
| Medium-large app        | Redux / Zustand               |
| Async API heavy         | Redux + Thunk / Saga          |
| Persistent offline state| AsyncStorage or SecureStore   |
| Complex derived state   | Recoil                        |
*/

// ------------------------------------------
// 8) Practical tips for interviews
// ------------------------------------------
// - Explain why you chose a solution
// - Draw diagram: component → context/store → UI
// - Performance optimizations:
//   - Memoizing selectors in Redux
//   - Splitting Contexts to avoid unnecessary re-renders
//   - Using React.memo for connected components

// ------------------------------------------
// 9) Common interview questions & answers
// ------------------------------------------
/*
Q: Why use Redux over Context?
A: Redux is better for predictable state in large apps and offers debugging tools.

Q: How do you persist global state?
A: Use AsyncStorage, Redux Persist, or SecureStore.

Q: How to avoid re-render in Context?
A: Split contexts, use useMemo or separate provider for frequently updated state.

Q: When to use useReducer?
A: Complex state with multiple actions or interdependent values.

Q: Difference between Zustand & Redux?
A: Zustand is simpler, less boilerplate; Redux more structured with middleware.
*/

// ------------------------------------------
// 10) Practice tasks
// ------------------------------------------
// 1. Create counter app with useState and increment button
// 2. Convert counter to useReducer
// 3. Create theme context and toggle dark/light
// 4. Implement Redux store for todo list
// 5. Persist auth token using AsyncStorage
// 6. Try Zustand store for counter
// 7. Optimize re-renders using React.memo

// ------------------------------------------
// 11) Key Takeaways
// ------------------------------------------
// - Local state → useState / useReducer
// - Small global state → Context API
// - Large apps → Redux / Zustand / Recoil
// - Persist data → AsyncStorage / Keychain
// - Always consider performance and predictable updates
