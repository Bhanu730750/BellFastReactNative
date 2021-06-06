import * as actionTypes from '../actions/ActionTypes';
import updateState from '../../utils/updateState';

const initialState = {
  loading: false,
  status: null,
  error: null,
  category: [],
  // states: [],
  // cities: [],
  // mypawns: '',
  // newpawnlist: [],
  // pawnimages: [],
  // newpawndetails: [],
  // productlist: [],
  // acceptedpawnlist: [],
  // purchase_status: null,
  // orderlist: [],
  // accept_status: null,
  // pawn_cancel_status: 0,
  // success_pawn: null,
};

const reducer = (state = initialState, action) => {
  // console.log('on reducer for submit pawn', action.payload);
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
        category: payload,
      });

    default:
      return state;
  }
};

export default reducer;
