import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/contactReducers";

const globalState = configureStore({
  reducer: {
    contacts: rootReducer,
  },
});

export default globalState;
