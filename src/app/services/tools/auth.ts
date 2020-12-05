import jwt from 'jsonwebtoken';

import authConfig from '../../../config/auth';

const generateAuthToken = (id: string) =>
  jwt.sign({ id }, authConfig.secret, {
    expiresIn: authConfig.expiresIn,
  });

export default { generateAuthToken };
