import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

import * as URL from '../config/Url';

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
  const url = `${URL.API_URL}${route}`;
  console.log('api url', url);
  const headers = {
    Authorization: 'Bearer ' + token,
    'Content-Type': 'multipart/form-data',
  };
  console.log(headers);
  const {data} = await axios.post(url, JSON.stringify(form), {headers});
  console.log('asdfasdfs', data);
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
