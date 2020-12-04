import fs from 'fs';
import db from '../../../db.json';
import Model from './Model';

interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
}

class User extends Model {
  name: string;
  email: string;
  password: string;
  createdAt: number;

  constructor({ name, email, password }) {
    super();

    this.name = name;
    this.email = email;
    this.password = password;
    this.createdAt = Date.now();
  }

  save() {
    db['users'].push({
      id: this.id,
      name: this.name,
      email: this.name,
      password: this.password,
      createdAt: this.createdAt,
    });

    fs.writeFile('db.json', JSON.stringify(db, null, 2), function (err) {
      if (err) {
        throw err;
      }
    });
  }
}

export default User;
