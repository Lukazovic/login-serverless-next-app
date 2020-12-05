import fs from 'fs';
import bcrypt from 'bcryptjs';

import db from '../../../db.json';
import Model from './Model';

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

  static findAll() {
    return db.users;
  }

  static findByEmail(email: string) {
    const [user] = this.findWhere({ email });
    return user;
  }

  async save() {
    const userExists = User.findByEmail(this.email);

    if (userExists) {
      throw new Error('Email is already taken');
    }

    const hashedPassword = await this.generatePasswordHash(this.password);

    db['users'].push({
      id: this.id,
      name: this.name,
      email: this.name,
      password: hashedPassword,
      createdAt: this.createdAt,
    });

    fs.writeFile('db.json', JSON.stringify(db, null, 2), function (err) {
      if (err) {
        throw err;
      }
    });
  }

  private async generatePasswordHash(password: string) {
    return await bcrypt.hash(password, 8);
  }
}

export default User;
