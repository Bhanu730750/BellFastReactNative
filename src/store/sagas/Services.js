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

export function* getMyLatestTask(action) {
  let userid = yield AsyncStorage.getItem('user-p-id');
  try {
    const data = yield API.get(`my_latesttask/${userid}`);
    console.log('my/latest task', userid, data);
    if (data.status === 200) {
      yield put(actions.putMyLatestTask(data.data));
    } else {
      yield put(actions.putMyLatestTask(data.data));
    }
  } catch (error) {
    yield put(actions.putMyLatestTask(error.message));
  }
}

export function* getOrderList(action) {
  let user_id = yield AsyncStorage.getItem('user-p-id');
  try {
    const data = yield API.get(`get_my_order_history/${user_id}`);
    if (data.status === 200) {
      yield put(actions.putOrderList(data.data));
    } else {
      yield put(actions.putOrderList(data.data));
    }
  } catch (error) {
    yield put(actions.putOrderList(error.message));
  }
}

export function* getProviderDashboardData(action) {
  let userid = yield AsyncStorage.getItem('user-p-id');
  try {
    const data = yield API.get(`provider_dashboard_data/${userid}`);
    console.log('my/latest provider_dashboard_data', userid, data);
    if (data.status === 200) {
      yield put(actions.putProviderDashboardData(data.data));
    } else {
      yield put(actions.putProviderDashboardData(data.data));
    }
  } catch (error) {
    yield put(actions.putProviderDashboardData(error.message));
  }
}

export function* getTaskDetails(action) {
  // console.log('get task details', action);
  let userid = yield AsyncStorage.getItem('user-p-id');
  try {
    const data = yield API.get(`get_task_details/${action.id}`);

    if (data.status === 200) {
      yield put(actions.putTaskDetails(data.data));
    } else {
      yield put(actions.putTaskDetails(data.data));
    }
  } catch (error) {
    yield put(actions.putTaskDetails(error.message));
  }
}

export function* acceptRequestProcess(action) {
  // console.log('get task details', action);
  let userid = yield AsyncStorage.getItem('user-p-id');
  try {
    const data = yield API.get(`accept_request/${action.id}/${userid}`);
    // console.log('get task data.status ', data.status);
    if (data.status === 200) {
      yield put(actions.acceptRequestProcessSuccess(data.status));
    } else {
      yield put(actions.acceptRequestProcessSuccess(data.status));
    }
  } catch (error) {
    yield put(actions.acceptRequestProcessSuccess(error.message));
  }
}
