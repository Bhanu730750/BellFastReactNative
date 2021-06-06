import {put, call} from 'redux-saga/effects';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import API from '../../utils/fetchClient';
import * as actions from '../actions';
import multipartAPI from '../../utils/multipartAPI';
import http, {httpForm, httpFormJson} from '../../utils/http';

export function* getCollaterals(action) {
  try {
    const data = yield API.get('category');
    console.log('collas', data.data.data);
    if (data.status === 200) {
      yield put(actions.putCollaterals(data.data.data));
    } else {
      yield put(actions.putCollaterals(data.data.data));
    }
  } catch (error) {
    yield put(actions.putCollaterals(error.message));
  }
}

export function* getTypes(action) {
  const {collId} = action;
  try {
    const data = yield API.get(`types/${collId}`);
    // console.log('collas', data);
    if (data.status === 200) {
      yield put(actions.putTypes(data.data.data));
    } else {
      yield put(actions.putTypes(data.data.data));
    }
  } catch (error) {
    yield put(actions.putTypes(error.message));
  }
}

export function* submitPawnRequest(action) {
  let today = new Date();
  let user_id = yield AsyncStorage.getItem('user-p-id');
  const body = {
    collateral: action.payload.collateral,
    description: action.payload.description,
    itemcondition: action.payload.itemcondition,
    itemname: action.payload.itemname,
    loanamount: action.payload.loanamount,
    typepicker: action.payload.typepicker,
    interest: action.payload.interest,
    payable_amount: action.payload.payable_amount,
    userid: user_id,
    post_time:
      today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds(),
  };
  try {
    const data = yield API.post('submit_pawn_request', body);
    if (data.status === 200) {
      const imagesname = yield uploadFiles(action.payload.images);
      // if(imagesname.data !== '' && images)
      let imgdata = {
        lastid: data.data.data,
        name: imagesname.data.data,
      };
      // console.log('afsdfdsf',imgdata);
      const saveimagename = yield API.post('save_image_nameindb', imgdata);
      // console.log('saveimagename',saveimagename);
      yield put(actions.submitPawnRequestSuccess(data));
    } else {
      yield put(actions.submitPawnRequestSuccess(data));
    }
  } catch (error) {
    yield put(actions.submitPawnRequestSuccess(error.message));
  }
}

export function* getMyPawns(action) {
  const {userid} = action;
  try {
    const data = yield API.get(`mypawns/${userid}`);
    // console.log('my/pawns', data.data);
    if (data.status === 200) {
      yield put(actions.putMyPawns(data.data));
    } else {
      yield put(actions.putMyPawns(data.data));
    }
  } catch (error) {
    yield put(actions.putMyPawns(error.message));
  }
}

export function* getPawnDetails(action) {
  const {pawnid} = action;
  try {
    const data = yield API.get(`get_pawn_details/${pawnid}`);
    console.log('my/pawns details', data.data);
    if (data.status === 200) {
      yield put(actions.putPawnsDetails(data.data));
    } else {
      yield put(actions.putPawnsDetails(data.data));
    }
  } catch (error) {
    yield put(actions.putPawnsDetails(error.message));
  }
}

export function* getNewPawnsList(action) {
  const {userid, listtype} = action;
  // console.log('helo pawnas', action);
  try {
    const data = yield API.get(`pawns_list/${userid}/${listtype}`);
    console.log('getNewPawnsList', data);
    if (data.status === 200) {
      yield put(actions.putNewPawnsList(data.data));
    } else {
      yield put(actions.putNewPawnsList(data.data));
    }
  } catch (error) {
    yield put(actions.putNewPawnsList(error.message));
  }
}

export function* getAcceptedPawnList(action) {
  const {userid, listtype} = action;
  // console.log('helo pawnas', action);
  try {
    const data = yield API.get(`pawns_list/${userid}/${listtype}`);
    if (data.status === 200) {
      yield put(actions.putAcceptedPawnsList(data.data.data));
    } else {
      yield put(actions.putAcceptedPawnsList(data.data.data));
    }
  } catch (error) {
    yield put(actions.putAcceptedPawnsList(error.message));
  }
}

export function* getProducts(action) {
  try {
    const data = yield API.get(`get_shop_products`);
    if (data.status === 200) {
      yield put(actions.putProducts(data.data.data));
    } else {
      yield put(actions.putProducts(data.data.data));
    }
  } catch (error) {
    yield put(actions.putProducts(error.message));
  }
}

export function* uploadFiles(images) {
  try {
    let param = new FormData();
    yield images.map(async (file, key) => {
      // console.log('here is uri', file.uri);
      param.append('upload[]', {
        uri: file.uri,
        type: 'image/jpeg',
        name:
          file.filename ||
          file.uri.substring(file.uri.lastIndexOf('/') + 1, file.uri.length),
      });
    });
    let response = yield multipartAPI.post(`upload_image_on_server`, param);
    return response;
  } catch (error) {
    console.log('error', error);
  }
}

export function* proceedToPurchase(action) {
  let user_id = yield AsyncStorage.getItem('user-p-id');
  console.log('hello', action.pid);
  const body = {
    pid: action.pid,
    user_id: user_id,
  };
  try {
    const data = yield API.post('submit_order_request', body);
    if (data.status === 200) {
      console.log('purchase success', data);
      yield put(actions.purchaseSuccess(data));
    } else {
      yield put(actions.purchaseFailure(data));
    }
  } catch (error) {
    yield put(actions.purchaseFailure(error.message));
  }
}

export function* getOrders(action) {
  let user_id = yield AsyncStorage.getItem('user-p-id');
  // console.log('helo pawnas', action);
  try {
    const data = yield API.get(`order_list/${user_id}`);
    if (data.status === 200) {
      yield put(actions.putMyOrderList(data.data.data));
    } else {
      yield put(actions.putMyOrderList(data.data.data));
    }
  } catch (error) {
    yield put(actions.putMyOrderList(error.message));
  }
}

export function* proceedToAccept(action) {
  let user_id = yield AsyncStorage.getItem('user-p-id');
  console.log('hello', action.pid);
  const body = {
    pid: action.pid,
    user_id: user_id,
  };
  try {
    const data = yield API.post('submit_accept_request', body);
    if (data.status === 200) {
      console.log('purchase success', data);
      yield put(actions.acceptSuccess(data));
    } else {
      yield put(actions.acceptFailure(data));
    }
  } catch (error) {
    yield put(actions.acceptFailure(error.message));
  }
}

export function* cancelMyPawnsRequest(action) {
  let user_id = yield AsyncStorage.getItem('user-p-id');
  console.log('hello', action);
  const body = {
    pid: action.pawnid,
    user_id: user_id,
  };
  try {
    const data = yield API.post('cancel_pawn_request', body);
    if (data.status === 200) {
      console.log('cancel success success', data);
      yield put(actions.cancelMyPawnsConfirm(data));
    } else {
      yield put(actions.cancelMyPawnsConfirm(data));
    }
  } catch (error) {
    yield put(actions.cancelMyPawnsConfirm(error.message));
  }
}
