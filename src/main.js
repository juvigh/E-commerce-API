import Express from "express";
const app = Express();

import openDb from "./connection/configDB.js";

openDb.then(() => {
  console.log("conectado ao banco");
});

import { CreateTableProduct, CreateTableUser, enableForeignKey } from "./connection/createDB.js";
CreateTableProduct(openDb), CreateTableUser(openDb), enableForeignKey(openDb)



export default app;
