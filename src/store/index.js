import { combineReducers } from "redux"
import { configureStore } from "@reduxjs/toolkit"

import counterReducer from './counter'
import uiReducer from './ui'

const rootReducer = combineReducers({
  counter: counterReducer,
  ui: uiReducer
})

const store = configureStore({
  reducer: rootReducer
})
export default store

export {
  getCountAPI,
  increment,
  incrementAPI,
  decrement,
  incrementBy,
  decrementBy
} from './counter'
