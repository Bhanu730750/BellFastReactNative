import * as actionTypes from './ActionTypes';

export const submitServiceRequest = (servicedata) => {
  return {
    type: actionTypes.SUBMIT_SERVICE_REQUEST,
    servicedata,
  };
};
export const submitServiceRequestSuccess = (payload) => {
  return {
    type: actionTypes.SUBMIT_SERVICE_REQUEST_SUCCESS,
    payload,
  };
};

export const getMyLatestTask = () => {
  return {
    type: actionTypes.GET_MY_LATEST_TASK,
  };
};

export const putMyLatestTask = (payload) => {
  return {
    type: actionTypes.PUT_MY_LATEST_TASK,
    payload,
  };
};

export const getOrderList = () => {
  return {
    type: actionTypes.GET_ORDERLIST,
  };
};

export const putOrderList = (payload) => {
  return {
    type: actionTypes.PUT_ORDERLIST,
    payload,
  };
};

export const getProviderDashboardData = () => {
  return {
    type: actionTypes.GET_PROVIDER_DASHBOARD_DATA,
  };
};

export const putProviderDashboardData = (payload) => {
  return {
    type: actionTypes.PUT_PROVIDER_DASHBOARD_DATA,
    payload,
  };
};

export const getTaskDetails = (id) => {
  return {
    type: actionTypes.GET_TASK_DETAILS,
    id,
  };
};

export const putTaskDetails = (payload) => {
  return {
    type: actionTypes.PUT_TASK_DETAILS,
    payload,
  };
};

export const acceptRequestProcess = (id) => {
  return {
    type: actionTypes.ACCEPT_REQUEST,
    id,
  };
};

export const acceptRequestProcessSuccess = (payload) => {
  return {
    type: actionTypes.ACCEPT_REQUEST_SUCCESS,
    payload,
  };
};
