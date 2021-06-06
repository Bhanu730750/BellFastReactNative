import * as actionTypes from '../actions/ActionTypes';
import updateState from '../../utils/updateState';

const initialState = {
  loading: false,
  status: null,
  error: null,
  user: [],
};

const reducer = (state = initialState, action) => {
  // console.log('hello response payload on reducer', action.payload);
  const {payload, type} = action;
  switch (type) {
    case actionTypes.GET_USER_DETAIL:
      return {
        ...state,
        loading: true,
        status: null,
        user: null,
      };
    case actionTypes.PUT_USER_DETAIL:
      return updateState(state, {
        status: payload.status,
        loading: false,
        user: payload.data.data,
      });

    case 'AUTH_STATUS_SUCCESS':
      return {
        ...state,
        loading: false,
        status: action.payload.status,
        user: action.payload,
      };

    case 'AUTH_STATUS_FAILURE':
      return {
        ...state,
        loading: false,
        status: action.payload,
      };

    case actionTypes.INIT_LOGOUT:
      return updateState(state, {
        loading: false,
        status: payload,
        user: null,
        token: null,
      });

    default:
      return state;
  }
};

export default reducer;
