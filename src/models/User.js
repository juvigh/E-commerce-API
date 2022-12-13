import { v4 as uuidv4 } from 'uuid';
import { sha256 } from 'js-sha256';

class User {
    constructor(name, email, password) {
        this.id = uuidv4(),
        this.name = name,
        this.email = email,
        this.password = sha256(password)
    }
}

export default User;