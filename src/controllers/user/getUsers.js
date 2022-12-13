import openDb from "../../connection/configDB.js";

const getUsers = async (req, res) => {
  const querySQL = `SELECT * FROM user`;

  new Promise((resolve, reject) => {
    openDb.all(querySQL, (error, rows) => {
      if (!error) {
        resolve(rows);
      } else {
        reject(error);
      }
    });
  })
    .then((result) => response.json(result))
    .catch((error) => console.log(error));
};

export default getUsers;
