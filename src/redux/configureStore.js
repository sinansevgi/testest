import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rockets/rockets';

const rootReducer = combineReducers({
  rocketsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
