import * as actionTypes from '../actions/ActionTypes';
import updateState from '../../utils/updateState';

const initialState = {
  loading: false,
  status: '',
  error: null,
  upcomingbookings: [],
  mybookings: [],
};

const reducer = (state = initialState, action) => {
  // console.log('on reducer wallet', action.payload);
  const {payload, type} = action;
  switch (type) {
    case actionTypes.GET_UPCOMING_BOOKINGS:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PUT_UPCOMING_BOOKINGS:
      return updateState(state, {
        status: payload.status,
        loading: false,
        upcomingbookings: payload,
      });

    case actionTypes.GET_MY_BOOKINGS:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PUT_MY_BOOKINGS:
      return updateState(state, {
        status: payload.status,
        loading: false,
        mybookings: payload.data,
      });
    default:
      return state;
  }
};

export default reducer;
