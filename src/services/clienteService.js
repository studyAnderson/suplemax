import clienteRepository from "../repositories/clienteRepository.js";

const clienteService = {
    recuperarCliente: async () => {
        const resultado = await clienteRepository.selecionarCliente();
        return resultado;
    },
    recuperarClienteporId: async (id) => {
        const resultado = await clienteRepository.selecionarClienteporId(id);
        return resultado;
    },
    recuperarClienteporEmail: async (email) => {
    const resultado = await clienteRepository.selecionarClienteporEmail(email);
    return resultado;
    },

    deletarCliente: async (id) => {
        const resultado = await clienteRepository.deletarCliente(id);
        return resultado;
    },

     criarCliente: async (cliente) => {
        const resultado = await clienteRepository.criarCliente(cliente.cpf, cliente.nome, cliente.email, cliente.telefone);
        return resultado;
    },

     atualizarCliente: async (cliente) => {
        const resultado = await clienteRepository.atualizarCliente(cliente.cpf, cliente.nome, cliente.email, cliente.id, cliente.telefone);
        return resultado;
    }

};

export default clienteService;