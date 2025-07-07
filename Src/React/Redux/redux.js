// Redux Interview Guide: From 0 to Hero

// ----------------------------
// PART 1: What is Redux?
// ----------------------------
// Redux is a state management library for JavaScript apps.
// It provides a central store to manage global state in a predictable way.
// Data needs to be shared between many components without using props.

// ----------------------------
// PART 2: Core Concepts in Redux
// ----------------------------
// Store:     Central container that holds the state
// Action:    Describes what happened (e.g., { type: 'INCREMENT' })
// Reducer:   Pure function that updates state based on action
// Dispatch:  Sends action to reducer
// Selector:  Reads data from store

// ----------------------------
// PART 3: Redux Data Flow
// ----------------------------
// UI -> dispatch(action) -> reducer -> store -> UI updates

// ----------------------------
// PART 4: Redux Code Example with Redux Toolkit
// ----------------------------

// Step 1: Install
// npm install @reduxjs/toolkit react-redux

// Step 2: Create a Counter Slice
// features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value -= 1 },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;

// Step 3: Configure the Store
// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

export default store;

// Step 4: Provide Store to App
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './app/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// Step 5: Using Redux in a Component
// Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './features/counter/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </div>
  );
};

export default Counter;

// ----------------------------
// PART 5: Redux Interview Questions
// ----------------------------
// Q1: What is Redux?
// A: A state management tool for global state sharing.

// Q2: What is Redux Toolkit?
// A: A simplified, modern approach to Redux development.

// Q3: Difference between Action, Reducer, Store?
// Action: Tells what happened
// Reducer: Handles the change
// Store: Holds the app state

// Q4: Redux vs Context API?
// Redux is more scalable and has better debugging capabilities.

// Q5: What is a Slice?
// A slice contains reducers + actions for one feature.

// Q6: Is Redux synchronous?
// Yes, but for async use middleware like Redux Thunk.

// ----------------------------
// PART 6: Async Redux Example
// ----------------------------

// features/user/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  return res.data;
});

const userSlice = createSlice({
  name: 'users',
  initialState: { users: [], loading: false },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => { state.loading = true })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      });
  }
});

export default userSlice.reducer;

// ----------------------------
// PART 7: Best Practices
// ----------------------------
// ✅ Use Redux Toolkit always
// ✅ Keep state normalized and minimal
// ✅ Avoid unnecessary dispatches
// ✅ Use selectors to read cleanly
// ✅ Separate feature logic using folders
// ✅ Use middleware for API and async logic
