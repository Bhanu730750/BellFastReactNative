import {put, call} from 'redux-saga/effects';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import API from '../../utils/fetchClient';
import * as actions from '../actions';

export function* getUserDetails(action) {
  // console.log('reached');
  try {
    const data = yield API.post('details');
    console.log('dashboard details======rocky=======', data);
    if (data.status === 200) {
      yield AsyncStorage.setItem('user-p-id', `${data.data.data.id}`);
      yield AsyncStorage.setItem('userid', `${data.data.data.user_id}`);
      yield put(actions.putUserDetail(data));
    } else {
      yield put(actions.putUserDetail(data));
    }
  } catch (error) {
    yield put(actions.putUserDetail(error.message));
  }
}

// export function* getSubCategory(action) {
//   const {catId} = action;

//   const url = `${URL.API_URL}business_sub_category/${catId}`;

//   const data = yield call(axios.get, url);
//   // console.log(data);
//   if (data.status === 200) {
//     yield put(
//       actions.putSubCategories({subcat: data.data, status: data.status}),
//     );
//   }
// }
