import Endereco from "../models/Endereco.js";
import enderecoService from "../services/enderecoService.js";

const enderecoController = {

    selecionar: async (req, res) => {
        try {
            const resultado = await enderecoService.recuperarEndereco();

            res.status(200).json({
                message: "Endereços recuperados com sucesso:",
                data: resultado
            });

        } catch (error) {
            res.status(500).json({
                message: "Erro ao recuperar endereço!",
                data: error.message
            });
        }
    },

    criar: async (req, res) => {
        try {
            const { cep, logradouro, numero, bairro, cidade, uf, idCliente } = req.body;

            const endereco = new Endereco(
                cep,
                logradouro,
                numero,
                bairro,
                cidade,
                uf,
                idCliente,
                null
            );

            const resultado = await enderecoService.criarEndereco(endereco);

            return res.status(201).json({
                message: "Endereço criado com sucesso!",
                data: resultado
            });

        } catch (error) {
            console.error(error);

            return res.status(500).json({
                message: "Erro ao criar o endereço!",
                data: error.message
            });
        }
    },

    deletar: async (req, res) => {
        try {
            const { id } = req.params;

            const resultado = await enderecoService.deletarEndereco(id);

            return res.status(200).json({
                message: "Endereço deletado com sucesso!",
                data: resultado
            });

        } catch (error) {
            console.error(error);

            return res.status(500).json({
                message: "Erro ao deletar o endereço!",
                data: error.message
            });
        }
    },

    atualizar: async (req, res) => {
        try {
            const { id } = req.params;

            const {
                cep,
                logradouro,
                numero,
                bairro,
                cidade,
                uf
            } = req.body;

            const endereco = new Endereco(
                cep,
                logradouro,
                numero,
                bairro,
                cidade,
                uf,
                null,
                id
            );

            const resultado = await enderecoService.atualizarEndereco(endereco);

            return res.status(200).json({
                message: "Endereço atualizado com sucesso!",
                data: resultado
            });

        } catch (error) {
            console.error(error);

            return res.status(500).json({
                message: "Erro na atualização do endereço!",
                data: error.message
            });
        }
    }
};

export default enderecoController;
