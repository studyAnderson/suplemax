import Cliente from "../models/Cliente.js";
import Endereco from "../models/Endereco.js";
import Telefone from "../models/Telefone.js";
import clienteService from "../services/clienteService.js";

const clienteController = {

    selecionarCliente: async (req, res) => {
        try{
            const resultado = await clienteService.recuperarCliente();

            res.status(200).json({
                menssage: "Cliente recuperados com sucesso:",
                data: resultado

            });
        }
        
        catch (error){
            res.status(500).json({
                message: "Erro ao recuperar Clientes!",
                data: error.message
            });

        }
    },

    criarCliente: async (req, res) => {
        try {

            const { cpf, nome, email, telefone, endereco } = req.body;

            const tel = new Telefone(null, telefone.numero, telefone.ddd, null);

            const end = new Endereco(endereco.cep, endereco.logradouro, endereco.numero, endereco.bairro, endereco.cidade, endereco.uf, null, null);

            const cliente = new Cliente(cpf, nome, email, tel, end);

            const resultado = await clienteService.criarCliente(cliente);

            return res.status(201).json({
                message: "Cliente criado com sucesso!",
                data: resultado
            });
        }
        catch(error){
            console.error(error);
            return res.status(500).json({
                message: "Erro ao criar Cliente!",
                    data: error.resultado


            });
        }
    },

    deletarCliente: async (req, res) => {

        try {
            const {id}= req.params;

            const resultado = await clienteService.deletarCliente(id);

            return res.status(200).json({
                message: "Cliente deletado com sucesso!",
                data: resultado
            });

        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message: "Erro ao deletar Cliente!",
                data: error
            });
        }
    },

      atualizarCliente: async (req, res) => {
        try {
            const {id}= req.params;

            const {nome, email, cpf, telefone} = req.body;

            const cliente = new Cliente(cpf, nome, email, telefone, id);

            const resultado = await clienteService.atualizarCliente(cliente);

            return res.status(200).json({
                message: "Cliente atualizado com sucesso!",
                data: resultado
            });
        }
        catch(error){
            console.error(error);
            return res.status(500).json({
                message: "Erro na atualização do Cliente!",
                    data: error.resultado


            });
        }
    }

}

export default clienteController;