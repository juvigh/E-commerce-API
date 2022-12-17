import { v4 as uuidv4 } from "uuid";
import { sha256 } from "js-sha256";
export class User {
  validPassword(password) {
    if (password) {
      return sha256(password);
    } else {
      return "";
    }
  }

  constructor(name, email, password) {
    (this.id = uuidv4()),
      (this.name = name),
      (this.email = email),
      (this.password = this.validPassword(password));
  }
}

export class UserAuth {
  validPassword(password) {
    if (password) {
      return sha256(password);
    } else {
      return "";
    }
  }
  constructor(email, password) {
    (this.email = email), (this.password = this.validPassword(password));
  }
}

