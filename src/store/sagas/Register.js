import {put, call} from 'redux-saga/effects';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import * as URL from '../../config/Url';

import * as actions from '../actions';

export function* getSponsorId(action) {
  const {sponsorid} = action;
  const url = `${URL.API_URL}get_sponsor/${sponsorid}`;
  const data = yield call(axios.get, url);
  if (data.status === 200) {
    yield put(
      actions.putSponsorId({
        sponsorid: data.data.data.username,
        status: data.status,
      }),
    );
  }
}

export function* getUserName(action) {
  const {username} = action;
  const url = `${URL.API_URL}get_username/${username}`;
  const data = yield call(axios.get, url);

  // console.log('get username on saga ', data);
  if (data.status === 200) {
    yield put(
      actions.putUserName({
        userstatus: data.data.data.value,
        status: data.status,
      }),
    );
  }
}

export function* processRegistrationSaga(action) {
  const url = `${URL.API_URL}register`;
  const body = {
    sponsor: action.payload.sponsorid,
    username: action.payload.username,
    firstname: action.payload.firstname,
    lastname: action.payload.lastname,
    telephone: action.payload.mobile,
  };

  const headers = {'Content-Type': 'application/x-www-form-urlencoded'};
  try {
    const data = yield call(axios.post, url, body);
    // console.log('registration data ', data);
    if (data.status === 200) {
      // const expirationDate = new Date(new Date().getTime() + 31556952000);
      // yield AsyncStorage.setItem(
      //   'auth-token',
      //   `Bearer ${data.data.success.token}`,
      // );
      // yield AsyncStorage.setItem('expirationDate', expirationDate.toString());

      yield put(
        actions.successRegistration({
          userdata: data.data.data,
          status: data.status,
        }),
      );
    } else if (data.status === 401) {
      yield put(actions.failureRegistration());
    } else {
      throw new Error('Something went wrong');
    }
  } catch (error) {
    console.log(error);
    yield put(actions.failureRegistration(error.message));
  }
}
