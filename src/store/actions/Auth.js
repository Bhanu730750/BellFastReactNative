import * as actionTypes from './ActionTypes';

export const initLogin = (email, password) => ({
  type: actionTypes.INIT_LOGIN,
  email,
  password,
});

export const initAuth = (payload) => ({
  type: actionTypes.INIT_AUTH,
  payload,
});

export const loginSuccess = (payload) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload,
  };
};

export const loginFailure = (payload) => ({
  type: actionTypes.LOGIN_FAILURE,
  payload,
});

export const initAuthStatus = () => ({
  type: actionTypes.INIT_AUTH_STATUS,
});

export const authStatusSuccess = (payload) => {
  return {
    type: actionTypes.AUTH_STATUS_SUCCESS,
    payload,
  };
};

export const authStatusFailure = (payload) => ({
  type: actionTypes.AUTH_STATUS_FAILURE,
  payload,
});

export const initLogout = () => ({
  type: actionTypes.INIT_LOGOUT,
});

export const logoutSuccess = () => ({
  type: actionTypes.LOGOUT_SUCCESS,
});

export const initSignUP = (userid, password, typePicker, categoryPicker) => ({
  type: actionTypes.INIT_SIGNUP,
  userid,
  password,
  typePicker,
  categoryPicker,
});

export const signUpSuccess = (payload) => {
  return {
    type: actionTypes.SIGNUP_SUCCESS,
    payload,
  };
};

export const signUpFailure = (payload) => ({
  type: actionTypes.SIGNUP_FAILURE,
  payload,
});

export const initChangePassword = (email) => ({
  type: actionTypes.INIT_CHANGE_PASSWORD,
  email,
});

export const successChangePassword = (payload) => {
  return {
    type: actionTypes.SUCCESS_CHANGE_PASSWORD,
    payload,
  };
};
