import * as actionTypes from './ActionTypes';

export const getBankDetails = (userid) => {
  return {
    type: actionTypes.GET_BANK_DETAILS,
    userid,
  };
};

export const saveBankDetailsNow = (payload) => {
  return {
    type: actionTypes.SAVE_BANK_DETAILS,
    payload,
  };
};
export const successSavingBankDetails = (payload) => {
  return {
    type: actionTypes.SUCCESS_SAVING_BANK_DETAILS,
    payload,
  };
};

export const failureSavingBankDetails = (payload) => {
  return {
    type: actionTypes.FAILURE_SAVING_BANK_DETAILS,
    payload,
  };
};
