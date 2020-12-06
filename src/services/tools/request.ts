import axios from 'axios';

const apiV1 = axios.create({
  baseURL: `/api`,
});

const setTokenHeaders = (token: string) => {
  apiV1.defaults.headers['Authorization'] = `Bearer ${token}`;
};

const get = (url: string) => apiV1.get(url);

const post = (url: string, body?: object) => apiV1.post(url, body);

export default {
  get,
  post,
  setTokenHeaders,
};
