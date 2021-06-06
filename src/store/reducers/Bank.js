import * as actionTypes from '../actions/ActionTypes';
import updateState from '../../utils/updateState';

const initialState = {
  loading: false,
  status: '',
  error: null,
};

const reducer = (state = initialState, action) => {
  // console.log('on reducer ', action.payload);
  const {payload, type} = action;
  switch (type) {
    case actionTypes.SAVE_BANK_DETAILS:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.SUCCESS_SAVING_BANK_DETAILS:
      return updateState(state, {
        status: payload.status,
        loading: false,
      });

    // case actionTypes.GET_TYPES:
    //   return {
    //     ...state,
    //     loading: true,
    //     status: null,
    //   };
    // case actionTypes.PUT_TYPES:
    //   return updateState(state, {
    //     status: payload.status,
    //     loading: false,
    //     collaterals_type: payload,
    //   });

    // case actionTypes.SUBMIT_PAWN_REQUEST:
    //   return {
    //     ...state,
    //     loading: true,
    //     status: null,
    //   };

    // case actionTypes.SUBMIT_PAWN_REQUEST_SUCCESS:
    //   return updateState(state, {
    //     status: payload.status,
    //     loading: false,
    //   });

    // case actionTypes.GET_MYPAWNS:
    //   return {
    //     ...state,
    //     loading: true,
    //     status: null,
    //   };
    // case actionTypes.PUT_MYPAWNS:
    //   return updateState(state, {
    //     status: payload.status,
    //     loading: false,
    //     mypawns: payload.data.pawndetails,
    //     pawnimages: payload.data.pawnimages,
    //   });

    // case actionTypes.GET_PAWNDETAILS:
    //   return {
    //     ...state,
    //     loading: true,
    //     status: null,
    //   };
    // case actionTypes.PUT_PAWNDETAILS:
    //   return updateState(state, {
    //     status: payload.status,
    //     loading: false,
    //     newpawndetails: payload.data,
    //     // pawnimages: payload.data.pawnimages,
    //   });

    // case actionTypes.GET_NEW_PAWNS_LIST:
    //   return {
    //     ...state,
    //     loading: true,
    //     status: null,
    //   };
    // case actionTypes.PUT_NEW_PAWNS_LIST:
    //   return updateState(state, {
    //     status: payload.status,
    //     loading: false,
    //     newpawnlist: payload.data,
    //   });

    // case actionTypes.GET_PRODUCTS:
    //   return {
    //     ...state,
    //     loading: true,
    //     status: null,
    //   };
    // case actionTypes.PUT_PRODUCTS:
    //   return updateState(state, {
    //     status: payload.status,
    //     loading: false,
    //     productlist: payload.data,
    //   });

    default:
      return state;
  }
};

export default reducer;
