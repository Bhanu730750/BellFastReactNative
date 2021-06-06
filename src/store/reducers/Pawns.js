import * as actionTypes from '../actions/ActionTypes';
import updateState from '../../utils/updateState';

const initialState = {
  loading: false,
  status: null,
  error: null,
  collaterals: [],
  collaterals_type: [],
  states: [],
  cities: [],
  mypawns: '',
  newpawnlist: [],
  pawnimages: [],
  newpawndetails: [],
  productlist: [],
  acceptedpawnlist: [],
  purchase_status: null,
  orderlist: [],
  accept_status: null,
  pawn_cancel_status: 0,
  success_pawn: null,
};

const reducer = (state = initialState, action) => {
  console.log('on reducer for submit pawn', action.payload);
  const {payload, type} = action;
  switch (type) {
    case actionTypes.GET_CATEGORY:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PUT_CATEGORY:
      return updateState(state, {
        status: payload.status,
        loading: false,
        collaterals: payload,
      });

    case actionTypes.GET_TYPES:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PUT_TYPES:
      return updateState(state, {
        status: payload.status,
        loading: false,
        collaterals_type: payload,
      });

    case actionTypes.SUBMIT_PAWN_REQUEST:
      return {
        ...state,
        loading: true,
        status: null,
      };

    case actionTypes.SUBMIT_PAWN_REQUEST_SUCCESS:
      return updateState(state, {
        status: payload.status,
        loading: false,
        success_pawn: payload.status,
      });

    case actionTypes.GET_MYPAWNS:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PUT_MYPAWNS:
      return updateState(state, {
        status: payload.status,
        loading: false,
        mypawns: payload.data.pawndetails,
        pawnimages: payload.data.pawnimages,
      });

    case actionTypes.CANCEL_MYPAWNS:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.CANCEL_CONFIRMED_MYPAWNS:
      return updateState(state, {
        status: payload.status,
        loading: false,
        pawn_cancel_status: payload.status,
      });

    case actionTypes.GET_PAWNDETAILS:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PUT_PAWNDETAILS:
      return updateState(state, {
        status: payload.status,
        loading: false,
        newpawndetails: payload.data,
        // pawnimages: payload.data.pawnimages,
      });

    case actionTypes.GET_NEW_PAWNS_LIST:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PUT_NEW_PAWNS_LIST:
      return updateState(state, {
        status: payload.status,
        loading: false,
        newpawnlist: payload.data,
      });

    case actionTypes.GET_ACCEPTED_PAWN_LIST:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PUT_ACCEPTED_PAWN_LIST:
      return updateState(state, {
        status: payload.status,
        loading: false,
        acceptedpawnlist: payload.data,
      });

    case actionTypes.GET_PRODUCTS:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PUT_PRODUCTS:
      return updateState(state, {
        status: payload.status,
        loading: false,
        productlist: payload.data,
      });

    case actionTypes.PROCEED_TO_PURCHASE:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PURCHASE_SUCCESS:
      return updateState(state, {
        status: payload.status,
        loading: false,
        purchase_status: payload.status,
      });
    case actionTypes.PURCHASE_FAILURE:
      return updateState(state, {
        status: payload.status,
        loading: false,
        purchase_status: payload.status,
      });
    case actionTypes.PROCEED_TO_ACCEPT:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.ACCEPT_SUCCESS:
      return updateState(state, {
        status: payload.status,
        loading: false,
        accept_status: payload.status,
      });
    case actionTypes.ACCEPT_FAILURE:
      return updateState(state, {
        status: payload.status,
        loading: false,
        accept_status: payload.status,
      });
    case actionTypes.GET_ORDER_LIST:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PUT_ORDER_LIST:
      return updateState(state, {
        status: payload.status,
        loading: false,
        orderlist: payload.data,
      });

    default:
      return state;
  }
};

export default reducer;
