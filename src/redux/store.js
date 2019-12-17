import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import signInReducer from './sign-in/reducer';

const rootReducer = combineReducers({
  signInReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
