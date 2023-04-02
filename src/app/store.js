import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../features/api/apiSlice";
import authReducer from "../features/auth/authSlice";
import conversationReducer from "../features/conversation/conversationSlice";
import messagesReducer from "../features/messages/messagesSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    conversation: conversationReducer,
    messages: messagesReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
