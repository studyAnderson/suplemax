import { Router } from "express";
import produtoController from "../controllers/produtoController.js";


const produtoRoutes = Router();

produtoRoutes.get("/", produtoController.selecionar);

produtoRoutes.post("/", produtoController.criar);

produtoRoutes.delete("/:id", produtoController.deletar);

produtoRoutes.put("/:id", produtoController.atualizar);


export default produtoRoutes;