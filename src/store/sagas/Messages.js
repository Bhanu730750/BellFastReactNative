import {put, call} from 'redux-saga/effects';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import API from '../../utils/fetchClient';
import * as actions from '../actions';
import multipartAPI from '../../utils/multipartAPI';
import http, {httpForm, httpFormJson} from '../../utils/http';
import moment from 'moment';

export function* submitServiceRequest(action) {
  let today = new Date();
  let user_id = yield AsyncStorage.getItem('user-p-id');
  console.log('async user id', user_id);
  const body = {
    address: action.servicedata.address,
    details: action.servicedata.details,
    duration: action.servicedata.duration,
    on_date: moment(action.servicedata.on_date).format('YYYY-MM-DD'),
    on_time: action.servicedata.on_time,
    service_category: action.servicedata.service_category,
    userid: user_id,
  };
  try {
    const data = yield API.post('submit_service_request', body);
    console.log('datadatadata', data);
    if (data.status === 200) {
      yield put(actions.submitServiceRequestSuccess(data));
    } else {
      yield put(actions.submitServiceRequestSuccess(data));
    }
  } catch (error) {
    yield put(actions.submitServiceRequestSuccess(error.message));
  }
}

export function* getMyMessages(action) {
  let user_id = yield AsyncStorage.getItem('user-p-id');
  try {
    const data = yield API.get(`get_messages/${user_id}`);
    if (data.status === 200) {
      yield put(actions.putMyMessages(data.data));
    } else {
      yield put(actions.putMyMessages(data.data));
    }
  } catch (error) {
    yield put(actions.putMyMessages(error.message));
  }
}

export function* getMessageDetails(action) {
  try {
    const data = yield API.get(`get_message_details/${action.id}`);
    console.log('datadatadata', data);
    if (data.status === 200) {
      yield put(actions.putMessageDetails(data.data));
    } else {
      yield put(actions.putMessageDetails(data.data));
    }
  } catch (error) {
    yield put(actions.putMessageDetails(error.message));
  }
}
