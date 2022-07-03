import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./_slices/auth";
import messageReducer from "./_slices/message";

const reducer = {
  auth: authReducer,
  message: messageReducer
}
export const store = configureStore({
  reducer: reducer,
  devTools: true,
})