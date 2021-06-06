import * as actionTypes from '../actions/ActionTypes';
import updateState from '../../utils/updateState';

const initialState = {
  loading: false,
  status: '',
  error: null,
  wallet: null,
  txnlist: [],
};

const reducer = (state = initialState, action) => {
  // console.log('on reducer wallet', action.payload);
  const {payload, type} = action;
  switch (type) {
    case actionTypes.GET_WALLET_BALANCE:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PUT_WALLET_BALANCE:
      return updateState(state, {
        status: payload.status,
        loading: false,
        wallet: payload,
      });
    case actionTypes.ADD_AMOUNT_TO_WALLET:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.GET_ALL_TRANSACTIONS:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PUT_ALL_TRANSACTIONS:
      return updateState(state, {
        status: payload.status,
        loading: false,
        txnlist: payload,
      });
    default:
      return state;
  }
};

export default reducer;
