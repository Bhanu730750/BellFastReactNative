import {put, call} from 'redux-saga/effects';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import API from '../../utils/fetchClient';
import * as actions from '../actions';
import multipartAPI from '../../utils/multipartAPI';
import http, {httpForm, httpFormJson} from '../../utils/http';

export function* updateProfileDetails(action) {
  let user_id = yield AsyncStorage.getItem('user-p-id');

  try {
    const imagesname = yield uploadFiles(action.payload.images);
    let imgdata = {
      name: imagesname.data.data,
    };

    if (imgdata.name !== '') {
      const body = {
        fullname: action.payload.fullname,
        telephone: action.payload.contact_number,
        address: action.payload.fulladdress,
        city: action.payload.city,
        state: action.payload.province,
        zipcode: action.payload.zip_code,
        lati: action.payload.lati,
        longi: action.payload.longi,
        filename: imgdata.name,
        userid: user_id,
      };
      const data = yield API.post('update_profile', body);
      yield put(actions.successUploadingKyc(data));
      if (data.status === 200) {
        yield put(actions.successUpdateProfile(data));
      } else {
        yield put(actions.failureUpdateProfile(data));
      }
    }
  } catch (error) {
    yield put(actions.failureUpdateProfile(error.message));
  }
}

export function* uploadKycFile(action) {
  let user_id = yield AsyncStorage.getItem('user-p-id');

  try {
    const imagesname = yield uploadFiles(action.payload.images);
    let imgdata = {
      name: imagesname.data.data,
    };
    if (imgdata.name !== '') {
      const body = {
        filename: imgdata.name,
        kyc_type: action.payload.doctype,
        userid: user_id,
      };
      const data = yield API.post('update_profile_kyc', body);
      yield put(actions.successUploadingKyc(data));
    }
  } catch (error) {
    // console.log(error);
    yield put(actions.successUploadingKyc(error.message));
  }
}

export function* uploadFiles(images) {
  try {
    let param = new FormData();
    param.append('upload', {
      uri: images.path,
      type: 'image/jpeg',
      name:
        images.filename ||
        images.path.substring(
          images.path.lastIndexOf('/') + 1,
          images.path.length,
        ),
    });

    let response = yield multipartAPI.post(`upload_kyc_images`, param);
    return response;
  } catch (error) {
    console.log('error', error);
  }
}

export function* setDuty(action) {
  let userid = yield AsyncStorage.getItem('user-p-id');
  const body = {
    userid: userid,
  };
  const data = yield API.post('set_duty', body);
  console.log('datadata set duty', data);
  if (data.status === 200) {
    yield put(actions.confirmDuty(data.data));
  }
}

export function* getmyprofiledetails(action) {
  // console.log('reached');
  try {
    const data = yield API.post('details');
    // console.log('profile details======rocky=======', data);
    if (data.status === 200) {
      yield AsyncStorage.setItem('user-p-id', `${data.data.data.id}`);
      yield AsyncStorage.setItem('userid', `${data.data.data.user_id}`);
      yield put(actions.putMyProfileDetails(data));
    } else {
      yield put(actions.putMyProfileDetails(data));
    }
  } catch (error) {
    yield put(actions.putMyProfileDetails(error.message));
  }
}
