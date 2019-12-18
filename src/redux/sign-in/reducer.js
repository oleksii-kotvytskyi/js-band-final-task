import { SIGN_IN_SUCCESS, SIGN_IN_ERROR } from './actions';

const initialState = {
  isAuthentificated: !!localStorage.getItem('token'),
  error: undefined,
  avatar: undefined,
  token: localStorage.getItem('token'),
  username: undefined,
};

export const getToken = state => state.signInReducer.token;

const signInReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
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
      };
    }
    case SIGN_IN_ERROR: {
      const { payload } = action;
      return {
        ...state,
        error: payload.error,
      };
    }
    default: {
      return state;
    }
  }
};

export default signInReducer;
