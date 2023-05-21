import { combineReducers, configureStore } from "@reduxjs/toolkit";
import reducer from "../reducers/reducer";

const rootReducer = combineReducers({
  product: reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
