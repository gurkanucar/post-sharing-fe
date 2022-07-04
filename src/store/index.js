import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import auth from "./auth";

const reducer = combineReducers({
  auth,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
