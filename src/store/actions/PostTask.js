import * as actionTypes from './ActionTypes';

export const getCategory = () => {
  return {
    type: actionTypes.GET_CATEGORY,
  };
};

export const putCategory = (payload) => {
  return {
    type: actionTypes.PUT_CATEGORY,
    payload,
  };
};
