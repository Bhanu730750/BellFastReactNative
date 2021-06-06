import * as actionTypes from './ActionTypes';

export const getBusinesses = subCatId => {
  return {
    type: actionTypes.GET_BUSINESSES,
    subCatId,
  };
};

export const putBusinesses = payload => {
  return {
    type: actionTypes.PUT_BUSINESSES,
    payload,
  };
};

export const getStates = () => {
  return {
    type: actionTypes.GET_STATES,
  };
};

export const putStates = payload => {
  return {
    type: actionTypes.PUT_STATES,
    payload,
  };
};

export const getCities = stateid => {
  return {
    type: actionTypes.GET_CITIES,
    stateid,
  };
};

export const putCities = payload => {
  return {
    type: actionTypes.PUT_CITIES,
    payload,
  };
};

export const getBusinessesDetails = businessId => {
  return {
    type: actionTypes.GET_BUSINESSES_DETAILS,
    businessId,
  };
};

export const putBusinessesDetails = payload => {
  return {
    type: actionTypes.PUT_BUSINESSES_DETAILS,
    payload,
  };
};

export const saveBusinessRequest = payload => {
  return {
    type: actionTypes.SAVE_BUSINESS_REQUEST,
    payload,
  };
};

export const successSaveBusiness = payload => ({
  type: actionTypes.SUCCESS_SAVE_BUSINESS,
  payload,
});

export const failureSaveBusiness = payload => ({
  type: actionTypes.FAILURE_SAVE_BUSINESS,
  payload,
});
