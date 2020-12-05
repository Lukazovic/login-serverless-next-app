import { NowRequest, NowResponse } from '@vercel/node';
import User from '../models/User';

import authService from '../services/tools/auth';

class sessionController {
  create(request: NowRequest, response: NowResponse) {
    const { email, password } = request.body;

    const user = User.findByEmail(email);

    if (!user) {
      return response.status(404).json({ error: 'User not found!' });
    }

    const isPasswordValid = user.checkPassword(password);

    if (!isPasswordValid) {
      return response.status(401).json({ error: 'Password is not valid!' });
    }

    const token = authService.generateAuthToken(user.id);
    console.log({ token });

    return response.status(200).json({ user, token });
  }
}

export default new sessionController();
