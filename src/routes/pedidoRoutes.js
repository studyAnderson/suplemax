import { Router } from "express";
import pedidoController from "../controllers/pedidoController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const pedidoRoutes = Router();

pedidoRoutes.get("/", authMiddleware, pedidoController.selecionar);

pedidoRoutes.post("/", authMiddleware, pedidoController.criar);

pedidoRoutes.delete("/:id", authMiddleware, pedidoController.deletar);

pedidoRoutes.put("/:id", authMiddleware, pedidoController.atualizar);

export default pedidoRoutes;