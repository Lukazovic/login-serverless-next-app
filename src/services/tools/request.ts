import axios from 'axios';

const api = axios.create({
  baseURL: process.env.BASE_URL,
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
