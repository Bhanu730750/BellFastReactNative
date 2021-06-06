import * as actionTypes from './ActionTypes';

export const getCategory = () => {
  return {
    type: actionTypes.GET_CATEGORY,
  };
};

export const putCollaterals = (payload) => {
  return {
    type: actionTypes.PUT_COLLATERALS,
    payload,
  };
};

export const getTypes = (collId) => {
  return {
    type: actionTypes.GET_TYPES,
    collId,
  };
};

export const putTypes = (payload) => {
  return {
    type: actionTypes.PUT_TYPES,
    payload,
  };
};

export const submitPawnRequest = (payload) => {
  return {
    type: actionTypes.SUBMIT_PAWN_REQUEST,
    payload,
  };
};
export const submitPawnRequestSuccess = (payload) => {
  return {
    type: actionTypes.SUBMIT_PAWN_REQUEST_SUCCESS,
    payload,
  };
};

export const getMyPawns = (userid) => {
  return {
    type: actionTypes.GET_MYPAWNS,
    userid,
  };
};

export const putMyPawns = (payload) => {
  return {
    type: actionTypes.PUT_MYPAWNS,
    payload,
  };
};

export const cancelMyPawns = (pawnid) => {
  return {
    type: actionTypes.CANCEL_MYPAWNS,
    pawnid,
  };
};

export const cancelMyPawnsConfirm = (payload) => {
  return {
    type: actionTypes.CANCEL_CONFIRMED_MYPAWNS,
    payload,
  };
};

export const getPawnsDetails = (pawnid) => {
  return {
    type: actionTypes.GET_PAWNDETAILS,
    pawnid,
  };
};

export const putPawnsDetails = (payload) => {
  return {
    type: actionTypes.PUT_PAWNDETAILS,
    payload,
  };
};

export const getNewPawnsList = (listtype) => {
  return {
    type: actionTypes.GET_NEW_PAWNS_LIST,
    listtype,
  };
};

export const putNewPawnsList = (payload) => {
  return {
    type: actionTypes.PUT_NEW_PAWNS_LIST,
    payload,
  };
};

export const getAcceptedPawnsList = (listtype) => {
  return {
    type: actionTypes.GET_ACCEPTED_PAWN_LIST,
    listtype,
  };
};

export const putAcceptedPawnsList = (payload) => {
  return {
    type: actionTypes.PUT_ACCEPTED_PAWN_LIST,
    payload,
  };
};

export const getProducts = () => {
  return {
    type: actionTypes.GET_PRODUCTS,
  };
};

export const putProducts = (payload) => {
  return {
    type: actionTypes.PUT_PRODUCTS,
    payload,
  };
};

export const proceedToPurchase = (pid) => {
  return {
    type: actionTypes.PROCEED_TO_PURCHASE,
    pid,
  };
};

export const purchaseSuccess = (payload) => {
  return {
    type: actionTypes.PURCHASE_SUCCESS,
    payload,
  };
};
export const purchaseFailure = (payload) => {
  return {
    type: actionTypes.PURCHASE_FAILURE,
    payload,
  };
};

export const proceedToAccept = (pid) => {
  return {
    type: actionTypes.PROCEED_TO_ACCEPT,
    pid,
  };
};

export const acceptSuccess = (payload) => {
  return {
    type: actionTypes.ACCEPT_SUCCESS,
    payload,
  };
};
export const acceptFailure = (payload) => {
  return {
    type: actionTypes.ACCEPT_FAILURE,
    payload,
  };
};

export const getMyOrderList = () => {
  return {
    type: actionTypes.GET_ORDER_LIST,
  };
};

export const putMyOrderList = (payload) => {
  return {
    type: actionTypes.PUT_ORDER_LIST,
    payload,
  };
};
