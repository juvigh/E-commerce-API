import openDb from "../../connection/configDB.js";
import User from "../../models/User.js";

const createUser = async (req, res) => {
  const querySQL = `INSERT INTO user(id, name, email, password) VALUES (?,?,?,?)`;
  const newUser = new User(req.body.name, req.body.email, req.body.password);

  new Promise((resolve, reject) => {
    openDb.run(
      querySQL,
      [newUser.id, newUser.name, newUser.email, newUser.password],
      (error) => {
        if (!error) {
          resolve("New user entered successfully");
        } else {
          reject(error);
        }
      }
    );
  })
    .then((result) => response.send(result))
    .catch((error) => console.log(error));
};

export default createUser;
