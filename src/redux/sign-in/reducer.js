import { SIGN_IN_SUCCESS, SIGN_IN_ERROR, SIGN_IN_REQUEST } from './actions';

const initialState = {
  isAuthentificated: !!localStorage.getItem('token'),
  error: undefined,
  avatar: undefined,
  token: localStorage.getItem('token'),
  username: undefined,
  isLoading: false,
};

export const getToken = state => state.signInReducer.token;

const signInReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case SIGN_IN_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case SIGN_IN_SUCCESS: {
      const {
        payload: { avatar, token, username },
      } = action;
      localStorage.setItem('token', token);
      return {
        ...state,
        isAuthentificated: true,
        avatar,
        token,
        username,
        isLoading: false,
      };
    }
    case SIGN_IN_ERROR: {
      const { payload } = action;
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      };
    }
    default: {
      return state;
    }
  }
};

export default signInReducer;
