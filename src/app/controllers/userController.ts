import fs from 'fs';
import { NowRequest, NowResponse } from '@vercel/node';
import db from '../../../db.json';

class userController {
  index(request: NowRequest, response: NowResponse) {
    return response.status(200).json(db.users);
  }

  show(request: NowRequest, response: NowResponse) {
    const { id } = request.query;

    const user = db.users.filter((user) => user.id === Number(id));

    return response.status(200).json(user);
  }

  create(request: NowRequest, response: NowResponse) {
    const { name, email, password } = request.body;

    const newUser = {
      id: Number(db.users.length) + 1,
      name,
      email,
      password,
      created_at: Date.now(),
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
