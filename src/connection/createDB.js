const pragma = `PRAGMA foreign_keys = ON`;

export function enableForeignKey(openDb) {
  openDb.then((db) => {
    db.run(pragma).catch((error) => {
      console.log(error);
    });
  });
}

const USERS_SCHEMA = `
CREATE TABLE IF NOT EXISTS user (
    id INTEGER PRIMARY KEY,
    name VARCHAR(80),
    email VARCHAR(80),
    password VARCHAR(100)
)`;

export function CreateTableUser(openDb) {
  openDb
    .then((db) => {
      db.exec(USERS_SCHEMA);
    })
    .catch((error) => {
      console.log(error);
    });
}

const PRODUCTS_SCHEMA = `
CREATE TABLE IF NOT EXISTS product (
    id INTEGER PRIMARY KEY,
    title VARCHAR(80),
    description VARCHAR(100),
    value FLOAT
)`;

export function CreateTableProduct(openDb) {
  openDb
    .then((db) => {
      db.exec(PRODUCTS_SCHEMA);
    })
    .catch((error) => {
      console.log(error);
    });
}

//continuar depois

// const CART_SCHEMA = `
// CREATE TABLE IF NOT EXISTS cart (
//     id INTEGER PRIMARY KEY,
//     user_id INTEGER FOREIGN KEY(user_id) REFERENCES user(id) ON DELETE CASCADE,
//     product_id INTEGER FOREIGN KEY(product_id) REFERENCES product(id) ON DELETE CASCADE,
//     status VARCHAR(80)
// )`;

// export function CreateTableCart(openDb) {
//   openDb
//     .then((db) => {
//       db.exec(CART_SCHEMA);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }
