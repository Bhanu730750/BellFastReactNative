import {put, call} from 'redux-saga/effects';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import * as URL from '../../config/Url';

import API from '../../utils/fetchClient';

import * as actions from '../actions';

export function* getWalletBalance(action) {
  let userid = yield AsyncStorage.getItem('user-p-id');
  const url = `${URL.API_URL}get_wallet_balance/${userid}`;

  // const data = yield call(axios.get, url);
  const data = yield API.get(url);
  if (data.status === 200) {
    console.log('get wallet balance ', data);
    yield put(actions.putWalletBalance(data.data.data));
  }
}

export function* addAmountToWallet(action) {
  let user_id = yield AsyncStorage.getItem('user-p-id');
  const body = {
    amount: action.amount,
    txn_id: action.txn,
    id: user_id,
  };
  try {
    const data = yield API.post('add_wallet_balance', body);
    if (data.status === 200) {
      console.log('jgjgjgjg', data);
      yield put(actions.putWalletBalance({data: data.data.data, status: 200}));
    } else {
      yield put(actions.putWalletBalance(data));
    }
  } catch (error) {
    yield put(actions.putWalletBalance(error.message));
  }
}

export function* getAllTransaction(action) {
  try {
    let userid = yield AsyncStorage.getItem('user-p-id');
    const url = `${URL.API_URL}get_all_transactions/${userid}`;

    const data = yield API.get(url);
    console.log('hellllooooooo', data);
    if (data.status === 200) {
      yield put(actions.putAllTransactions(data.data.data));
    }
  } catch (error) {
    yield put(actions.putAllTransactions(error.message));
  }
}
