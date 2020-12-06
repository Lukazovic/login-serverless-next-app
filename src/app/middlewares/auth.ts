import { NowRequest, NowResponse, NowApiHandler } from '@vercel/node';
import jwt from 'jsonwebtoken';

import authConfig from '../config/auth';
import UserModel from '../models/User';

const auth = (handler: NowApiHandler) => async (
  request: NowRequest,
  response: NowResponse
) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({ error: 'Token not provided' });
  }

  const [, token] = authHeader.split(' ');

  try {
    jwt.verify(token, authConfig.secret, (err, decoded: any) => {
      if (err) throw new Error('Token is not valid');

      const user = UserModel.findById(decoded.id);

      if (!user) throw new Error('You are not in the database');
    });

    handler(request, response);
  } catch (err) {
    return response.json({ error: err.message });
  }
};

export default auth;
