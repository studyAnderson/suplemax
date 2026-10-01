import itensRepository from "../repositories/itensRepository.js";

const itensService = {
    recuperarItens: async () => {
        const resultado = await itensRepository.selecionarItens();
        return resultado;
    },
    recuperarItensPorId: async (id) => {
        const resultado = await itensRepository.selecionarItensPorId(id);
        return resultado;
    },
    recuperarItensporValorProduto: async (valorProduto) => {
        const resultado = await itensRepository.selecionarItensporValorProduto(valorProduto);
        return resultado;
    },

    deletarItens: async (id) => {
        const resultado = await itensRepository.deletarItens(id);
        return resultado;
    },

     criarItens: async (itens) => {
        const resultado = await itensRepository.criarItens(itens.valorProduto, itens.quantidade, itens.idPedido, itens.idProduto);
        return resultado;
    },

     atualizarItens: async (itens) => {
        const resultado = await itensRepository.atualizarItens(itens.id, itens.valorProduto, itens.quantidade, itens.idPedido, itens.idProduto);
        return resultado;
    }

};

export default itensService;