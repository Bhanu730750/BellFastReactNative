import * as actionTypes from './ActionTypes';

export const getWalletBalance = () => {
  return {
    type: actionTypes.GET_WALLET_BALANCE,
  };
};

export const putWalletBalance = (payload) => {
  console.log('hello this is wallet reducer', payload);
  return {
    type: actionTypes.PUT_WALLET_BALANCE,
    payload,
  };
};
export const addAmountToWallet = (amount, txn) => {
  return {
    type: actionTypes.ADD_AMOUNT_TO_WALLET,
    amount,
    txn,
  };
};

export const getAllTransactions = () => {
  return {
    type: actionTypes.GET_ALL_TRANSACTIONS,
  };
};

export const putAllTransactions = (payload) => {
  return {
    type: actionTypes.PUT_ALL_TRANSACTIONS,
    payload,
  };
};
