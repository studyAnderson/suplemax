import { Router } from "express";
import itensController from "../controllers/itensController.js";

const itensRoutes = Router();

itensRoutes.get("/", itensController.selecionar);

itensRoutes.post("/", itensController.criar);

itensRoutes.delete("/:id", itensController.deletar);

itensRoutes.put("/:id", itensController.atualizar);

export default itensRoutes;