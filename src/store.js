import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./_slices/auth";
import messageReducer from "./_slices/message";
import userReducer from './_slices/user';

const reducer = {
  auth: authReducer,
  message: messageReducer,
  user: userReducer,
  
}
export const store = configureStore({
  reducer: reducer,
  devTools: true,
})