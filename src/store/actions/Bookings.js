import * as actionTypes from './ActionTypes';

export const getUpcomingBookings = () => {
  return {
    type: actionTypes.GET_UPCOMING_BOOKINGS,
  };
};

export const putUpcomingBookings = (payload) => {
  return {
    type: actionTypes.PUT_UPCOMING_BOOKINGS,
    payload,
  };
};

export const getMyBookings = () => {
  return {
    type: actionTypes.GET_MY_BOOKINGS,
  };
};

export const putMyBookings = (payload) => {
  return {
    type: actionTypes.PUT_MY_BOOKINGS,
    payload,
  };
};
