import * as actionTypes from './ActionTypes';

export const getMessagesList = () => {
  return {
    type: actionTypes.GET_MESSAGES,
  };
};

export const putMyMessages = (payload) => {
  return {
    type: actionTypes.PUT_MESSAGES,
    payload,
  };
};

export const getMessageDetails = (id) => {
  return {
    type: actionTypes.GET_MESSAGE_DETAILS,
    id,
  };
};

export const putMessageDetails = (payload) => {
  return {
    type: actionTypes.PUT_MESSAGE_DETAILS,
    payload,
  };
};
