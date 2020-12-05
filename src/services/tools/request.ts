import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

const setTokenHeaders = (token: string) => {
  api.defaults.headers['Authorization'] = `Bearer ${token}`;
};

const get = (url: string) => api.get(url);

const post = (url: string, body?: object) => api.post(url, body);

export default {
  get,
  post,
  setTokenHeaders,
};
