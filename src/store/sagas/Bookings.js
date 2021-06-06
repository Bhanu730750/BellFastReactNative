import {put, call} from 'redux-saga/effects';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import * as URL from '../../config/Url';

import API from '../../utils/fetchClient';

import * as actions from '../actions';

export function* getUpcomingBookings(action) {
  try {
    // let userid = yield AsyncStorage.getItem('user-p-id');
    const url = `${URL.API_URL}get_upcoming_bookings`;

    const data = yield API.get(url);
    console.log('hellllooooooo', data);
    if (data.status === 200) {
      yield put(actions.putUpcomingBookings(data.data.data));
    }
  } catch (error) {
    yield put(actions.putUpcomingBookings(error.message));
  }
}

export function* getMyBookings(action) {
  // console.log('get task details', action);
  let userid = yield AsyncStorage.getItem('user-p-id');
  try {
    const data = yield API.get(`get_providers_bookings/${userid}`);
    // console.log('get task data.status ', data.status);
    if (data.status === 200) {
      yield put(actions.putMyBookings(data.data));
    } else {
      yield put(actions.putMyBookings(data.data));
    }
  } catch (error) {
    yield put(actions.putMyBookings(error.message));
  }
}
