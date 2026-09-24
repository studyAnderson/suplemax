import Lote from "../models/Lote.js";
import loteService from "../services/loteService.js";

const loteController = {

    selecionar: async (req, res) => {
        try {
            const resultado = await loteService.recuperarLote();

            res.status(200).json({
                message: "Lote recuperados com sucesso:",
                data: resultado
            });

        } catch (error) {
            res.status(500).json({
                message: "Erro ao recuperar Lote!",
                data: error.message
            });
        }
    },

    criar: async (req, res) => {
        try {
            const { numeroLote, quantidade, dataValidade, produtoId } = req.body;
           
            const lote = new Lote(
                numeroLote,
                quantidade,
                dataValidade,
                produtoId,
                null
            );

            const resultado = await loteService.criarLote(lote);

            return res.status(201).json({
                message: "Lote criado com sucesso!",
                data: resultado
            });

        } catch (error) {
            console.error(error);

            return res.status(500).json({
                message: "Erro ao criar o lote!",
                data: error.message
            });
        }
    },

    deletar: async (req, res) => {
        try {
            const { id } = req.params;

            const resultado = await loteService.deletarLote(id);

            return res.status(200).json({
                message: "Lote deletado com sucesso!",
                data: resultado
            });

        } catch (error) {
            console.error(error);

            return res.status(500).json({
                message: "Erro ao deletar o lote!",
                data: error.message
            });
        }
    },

    atualizar: async (req, res) => {
        try {
            const { id } = req.params;

            const {
                numeroLote,
                quantidade,
                dataValidade
                
            } = req.body;

            const lote = new Lote(
                numeroLote,
                quantidade,
                dataValidade,
                null,
                id,
            );

            const resultado = await loteService.atualizarLote(lote);

            return res.status(200).json({
                message: "Lote atualizado com sucesso!",
                data: resultado
            });

        } catch (error) {
            console.error(error);

            return res.status(500).json({
                message: "Erro na atualização do lote!",
                data: error.message
            });
        }
    }
};

export default loteController;