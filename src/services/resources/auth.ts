import request from '../tools/request';

const signIn = (data: object) => request.post('/v1/users/sessions', data);

const signUp = (data: object) => request.post('/v1/users', data);

export default {
  signIn,
  signUp,
};
