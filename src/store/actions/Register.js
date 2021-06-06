import * as actionTypes from './ActionTypes';

export const getSponsorId = sponsorid => ({
  type: actionTypes.GET_SPONSORID,
  sponsorid,
});

export const putSponsorId = payload => {
  return {
    type: actionTypes.PUT_SPONSORID,
    payload,
  };
};

export const getUserName = username => ({
  type: actionTypes.GET_USERNAME,
  username,
});

export const putUserName = payload => {
  return {
    type: actionTypes.PUT_USERNAME,
    payload,
  };
};

export const processRegistration = payload => {
  return {
    type: actionTypes.INIT_REGISTRATION,
    payload,
  };
};

export const successRegistration = payload => ({
  type: actionTypes.SUCCESS_REGISTRATION,
  payload,
});

export const failureRegistration = payload => ({
  type: actionTypes.FAILURE_REGISTRATION,
  payload,
});
