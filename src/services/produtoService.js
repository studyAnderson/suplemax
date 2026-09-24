import produtoRepository from "../repositories/produtoRepository.js";


const produtoService = {
    recuperarProduto: async () => {
        const resultado = await produtoRepository.selecionar();
        return resultado;
    },
    recuperarProdutoPorid: async (produtoId) => {
        const resultado = await produtoRepository.recuperarProdutoPorId();
        return resultado;
    },
    recuperarProdutoPorDescricao: async (descricao) => {
        const resultado = await produtoRepository.selecionarPorDescricao(descricao);
        return resultado;
    },

    recuperarProdutoPorPreco: async (preco) => {
        const resultado = await produtoRepository.selecionarPorPreco(preco);
        return resultado;
    },

    recuperarProdutoPorEstoqueAtual: async (estoqueAtual) => {
        const resultado = await produtoRepository.selecionarPorEstoqueAtual(estoqueAtual);
        return resultado;
    },

    recuperarProdutoPorEstoqueMinimo: async (estoqueMinimo) => {
        const resultado = await produtoRepository.selecionarPorEstoqueMinimo(estoqueMinimo);
        return resultado;
    },

    recuperarProdutoPorEstoqueMaximo: async (estoqueMaximo) => {
        const resultado = await produtoRepository.selecionarPorEstoqueMaximo(estoqueMaximo);
        return resultado;
    },

    deletarProduto: async (produtoId) => {
        const resultado = await produtoRepository.deletar(produtoId);
        return resultado;
    },

     criarProduto: async (produto) => {
        const resultado = await produtoRepository.criar(produto.descricao, produto.preco, produto.estoqueAtual, produto.estoqueMinimo, produto.estoqueMaximo);
        return resultado;
    },

     atualizarProduto: async (produto) => {
        const resultado = await produtoRepository.atualizar(produto.descricao, produto.preco, produto.estoqueAtual, produto.estoqueMinimo, produto.estoqueMaximo, produto.id);
        return resultado;
    }

    
};

export default produtoService;