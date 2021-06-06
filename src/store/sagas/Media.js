import {put} from 'redux-saga/effects';
// import API from '../../utils/fetchClient';
// import multipartAPI from '../../utils/multipartAPI';
import * as actions from '../actions';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

// export function* uploadFiles(action) {
//   console.log(action);
//     try {
//       yield put(actions.changeLoaderStatus(true));
//       let param = new FormData();
//       yield action.files.map(async (file, key) => {
//         param.append('file', file);
//       });
//       let response = yield multipartAPI.post(`/common/attachment`, param);
//       console.log('response in uploadFiles api=====', response);
//       if (response.status !== 200) throw new Error('Error retrieving details');
//       yield put(actions.changeLoaderStatus(false));
//       yield put(actions.uploadFilesSuccess(response.data));
//     } catch (error) {
//       console.log('error', error);
//       yield put(actions.changeLoaderStatus(false));
//       yield put(actions.uploadFilesFailure(error.message));
//     }
// }
