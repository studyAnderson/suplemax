import loteRepository from "../repositories/loteRepository.js";

const loteService = {
    recuperarLote: async () => {
        const resultado = await loteRepository.selecionar();
        return resultado;
    },
    recuperarLotePorid: async (loteId) => {
        const resultado = await loteRepository.recuperarLotePorId();
        return resultado;
    },
    recuperarLotePorNumeroLote: async (numeroLote) => {
        const resultado = await loteRepository.selecionarPorNumeroLote(numeroLote);
        return resultado;
    },

    recuperarLotePorQuantidade: async (quantidade) => {
        const resultado = await loteRepository.selecionarPorQuantidade(quantidade);
        return resultado;
    },

    recuperarLotePorDataValidade: async (dataValidade) => {
        const resultado = await loteRepository.selecionarPorDataValidade(dataValidade);
        return resultado;
    },
    
    deletarLote: async (loteId) => {
        const resultado = await loteRepository.deletar(loteId);
        return resultado;
    },

     criarLote: async (lote) => {
        const resultado = await loteRepository.criar(lote.numeroLote, lote.quantidade, lote.dataValidade, lote.produtoId);
        return resultado;
    },

     atualizarLote: async (lote) => {
        const resultado = await loteRepository.atualizar(lote.numeroLote, lote.quantidade, lote.dataValidade, lote.id);
        return resultado;
    }

    
};

export default loteService;