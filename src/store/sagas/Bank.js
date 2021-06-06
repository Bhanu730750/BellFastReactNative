import {put, call} from 'redux-saga/effects';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import API from '../../utils/fetchClient';
import * as actions from '../actions';
import multipartAPI from '../../utils/multipartAPI';
import http, {httpForm, httpFormJson} from '../../utils/http';

export function* saveBankDetails(action) {
  let user_id = yield AsyncStorage.getItem('user-p-id');
  const body = {
    account_name: action.payload.account_name,
    account_number: action.payload.account_number,
    bank_name: action.payload.bank_name,
    bank_verification_number: action.payload.bank_verification_number,
    user_id: user_id,
  };
  console.log(body);

  try {
    const data = yield API.post('save_bank_details', body);
    if (data.status === 200) {
      yield put(actions.successSavingBankDetails(data));
    } else {
      yield put(actions.failureSavingBankDetails(data));
    }
  } catch (error) {
    console.log(error.message);
    yield put(actions.failureSavingBankDetails(error.message));
  }
}

// export function* getPawnDetails(action) {
//   console.log(action);
//   const {pawnid} = action;
//   try {
//     const data = yield API.get(`get_pawn_details/${pawnid}`);
//     console.log('my/pawns details', data.data);
//     if (data.status === 200) {
//       yield put(actions.putPawnsDetails(data.data));
//     } else {
//       yield put(actions.putPawnsDetails(data.data));
//     }
//   } catch (error) {
//     yield put(actions.putPawnsDetails(error.message));
//   }
// }
