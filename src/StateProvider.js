import React, { createContext, useContext, useReducer } from "react";

//prepares the data layer, which can be accessed anywhere in the component tree
export const StateContext = createContext();

//wrap our app and provide the data layer, just copy for use
export const StateProvider = ({ reducer, initialState, children }) => (
  // use StateContext.Provider to pass state to its child component
  // useReducer, a hook that adds a reducer to component
  // reducer, (state, action) as params, return a state
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//pull info from the data layer
// useStateValue, a custom hook, which allows us to access and update globle state in any components and no ned to get it by props
export const useStateValue = () => useContext(StateContext);
