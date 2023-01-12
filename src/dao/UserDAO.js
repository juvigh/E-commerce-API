export class UserDAO {
  constructor(database) {
    this.db = database;
  }

  GetAllUsers() {
    const querySQL = `SELECT * FROM users`;
    return new Promise((resolve, reject) => {
      this.db.all(querySQL, (erro, rows) => {
        if (!erro) {
          resolve(rows);
        } else {
          reject(erro);
        }
      });
    });
  }

  GetAnUser(id) {
    const querySQL = `SELECT * FROM users WHERE id=?`;
    return new Promise((resolve, reject) => {
      this.db.all(querySQL, id, (erro, rows) => {
        if (!erro) {
          resolve(rows);
        } else {
          reject(erro);
        }
      });
    });
  }

  GetAnUserByEmail(email) {
    const querySQL = `SELECT * FROM users WHERE email=?`;
    return new Promise((resolve, reject) => {
      this.db.all(querySQL, email, (erro, rows) => {
        if (!erro) {
          resolve(rows);
        } else {
          reject(erro);
        }
      });
    });
  }

  InsertNewUser(newUser) {
    const querySQL = `INSERT INTO users(id, name, email, password) VALUES (?,?,?,?)`;
    return new Promise((resolve, reject) => {
      this.db.run(
        querySQL,
        [newUser.id, newUser.name, newUser.email, newUser.password],
        (erro) => {
          if (!erro) {
            resolve(newUser);
          } else {
            reject(erro);
          }
        }
      );
    });
  }

  ModifyUser(user) {
    const querySQL = `UPDATE users SET name=?, email=?, password=? WHERE id=?`;
    return new Promise((resolve, reject) => {
      this.db.run(
        querySQL,
        [user.name, user.email, user.password, user.id],
        (erro) => {
          if (!erro) {
            resolve(user);
          } else {
            reject(erro);
          }
        }
      );
    });
  }

  DeleteUser(id) {
    const querySQL = `DELETE FROM users WHERE id=?`;
    return new Promise((resolve, reject) => {
      this.db.run(querySQL, id, (erro, rows) => {
        if (!erro) {
          resolve(rows);
        } else {
          reject(erro);
        }
      });
    });
  }
}
