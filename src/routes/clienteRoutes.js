import {Router} from "express";
import clienteController from "../controllers/clienteController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import authAdminMiddleware from "../middlewares/authAdminMiddlewares.js";

const clienteRoutes = Router();

clienteRoutes.get("/", clienteController.selecionarCliente);

clienteRoutes.post("/", clienteController.criarCliente);

clienteRoutes.delete("/:id", clienteController.deletarCliente);

clienteRoutes.put("/:id", clienteController.atualizarCliente);


export default clienteRoutes;

//authMiddleware, authAdminMiddleware,