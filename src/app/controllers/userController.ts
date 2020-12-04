import fs from 'fs';
import { NowRequest, NowResponse } from '@vercel/node';
import db from '../../../db.json';
import User from '../models/UserModel';

class userController {
  index(request: NowRequest, response: NowResponse) {
    const users = User.findAll();

    return response.status(200).json(users);
  }

  show(request: NowRequest, response: NowResponse) {
    const { id } = request.query;

    const user = db.users.filter((user) => user.id === id);

    return response.status(200).json(user);
  }

  create(request: NowRequest, response: NowResponse) {
    const { name, email, password } = request.body;

    const newUser = {
      id: `${db.users.length}+1`,
      name,
      email,
      password,
      createdAt: Date.now(),
    };

    db.users.push(newUser);

    fs.writeFile('db.json', JSON.stringify(db, null, 2), function (err) {
      console.log({ err });
      if (err) return response.send('Write file error');

      return response.status(200).json(newUser);
    });
  }
}

export default new userController();
