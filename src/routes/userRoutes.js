import {Router} from "express";
import userController from "../controllers/userController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import authAdminMiddleware from "../middlewares/authAdminMiddlewares.js";

const userRoutes = Router();

userRoutes.get("/", userController.selecionar);

userRoutes.post("/", userController.criar);

userRoutes.delete("/:id", authMiddleware, authAdminMiddleware, userController.deletar);

userRoutes.put("/:id", userController.atualizar);


export default userRoutes;