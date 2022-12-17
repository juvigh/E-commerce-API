class CartDAO {
  constructor(database) {
    this.db = database;
  }

  GetAllItensOnCart() {
    const querySQL = `SELECT * FROM cart`;
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

  GetAnItemOnCart(id) {
    const querySQL = `SELECT * FROM cart WHERE id=?`;
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

  InsertNewItemOnCart(newItemOnCart) {
    const querySQL = `INSERT INTO cart(id, user_id, product_id, status) VALUES (?,?,?,?)`;
    return new Promise((resolve, reject) => {
      this.db.run(
        querySQL,
        [
          newItemOnCart.id,
          newItemOnCart.user_id,
          newItemOnCart.product_id,
          newItemOnCart.status,
        ],
        (erro) => {
          if (!erro) {
            resolve(newItemOnCart);
          } else {
            reject(erro);
          }
        }
      );
    });
  }

  ModifyItemOnCart(itemOnCart) {
    const querySQL = `UPDATE cart SET user_id=?, product_id=?, status=? WHERE id=?`;
    return new Promise((resolve, reject) => {
      this.db.run(
        querySQL,
        [itemOnCart.user_id, itemOnCart.product_id, itemOnCart.status, itemOnCart.id],
        (erro) => {
          if (!erro) {
            resolve(itemOnCart);
          } else {
            reject(erro);
          }
        }
      );
    });
  }

  DeleteItemOnCart(id) {
    const querySQL = `DELETE FROM cart WHERE id=?`;
    return new Promise((resolve, reject) => {
      this.db.run(querySQL, id, (erro) => {
        if (!erro) {
          resolve("Product deleted successfully");
        } else {
          reject(erro);
        }
      });
    });
  }
}

export default CartDAO;
