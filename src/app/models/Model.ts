import { v4 as uuidv4 } from 'uuid';
import db from '../../../db.json';

class Model {
  id: string;

  constructor() {
    this.id = uuidv4();
  }

  static findWhere(object: object) {
    const keys = Object.keys(object);
    const values = Object.values(object);

    const [users] = keys.map((key, index) =>
      db.users.filter((user) => user[key] === values[index])
    );
    return users;
  }

  static findById(id: string) {
    const [user] = this.findWhere({ id });
    return user;
  }
}

export default Model;
