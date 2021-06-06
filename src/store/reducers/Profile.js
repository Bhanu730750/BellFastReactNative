import * as actionTypes from '../actions/ActionTypes';
import updateState from '../../utils/updateState';

const initialState = {
  loading: false,
  status: '',
  error: null,
  profile: null,
};

const reducer = (state = initialState, action) => {
  // console.log('on reducer ', action.payload);
  const {payload, type} = action;
  switch (type) {
    case actionTypes.GET_USER_DETAIL_PROFILE:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PUT_USER_DETAIL_PROFILE:
      return updateState(state, {
        status: payload.status,
        loading: false,
        profile: payload.data.data,
      });
    case actionTypes.UPDATE_PROFILE_DETAILS:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.SUCCESS_UPDATE_PROFILE:
      return updateState(state, {
        status: payload.status,
        loading: false,
      });

    case actionTypes.UPLOAD_KYC:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.SUCCESS_UPLOADING_KYC:
      return updateState(state, {
        status: payload.status,
        loading: false,
      });
    case actionTypes.SET_DUTY:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.CONFIRM_DUTY:
      return updateState(state, {
        status: payload.status,
        loading: false,
      });
    default:
      return state;
  }
};

export default reducer;
