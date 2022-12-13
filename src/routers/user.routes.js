import Express from "express";
import createUser from "../controllers/user/createUser.js";
import getUsers from "../controllers/user/getUsers.js";
const userRoute = Express.Router();

userRoute.get("/user", getUsers);
userRoute.post("/user", createUser); // vírgula, a função que irá vim do controller de criar usuario
userRoute.put("/user/:id");
userRoute.delete("/user/:id");
userRoute.post("/login");

export default userRoute;
