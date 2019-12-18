import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import signInReducer from './sign-in/reducer';
import booksReducer from './books/reducer';
import bookReducer from './book/reducer';

const rootReducer = combineReducers({
  signInReducer,
  booksReducer,
  bookReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
