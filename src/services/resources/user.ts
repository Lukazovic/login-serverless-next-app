import request from '../tools/request';

const getUserInfomation = async (userId: string) =>
  request.get(`/v1/users/${userId}`);

export default {
  getUserInfomation,
};
