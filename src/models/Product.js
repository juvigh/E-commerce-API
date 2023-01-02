import { v4 as uuidv4 } from "uuid";

class Product {
  constructor(img, title, description, value) {
    (this.id = uuidv4()),
      (this.img = img),
      (this.title = title),
      (this.description = description),
      (this.value = value);
  }
}

export default Product;
