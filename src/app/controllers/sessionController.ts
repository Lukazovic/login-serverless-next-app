import { NowRequest, NowResponse } from '@vercel/node';
import User from '../models/UserModel';

import authService from '../services/tools/auth';

class sessionController {
  create(request: NowRequest, response: NowResponse) {
    const { email, password } = request.body;

    const user = User.findByEmail(email);

    if (!user) {
      return response.status(404).json({ error: 'User not found!' });
    }

    const isPasswordValid = String(user.password) === String(password);

    if (!isPasswordValid) {
      return response.status(401).json({ error: 'Password is not valid!' });
    }

    const token = authService.generateAuthToken(user.id);

    return response.status(200).json({ user, token });
  }
}

export default new sessionController();
