export default passwordValidator = (password) => {
  const re = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{8,}$/;
  if (!password || password.length <= 0) return '비밀번호를 입력하세요.';

  return '';
};
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

import API_URL from 'config/url';

async function http(route, page = null, id = null) {
  const token = await AsyncStorage.getItem('auth-token');
  let url = `${API_URL}/${route}`;
  if (page) {
    url = `${API_URL}/${route}?page=${page}`;
  } else if (id) {
    url = `${API_URL}/${route}/${id}`;
  }
  const headers = {Authorization: token};
  const {data} = await axios.get(url, {
    headers,
  });
  return data;
}

export async function httpForm(route, form) {
  const token = await AsyncStorage.getItem('auth-token');
  const url = `${API_URL}/${route}`;
  const headers = {Authorization: token, 'Content-Type': 'multipart/form-data'};
  const {data} = await axios.post(url, form, {headers});
  return data;
}

export async function httpFormJson(route, form) {
  const token = await AsyncStorage.getItem('auth-token');
  const url = `${API_URL}/${route}`;
  const headers = {Authorization: token};
  const {data} = await axios.post(url, form, {headers});
  return data;
}

export async function httpPost(route) {
  const token = await AsyncStorage.getItem('auth-token');
  const url = `${API_URL}/${route}`;
  const headers = {Authorization: token};
  const {data} = await axios.post(url, [], {headers});
  return data;
}

export async function httpDelete(route, id) {
  const token = await AsyncStorage.getItem('auth-token');
  let url;
  if (id) {
    url = `${API_URL}/${route}/${id}`;
  } else {
    url = `${API_URL}/${route}`;
  }
  const headers = {Authorization: token};
  const {data} = await axios.delete(url, {headers});
  return data;
}

export default http;
