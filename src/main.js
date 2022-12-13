import Express from "express";
import cors from "cors"
const app = Express();

import openDb from "./connection/configDB.js";
openDb.then(() => {
  console.log("conectado ao banco");
});

import { CreateTableProduct, CreateTableUser, enableForeignKey } from "./connection/createDB.js";
CreateTableProduct(openDb), CreateTableUser(openDb), enableForeignKey(openDb)


import middlePattern from "./middlewares/config.js";
middlePattern(app, Express, cors)

import userRoute from "./routers/user.routes.js";
app.use(userRoute)


export default app;
