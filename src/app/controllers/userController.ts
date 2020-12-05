import { NowRequest, NowResponse } from '@vercel/node';

import User from '../models/User';

class userController {
  index(request: NowRequest, response: NowResponse) {
    const users = User.findAll();

    return response.status(200).json(users);
  }

  show(request: NowRequest, response: NowResponse) {
    const id = request.query.id as string;

    const user = User.findById(id);

    if (!user) {
      return response.status(404).json({ error: 'User not found!' });
    }

    return response.status(200).json(user);
  }

  create(request: NowRequest, response: NowResponse) {
    const { name, email, password } = request.body;

    const user = new User({ name, email, password });

    try {
      user.save();
      return response.status(200).json(user);
    } catch (err) {
      return response.status(401).json({ error: err.message });
    }
  }
}

export default new userController();
