import Express from "express";
import cors from "cors";
const app = Express();

import middlePattern from "./middlewares/config.js";
middlePattern(app, Express, cors);

import db from "./connection/configDB.js";

import userController from "./controllers/user/userController.js";
import productController from "./controllers/product/productController.js";
import cartController from "./controllers/cart/cartController.js";
userController(app, db);
productController(app, db);
cartController(app, db);

import { CreateTableCart, CreateTableProduct, CreateTableUser, enableForeignKey } from "./connection/createDB.js";
enableForeignKey(db);
CreateTableUser(db);
CreateTableProduct(db);
CreateTableCart(db);

export default app;
