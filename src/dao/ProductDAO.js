class ProductDAO {
  constructor(database) {
    this.db = database;
  }

  GetAllProducts() {
    const querySQL = `SELECT * FROM products`;
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

  GetAnProduct(id) {
    const querySQL = `SELECT * FROM products WHERE id=?`;
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

  InsertNewProduct(newProduct) {
    const querySQL = `INSERT INTO products(id, img, title, description, value) VALUES (?,?,?,?,?)`;
    return new Promise((resolve, reject) => {
      this.db.run(
        querySQL,
        [
          newProduct.id,
          newProduct.img,
          newProduct.title,
          newProduct.description,
          newProduct.value,
        ],
        (erro) => {
          if (!erro) {
            resolve(newProduct);
          } else {
            reject(erro);
          }
        }
      );
    });
  }

  ModifyProduct(product) {
    const querySQL = `UPDATE products SET img =?, title=?, description=?, value=? WHERE id=?`;
    return new Promise((resolve, reject) => {
      this.db.run(
        querySQL,
        [
          product.img,
          product.title,
          product.description,
          product.value,
          product.id,
        ],
        (erro) => {
          if (!erro) {
            resolve(product);
          } else {
            reject(erro);
          }
        }
      );
    });
  }

  DeleteProduct(id) {
    const querySQL = `DELETE FROM products WHERE id=?`;
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

export default ProductDAO;
