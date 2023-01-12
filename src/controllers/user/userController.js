import { User, UserAuth } from "../../models/User.js";
import { UserDAO } from "../../dao/UserDAO.js";

const userController = (app, db) => {
  const userDAO = new UserDAO(db);

  //get
  app.get("/user", async (req, res) => {
    try {
      const users = await userDAO.GetAllUsers();
      res.status(200).json({ users: users });
    } catch (error) {
      res.status(400).json({ error: "Unable to complete the action" });
    }
  });

  // get id
  app.get("/user/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const user = await userDAO.GetAnUser(id);
      res.status(200).json({ user: user });
    } catch (error) {
      res.status(400).json({ error: "Unable to complete the action" });
    }
  });

  // post
  app.post("/user", async (req, res) => {
    try {
      const newUser = new User(
        req.body.name,
        req.body.email,
        req.body.password
      );

      if (!newUser.name || !newUser.email || !newUser.password) {
        return res.status(402).json({ msg: "O campo não pode estar vazio" });
      }

      const user = await userDAO.GetAnUserByEmail(newUser.email);
      if (!user[0]) {
        const createUser = await userDAO.InsertNewUser(newUser);
        return res
          .status(200)
          .json({ msg: "Usuario registrado com sucesso", newUser: createUser });
      } else {
        return res.status(400).json({ msg: "Este email já está sendo usado" });
      }
    } catch (error) {
      res.status(400).json({ msg: "Unable to complete the action" });
    }
  });

  // put
  app.put("/user/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const getUser = await userDAO.GetAnUser(id);
      if (getUser) {
        const updateUser = new User(
          req.body.name,
          req.body.email,
          req.body.password
        );

        const user = [
          {
            name: updateUser.name || getUser[0].name,
            email: updateUser.email || getUser[0].email,
            password: updateUser.password || getUser[0].password,
            id: id,
          },
        ];

        const changeUser = await userDAO.ModifyUser(user[0]);
        res
          .status(200)
          .json({ msg: "Usuario modficado com sucesso", updateUser: changeUser });
      } else {
        res.status(404).json({ msg: "Usuario não encontrado" });
      }
    } catch (error) {
      res.status(400).json({ error: "Unable to complete the action" });
    }
  });

  // delete
  app.delete("/user/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const getUser = await userDAO.GetAnUser(id);
      const deleteUser = await userDAO.DeleteUser(id);
      res.status(200).json({ msg: `${getUser[0].name} foi deletado com sucesso` });
    } catch (error) {
      res.status(400).json({ error: "Unable to complete the action" });
    }
  });

  // login
  app.post("/login", async (req, res) => {
    try {
      const authUser = new UserAuth(req.body.email, req.body.password);
      const getUserAuth = await userDAO.LoginUser(authUser.email);

      if (getUserAuth[0].password !== authUser.password) {
        return res.status(400).json({ msg: "Email ou senha incorreto" });
      } else {
        return res
          .status(200)
          .json({ msg: "Usuario autenticado", userAuth: getUserAuth[0] });
      }
    } catch (error) {
      return res.status(400).json({ msg: "Unable to complete the action" });
    }
  });
};

export default userController;
