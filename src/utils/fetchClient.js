import axios from 'axios';
import * as URL from '../config/Url';
import AsyncStorage from '@react-native-community/async-storage';

const instanceFunction = (instanceObj) => {
  // Set the AUTH token for any request
  instanceObj.interceptors.request.use(
    async function (config) {
      await AsyncStorage.getItem('auth-token').then((token) => {
        config.headers['Authorization'] = token ? 'Bearer ' + token : null;
      });
      return config;
    },
    function (error) {
      return Promise.reject(error);
    },
  );

  // Add a response interceptor
  instanceObj.interceptors.response.use(
    function (response) {
      console.log('fetch client', response);
      // Any status code that lie within the range of 2xx will come here
      let respObj = {
        data: response.data ? response.data : [],
        status: response.status,
      };
      return respObj;
    },
    function (error) {
      if (error.response && error.response.status) return error.response;
      return Promise.reject(error);
    },
  );

  return instanceObj;
};

const fetchClient = () => {
  const defaultOptions = {
    baseURL: URL.API_URL,
  };

  // Create instance
  let instance = axios.create(defaultOptions);

  return instanceFunction(instance);
};

export default fetchClient();

export const multipartAPI = () => {
  const defaultOptions = {
    baseURL: URL.API_URL,
    headers: {
      'content-type': 'multipart/form-data',
      authToken: AsyncStorage.getItem('auth-token'),
    },
  };

  // Create instance
  let instance = axios.create(defaultOptions);

  return instanceFunction(instance);
};
