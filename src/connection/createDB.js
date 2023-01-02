const pragma = `PRAGMA foreign_keys = ON`

export function enableForeignKey(db) {
  db.run(pragma, (error) => {
    if (error) {
      console.log("Error in process of creation exec 'pragma'");
    }
  })}
  
  const USERS_SCHEMA = `
    CREATE TABLE users (
      id VARCHAR(50) PRIMARY KEY,
      name VARCHAR(80),
      email VARCHAR(80),
      password VARCHAR(100)
)`

export function CreateTableUser(db) {
  db.run(USERS_SCHEMA, (error) => {
    if (error) console.log(error);
  })}
 
  const PRODUCTS_SCHEMA = `
    CREATE TABLE products (
      id VARCHAR(50) PRIMARY KEY,
      img VARCHAR(100),
      title VARCHAR(80),
      description VARCHAR(100),
      value FLOAT
)`

export function CreateTableProduct(db) {
  db.run(PRODUCTS_SCHEMA, (error) => {
    if (error) console.log(error);
  })}

const CART_SCHEMA = `
  CREATE TABLE cart (
    id VARCHAR(50) PRIMARY KEY,
    user_id  VARCHAR(50) REFERENCES users(id),
    product_id VARCHAR(50) REFERENCES productS(id),
    status VARCHAR(50)
)`

export function CreateTableCart(db) {
  db.run(CART_SCHEMA, (error) => {
    if (error) console.log(error);
  });
}