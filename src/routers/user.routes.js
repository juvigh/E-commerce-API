import Express from "express";
const userRoute = Express.Router();

userRoute.get("/user");
userRoute.post("/user"); // vírgula, a função que irá vim do controller de criar usuario
userRoute.put("/user/:id");
userRoute.delete("/user/:id");
userRoute.post("/login");

export default userRoute;
