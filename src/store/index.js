import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import auth from "./auth";
import deliveredNotifs from "./deliveredNotifs";

const reducer = combineReducers({
  auth,
  deliveredNotifs,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
