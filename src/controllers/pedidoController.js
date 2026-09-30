import Pedido from "../models/Pedido.js";
import pedidoService from "../services/pedidoService.js";

const pedidoController = {

    selecionar: async (req, res) => {
        try {
            const resultado = await pedidoService.recuperarPedido();

            res.status(200).json({
                message: "Pedido recuperados com sucesso:",
                data: resultado
            });

        } catch (error) {
            res.status(500).json({
                message: "Erro ao recuperar Pedido!",
                data: error.message
            });
        }
    },

    criar: async (req, res) => {
        try {
            const { dataCompra, valorTotal, idCliente } = req.body;
            const idUser = req.user.id;
            
            const pedido = new Pedido(
                dataCompra,
                valorTotal,
                idCliente,
                idUser,
                null
            );

            const resultado = await pedidoService.criarPedido(pedido);

            return res.status(201).json({
                message: "Pedido criado com sucesso!",
                data: resultado
            });

        } catch (error) {
            console.error(error);

            return res.status(500).json({
                message: "Erro ao criar o pedido!",
                data: error.message
            });
        }
    },

    deletar: async (req, res) => {
        try {
            const { id } = req.params;

            const resultado = await pedidoService.deletarPedido(id);

            return res.status(200).json({
                message: "Pedido deletado com sucesso!",
                data: resultado
            });

        } catch (error) {
            console.error(error);

            return res.status(500).json({
                message: "Erro ao deletar o pedido!",
                data: error.message
            });
        }
    },

    atualizar: async (req, res) => {
        try {
            const { id } = req.params;

            const {
                dataCompra,
                valorTotal,
                idCliente,
                idUser
            } = req.body;

            const pedido = new Pedido(
                dataCompra,
                valorTotal,
                idCliente,
                idUser,
                id
            );

            const resultado = await pedidoService.atualizarPedido(pedido);

            return res.status(200).json({
                message: "Pedido atualizado com sucesso!",
                data: resultado
            });

        } catch (error) {
            console.error(error);

            return res.status(500).json({
                message: "Erro na atualização do pedido!",
                data: error.message
            });
        }
    }
};

export default pedidoController;
