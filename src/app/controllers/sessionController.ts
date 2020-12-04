import { NowRequest, NowResponse } from '@vercel/node';
import User from '../models/UserModel';

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

    const token = 'da5sd1as6d1as6d1as6d1sa';

    return response.status(200).json({ user, token });
  }
}

export default new sessionController();
