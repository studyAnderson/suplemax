import Itens from "../models/Itens.js";
import itensService from "../services/itensService.js";

const itensController = {

    selecionar: async (req, res) => {
        try {
            const resultado = await itensService.recuperarItens();

            res.status(200).json({
                message: "Itens recuperados com sucesso:",
                data: resultado
            });

        } catch (error) {
            res.status(500).json({
                message: "Erro ao recuperar Itens!",
                data: error.message
            });
        }
    },

    criar: async (req, res) => {
        try {
            const { valorProduto, quantidade, idPedido, idProduto } = req.body;

            const itens = new Itens(
                valorProduto,
                quantidade,
                idPedido,
                idProduto
            );

            const resultado = await itensService.criarItens(itens);

            return res.status(201).json({
                message: "Itens criados com sucesso!",
                data: resultado
            });

        } catch (error) {
            console.error(error);

            return res.status(500).json({
                message: "Erro ao criar os itens!",
                data: error.message
            });
        }
    },

    deletar: async (req, res) => {
        try {
            const { id } = req.params;

            const resultado = await itensService.deletarItens(id);

            return res.status(200).json({
                message: "Itens deletados com sucesso!",
                data: resultado
            });

        } catch (error) {
            console.error(error);

            return res.status(500).json({
                message: "Erro ao deletar os itens!",
                data: error.message
            });
        }
    },

    atualizar: async (req, res) => {
        try {
            const { id } = req.params;

            const {
                valorProduto,
                quantidade,
                idPedido,
                idProduto
            } = req.body;

            const itens = new Itens(
                valorProduto,
                quantidade,
                idPedido,
                idProduto,
                id
            );

            const resultado = await itensService.atualizarItens(itens);

            return res.status(200).json({
                message: "Itens atualizados com sucesso!",
                data: resultado
            });

        } catch (error) {
            console.error(error);

            return res.status(500).json({
                message: "Erro na atualização dos itens!",
                data: error.message
            });
        }
    }
};

export default itensController;