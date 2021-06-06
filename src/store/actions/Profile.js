import * as actionTypes from './ActionTypes';

export const getMyProfileDetails = () => ({
  type: actionTypes.GET_USER_DETAIL_PROFILE,
});

export const putMyProfileDetails = (payload) => {
  return {
    type: actionTypes.PUT_USER_DETAIL_PROFILE,
    payload,
  };
};

export const saveProfileDetailsNow = (payload) => {
  return {
    type: actionTypes.UPDATE_PROFILE_DETAILS,
    payload,
  };
};

export const successUpdateProfile = (payload) => {
  return {
    type: actionTypes.SUCCESS_UPDATE_PROFILE,
    payload,
  };
};

export const failureUpdateProfile = (payload) => {
  return {
    type: actionTypes.FAILURE_UPDATE_PROFILE,
    payload,
  };
};

export const uploadKycFile = (payload) => {
  return {
    type: actionTypes.UPLOAD_KYC,
    payload,
  };
};
export const successUploadingKyc = (payload) => {
  return {
    type: actionTypes.SUCCESS_UPLOADING_KYC,
    payload,
  };
};
export const setDuty = () => {
  return {
    type: actionTypes.SET_DUTY,
  };
};
export const confirmDuty = (payload) => {
  return {
    type: actionTypes.CONFIRM_DUTY,
    payload,
  };
};
