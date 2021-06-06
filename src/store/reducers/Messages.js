import * as actionTypes from '../actions/ActionTypes';
import updateState from '../../utils/updateState';

const initialState = {
  loading: false,
  status: null,
  error: null,
  messagedetails: null,
};

const reducer = (state = initialState, action) => {
  console.log('on reducer for submit service', action.payload);
  const {payload, type} = action;
  switch (type) {
    case actionTypes.GET_MESSAGES:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PUT_MESSAGES:
      return updateState(state, {
        status: payload.status,
        loading: false,
        messageslist: payload.data,
      });

    case actionTypes.GET_MESSAGE_DETAILS:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PUT_MESSAGE_DETAILS:
      return updateState(state, {
        status: payload.status,
        loading: false,
        messagedetails: payload.data,
      });

    default:
      return state;
  }
};

export default reducer;
