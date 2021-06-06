import {put, call} from 'redux-saga/effects';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import API from '../../utils/fetchClient';
import * as actions from '../actions';
import multipartAPI from '../../utils/multipartAPI';
import http, {httpForm, httpFormJson} from '../../utils/http';

export function* getCategory(action) {
  try {
    const data = yield API.get('category');
    console.log('post task category', data.data.data);
    if (data.status === 200) {
      yield put(actions.putCategory(data.data.data));
    } else {
      yield put(actions.putCategory(data.data.data));
    }
  } catch (error) {
    yield put(actions.putCategory(error.message));
  }
}
