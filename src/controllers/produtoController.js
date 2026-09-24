import Produto from "../models/Produto.js";
import produtoService from "../services/produtoService.js";

const produtoController = {

    selecionar: async (req, res) => {
        try {
            const resultado = await produtoService.recuperarProduto();

            res.status(200).json({
                message: "Produtos recuperados com sucesso:",
                data: resultado
            });

        } catch (error) {
            res.status(500).json({
                message: "Erro ao recuperar produto!",
                data: error.message
            });
        }
    },

    criar: async (req, res) => {
        try {
            const { descricao, preco, estoqueAtual, estoqueMinimo, estoqueMaximo } = req.body;

            const produto = new Produto (
                descricao,
                preco,
                estoqueAtual,
                estoqueMinimo,
                estoqueMaximo,
                null
            );

            const resultado = await produtoService.criarProduto(produto);

            return res.status(201).json({
                message: "Produto criado com sucesso!",
                data: resultado
            });

        } catch (error) {
            console.error(error);

            return res.status(500).json({
                message: "Erro ao criar o produto!",
                data: error.message
            });
        }
    },

    deletar: async (req, res) => {
        try {
            const { id } = req.params;

            const resultado = await produtoService.deletarProduto(id);

            return res.status(200).json({
                message: "Produto deletado com sucesso!",
                data: resultado
            });

        } catch (error) {
            console.error(error);

            return res.status(500).json({
                message: "Erro ao deletar o produto!",
                data: error.message
            });
        }
    },

    atualizar: async (req, res) => {
        try {
            const { id } = req.params;

            const {
                descricao,
                preco,
                estoqueAtual,
                estoqueMinimo,
                estoqueMaximo

            } = req.body;

            const produto = new Produto(
                descricao,
                preco,
                estoqueAtual,
                estoqueMinimo,
                estoqueMaximo,
                null,
                id
            );

            const resultado = await produtoService.atualizarProduto(produto);

            return res.status(200).json({
                message: "Produto atualizado com sucesso!",
                data: resultado
            });

        } catch (error) {
            console.error(error);

            return res.status(500).json({
                message: "Erro na atualização do Produto!",
                data: error.message
            });
        }
    }
};

export default produtoController;