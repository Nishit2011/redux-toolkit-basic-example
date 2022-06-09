import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../redux-toolkit-1/counter"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})