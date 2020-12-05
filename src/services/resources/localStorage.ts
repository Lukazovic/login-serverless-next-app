const APP_LOCAL_STORAGE_KEY = '@next-serverless';
const USER_ID_LOCAL_STORAGE_KEY = `${APP_LOCAL_STORAGE_KEY}/user-id`;
const TOKEN_LOCAL_STORAGE_KEY = `${APP_LOCAL_STORAGE_KEY}/token`;

const getAuthToken = () => {
  const token = localStorage.getItem(TOKEN_LOCAL_STORAGE_KEY);
  return JSON.parse(token);
};

const setAuthToken = (token: string) => {
  localStorage.setItem(TOKEN_LOCAL_STORAGE_KEY, JSON.stringify(token));
};

const clearAuthToken = () => {
  localStorage.removeItem(TOKEN_LOCAL_STORAGE_KEY);
};

const getUserId = () => {
  const token = localStorage.getItem(USER_ID_LOCAL_STORAGE_KEY);
  return JSON.parse(token);
};

const setUserId = (token: string) => {
  localStorage.setItem(USER_ID_LOCAL_STORAGE_KEY, JSON.stringify(token));
};

const clearUserId = () => {
  localStorage.removeItem(USER_ID_LOCAL_STORAGE_KEY);
};

export default {
  getAuthToken,
  setAuthToken,
  clearAuthToken,
  getUserId,
  setUserId,
  clearUserId,
};
