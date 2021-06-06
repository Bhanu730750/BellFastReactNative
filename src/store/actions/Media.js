import * as actionTypes from './ActionTypes';

export const uploadFiles = (files = []) => ({
  type: actionTypes.UPLOAD_FILES,
  files,
});

export const uploadFilesSuccess = payload => ({
  type: actionTypes.UPLOAD_FILES_SUCCESS,
  payload,
});

export const uploadFilesFailure = payload => ({
  type: actionTypes.UPLOAD_FILES_FAILURE,
  payload,
});
