import enderecoRepository from "../repositories/enderecoRepository.js";


const enderecoService = {
    recuperarEndereco: async () => {
        const resultado = await enderecoRepository.selecionar();
        return resultado;
    },
    recuperarEnderecoPorid: async (enderecoId) => {
        const resultado = await enderecoRepository.recuperarEnderecoPorId();
        return resultado;
    },
    recuperarEnderecoPorCep: async (cep) => {
        const resultado = await enderecoRepository.selecionarPorCep(cep);
        return resultado;
    },

    recuperarEnderecoPorLogradouro: async (lougadouro) => {
        const resultado = await enderecoRepository.selecionarPorLogradouro(lougadouro);
        return resultado;
    },

    recuperarEnderecoPorNumero: async (numero) => {
        const resultado = await enderecoRepository.selecionarPorNumero(numero);
        return resultado;
    },

    recuperarEnderecoPorBairro: async (bairro) => {
        const resultado = await enderecoRepository.selecionarPorBairro(bairro);
        return resultado;
    },

    recuperarEnderecoPorCidade: async (cidade) => {
        const resultado = await enderecoRepository.selecionarPorCidade(cidade);
        return resultado;
    },

    recuperarEnderecoPorUf: async (uf) => {
        const resultado = await enderecoRepository.selecionarPorUf(uf);
        return resultado;
    },

    deletarEndereco: async (enderecoId) => {
        const resultado = await enderecoRepository.deletar(enderecoId);
        return resultado;
    },

     criarEndereco: async (endereco) => {
        const resultado = await enderecoRepository.criar(endereco.cep, endereco.logradouro, endereco.numero, 
            endereco.bairro, endereco.cidade, endereco.uf);
        return resultado;
    },

     atualizarEndereco: async (endereco) => {
        const resultado = await enderecoRepository.atualizar(endereco.cep, endereco.logradouro, endereco.numero, 
            endereco.bairro, endereco.cidade, endereco.uf, endereco.id);
        return resultado;
    }

    
};

export default enderecoService;