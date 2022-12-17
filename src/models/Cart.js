import { v4 as uuidv4 } from "uuid";

class Cart {
  constructor(user_id, product_id, status) {
    (this.id = uuidv4()),
      (this.user_id = user_id),
      (this.product_id = product_id),
      (this.status = status);
  }
}

export default Cart;
