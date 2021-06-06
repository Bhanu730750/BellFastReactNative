import * as actionTypes from '../actions/ActionTypes';
import updateState from '../../utils/updateState';

const initialState = {
  loading: false,
  status: null,
  token: '',
  error: null,
  user: null,
};

const reducer = (state = initialState, action) => {
  // console.log('hello response payload', action.payload);
  const {payload, type} = action;
  switch (type) {
    case actionTypes.INIT_LOGIN:
      return {
        ...state,
        loading: true,
        success: false,
        message: null,
        status: null,
        user: null,
        token: '',
      };
    case actionTypes.LOGIN_SUCCESS:
      return updateState(state, {
        status: payload.status,
        loading: false,
        token: payload.data.success.token,
      });

    case actionTypes.LOGIN_FAILURE:
      return updateState(state, {
        loading: false,
        status: payload,
        user: null,
        token: '',
      });

    // case 'AUTH_STATUS_SUCCESS':
    //   return {
    //     ...state,
    //     loading: false,
    //     status: action.payload.status,
    //     user: action.payload,
    //   };

    // case 'AUTH_STATUS_FAILURE':
    //   return {
    //     ...state,
    //     loading: false,
    //     status: action.payload,
    //   };

    // case actionTypes.INIT_LOGOUT:
    //   return updateState(state, {
    //     loading: false,
    //     status: payload,
    //     user: null,
    //     token: null,
    //   });
    case actionTypes.LOGOUT_SUCCESS:
      return updateState(state, {
        loading: false,
        status: payload,
        user: null,
        token: null,
      });
    case actionTypes.SIGNUP_SUCCESS:
      return updateState(state, {
        loading: false,
        status: payload.status,
        user: null,
        token: payload.data.data.token,
      });
    case actionTypes.SIGNUP_FAILURE:
      return updateState(state, {
        loading: false,
        status: payload.status,
        user: null,
        token: null,
        error: payload.data.data,
      });
    case actionTypes.INIT_CHANGE_PASSWORD:
      return {
        ...state,
        loading: true,
        message: null,
        status: null,
      };
    case actionTypes.SUCCESS_CHANGE_PASSWORD:
      return {
        ...state,
        loading: false,
        message: payload.data.message,
        status: payload.status,
      };

    default:
      return state;
  }
};

export default reducer;
