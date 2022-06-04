import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/post/postSlice";
import uiReducer from "../features/UI/uiSlice";

export const store = configureStore({
  reducer: {
    posts: postReducer,
    ui: uiReducer,
  },
});
