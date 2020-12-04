import { v4 as uuidv4 } from 'uuid';

class Model {
  id: string;

  constructor() {
    this.id = uuidv4();
  }
}

export default Model;
