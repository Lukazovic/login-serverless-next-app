import axios from 'axios';
import localStorageTools from '../resources/localStorage';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

const get = (url: string) => {
  const token = localStorageTools.getAuthToken();
  if (token) api.defaults.headers['Authorization'] = `Bearer ${token}`;

  return api.get(url);
};

const post = (url: string, body?: object) => {
  const token = localStorageTools.getAuthToken();
  if (token) api.defaults.headers['Authorization'] = `Bearer ${token}`;

  return api.post(url, body);
};

export default {
  get,
  post,
};
