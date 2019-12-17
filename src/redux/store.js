import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import signInReducer from './sign-in/reducer';

export const store = createStore(signInReducer, applyMiddleware(thunk));
