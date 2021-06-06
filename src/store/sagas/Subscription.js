import {put, call} from 'redux-saga/effects';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import * as URL from '../../config/Url';

import * as actions from '../actions';

export function* saveSubscription(action) {
  const {userid, paidamount} = action;
  const body = {
    userid: userid,
    paidamount: paidamount,
  };

  console.log('hello saga', userid, paidamount);
  const url = `${URL.API_URL}save_subscription`;

  // const headers = {'Content-Type': 'application/x-www-form-urlencoded'};
  try {
    const data = yield call(axios.post, url, body);
    // console.log('subscription update data ', data);
    if (data.status === 200) {
      yield put(
        actions.subscriptionSuccess({
          package: data.data.data.package,
          status: data.status,
        }),
      );
    } else if (data.status === 401) {
      // yield put(actions.failureRegistration());
    } else {
      // throw new Error('Something went wrong');
    }
  } catch (error) {
    console.log(error);
    // yield put(actions.failureRegistration(error.message));
  }
}
