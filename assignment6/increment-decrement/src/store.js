import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/index";

// import { createStoreHook } from "react-redux";

const store = configureStore({
    reducer: rootReducer
  });

export default store;