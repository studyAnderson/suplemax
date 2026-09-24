import { Router } from "express";
import loteController from "../controllers/loteController.js";


const loteRoutes = Router();

loteRoutes.get("/", loteController.selecionar);

loteRoutes.post("/", loteController.criar);

loteRoutes.delete("/:id", loteController.deletar);

loteRoutes.put("/:id", loteController.atualizar);


export default loteRoutes;