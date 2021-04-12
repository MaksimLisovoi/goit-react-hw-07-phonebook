import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contacts/contacts-reducer";

// const store = createStore(rootReducer, composeWithDevTools());

console.log(process.env.NODE_ENV);

const store = configureStore({
  reducer: { contacts: contactReducer },
  devTools: process.env.NODE_ENV === "development",
});

export default store;
