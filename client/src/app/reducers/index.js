import { combineReducers } from 'redux';
import test from './test';
// import todoReducer from './todo.reducer';

const rootReducer = combineReducers({
  test,
  //   todoReducer,
});

export default rootReducer;
