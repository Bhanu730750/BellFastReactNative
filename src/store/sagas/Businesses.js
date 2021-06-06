import {put, call} from 'redux-saga/effects';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import * as URL from '../../config/Url';

import * as actions from '../actions';

export function* getBusinesses(action) {
  const {subCatId} = action;

  const url = `${URL.API_URL}get_business/${subCatId}`;

  const data = yield call(axios.get, url);
  if (data.status === 200) {
    yield put(
      actions.putBusinesses({businesses: data.data.data, status: data.status}),
    );
  }
}

export function* getBusinessesDetails(action) {
  const {businessId} = action;
  const url = `${URL.API_URL}get_business_details/${businessId}`;
  const data = yield call(axios.get, url);

  // console.log('i am business data', data);
  if (data.status === 200) {
    yield put(
      actions.putBusinessesDetails({
        business_details: data.data.data,
        status: data.status,
      }),
    );
  }
}

export function* getStates() {
  console.log('called saga for states');
  const url = `${URL.API_URL}get_states`;

  const data = yield call(axios.get, url);
  console.log('saga states', data);
  if (data.status === 200) {
    yield put(actions.putStates({states: data.data.data, status: data.status}));
  }
}

export function* getCities(action) {
  const {stateid} = action;
  const url = `${URL.API_URL}get_cities/${stateid}`;

  const data = yield call(axios.get, url);
  if (data.status === 200) {
    yield put(actions.putCities({cities: data.data.data, status: data.status}));
  }
}

export function* saveBusinessData(action) {
  console.log('save business data', action.payload);
  const url = `${URL.API_URL}add_business`;

  // const token = yield call([AsyncStorage, 'getItem'], 'auth-token');

  const body = {
    address: action.payload.address,
    businessname: action.payload.businessname,
    category: action.payload.category,
    subcategory: action.payload.subcategory,
    city: action.payload.city,
    contact: action.payload.contact,
    email: action.payload.email,
    keywords: action.payload.keywords,
    latitude: action.payload.latitude,
    longitude: action.payload.longitude,
    pincode: action.payload.pincode,
    state: action.payload.state,
    businesstype: 1,
    userid: 123456,
    added_by: 2,
  };

  const headers = {'Content-Type': 'application/json'};
  try {
    const data = yield call(axios.post, url, body);

    if (data.status === 200) {
      yield put(
        actions.successSaveBusiness({
          status: data.status,
        }),
      );
    } else if (data.status === 401) {
      yield put(actions.failureSaveBusiness());
    } else {
      throw new Error('Something went wrong');
    }
  } catch (error) {
    yield put(actions.failureSaveBusiness(error.message));
  }
}
