import {put, call} from 'redux-saga/effects';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import API from '../../utils/fetchClient';
import * as actions from '../actions';

// import * as URL from '../../config/Url';

export function* authenticate(action) {
  const {email, password} = action;
  const body = {
    email: email,
    password: password,
  };

  try {
    const data = yield API.post('login', body);
    if (data.status === 200) {
      const expirationDate = new Date(new Date().getTime() + 31556952000);
      yield AsyncStorage.setItem('auth-token', `${data.data.success.token}`);
      yield AsyncStorage.setItem('expirationDate', expirationDate.toString());
      yield put(actions.loginSuccess(data));
    } else {
      yield put(actions.loginFailure(data.status));
    }
  } catch (error) {
    yield put(actions.loginFailure(error.message));
  }
}

export function* register(action) {
  console.log(action);
  const {userid, password, typePicker, categoryPicker} = action;
  const body = {
    email: userid,
    password: password,
    user_type: typePicker,
    category: categoryPicker,
  };
  try {
    const data = yield API.post('register', body);
    if (data.status === 200) {
      const expirationDate = new Date(new Date().getTime() + 31556952000);
      yield AsyncStorage.setItem('auth-token', `${data.data.data.token}`);
      yield AsyncStorage.setItem('expirationDate', expirationDate.toString());
      yield put(actions.signUpSuccess(data));
    } else {
      yield put(actions.signUpFailure(data));
    }
  } catch (error) {
    yield put(actions.signUpFailure(error.message));
  }
}

export function* changepassword(action) {
  // console.log(action);
  const {email} = action;
  const body = {
    email: email,
  };

  try {
    const data = yield API.post('changepassword', body);
    console.log('onsaga', data);
    if (data.status === 200) {
      yield put(actions.successChangePassword(data));
    } else {
      yield put(actions.successChangePassword(data));
    }
  } catch (error) {
    yield put(actions.successChangePassword(error.message));
  }
}

// export function* authenticate(action) {
//   const url = `${URL.API_URL}login`;
//   console.log(url);
//   const {email, password} = action;
//   const body = {
//     email: email,
//     password: password,
//   };
//   const headers = {'Content-Type': 'application/x-www-form-urlencoded'};

//   try {
//     const data = yield call(axios.post, url, body);

//     if (data.status === 200) {
//       const expirationDate = new Date(new Date().getTime() + 31556952000);

//       yield AsyncStorage.setItem(
//         'auth-token',
//         `Bearer ${data.data.success.token}`,
//       );
//       yield AsyncStorage.setItem('expirationDate', expirationDate.toString());
//       // Put value to redux store
//       yield put(
//         actions.loginSuccess({
//           token: data.data.success.token,
//           status: data.status,
//         }),
//       );
//     } else if (data.status === 401) {
//       yield put(actions.loginFailure());
//     } else {
//       throw new Error('Something went wrong');
//     }
//   } catch (error) {
//     yield put(actions.loginFailure(error.message));
//   }
// }

export function* checkAuthStatus() {
  console.log('check auth status called');
  const token = yield call([AsyncStorage, 'getItem'], 'auth-token');

  const expirationDate = parseInt(
    yield call([AsyncStorage, 'getItem'], 'expirationDate'),
    10,
  );
  const currentDate = yield new Date().getTime();
  if (!token) {
    yield put(actions.initLogout());
  } else if (currentDate > expirationDate) {
    yield put(actions.initLogout());
  } else {
    const url = `${URL.API_URL}details`;
    const body = {};
    try {
      const response = yield call(axios.post, url, body, {
        headers: {
          Authorization: token,
        },
      });
      if (response.status !== 200) throw new Error('Please Login Again');
      yield AsyncStorage.setItem(
        'user-id',
        response.data.success.id.toString(),
      );
      yield put(actions.authStatusSuccess(response.data.success));
    } catch (error) {
      yield put(actions.authStatusFailure(error.message));
    }
  }
}

export function* logout() {
  // console.log('logout initiated......');
  yield call([AsyncStorage, 'removeItem'], 'auth-token');
  yield call([AsyncStorage, 'removeItem'], 'expirationDate');
  yield put(actions.logoutSuccess(200));
}
