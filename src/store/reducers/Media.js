import * as actionTypes from '../actions/ActionTypes';
import updateState from '../../utils/updateState';

const initialState = {
  filesList: [],
};

export default (state = initialState, action) => {
  const {payload, type} = action;

  switch (type) {
    case actionTypes.UPLOAD_FILES:
      return updateState(state, {filesList: []});

    case actionTypes.UPLOAD_FILES_SUCCESS:
      return updateState(state, {filesList: payload.data});

    case actionTypes.CLEAR_SOCIAL_CHECKS:
      return updateState(state, {filesList: []});

    default:
      return state;
  }
};
