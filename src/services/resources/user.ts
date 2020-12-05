import request from '../tools/request';
import localStorageResources from '../resources/localStorage';

const getUserInfomation = async () => {
  const userId = localStorageResources.getUserId();

  if (!userId) return null;

  try {
    const response = await request.get(`/v1/users/${userId}`);
    return response.data;
  } catch (err) {
    return null;
  }
};

export default {
  getUserInfomation,
};
