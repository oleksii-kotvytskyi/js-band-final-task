import { SIGN_IN_SUCCESS, SIGN_IN_ERROR, SIGN_IN_REQUEST } from './actions';

const userInfo = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : undefined;

const initialState = {
  isAuthentificated: !!localStorage.getItem('userInfo'),
  error: undefined,
  avatar: userInfo ? userInfo.avatar : undefined,
  token: userInfo ? userInfo.token : undefined,
  username: userInfo ? userInfo.username : undefined,
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
      const signInUserInfo = {
        token,
        avatar,
        username,
      };
      localStorage.setItem('userInfo', JSON.stringify(signInUserInfo));
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
