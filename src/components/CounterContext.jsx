import React, { createContext, useContext, useReducer } from "react";

// 1. Create Context
const CounterContext = createContext();

// 2. Reducer function for updating state
const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "SET":
      return action.payload; // update with a specific value
    default:
      return state;
  }
};

// 3. Provider Component
export const CounterProvider = ({ children }) => {
  const [count, dispatch] = useReducer(counterReducer, 0);

  // Helper functions for updating state
  const increment = () => dispatch({ type: "INCREMENT" });
  const decrement = () => dispatch({ type: "DECREMENT" });
  const setCount = (value) => dispatch({ type: "SET", payload: value });

  return (
    <CounterContext.Provider value={{ count, increment, decrement, setCount }}>
      {children}
    </CounterContext.Provider>
  );
};

// 4. Custom hook for using the context
export const useCounter = () => useContext(CounterContext);
