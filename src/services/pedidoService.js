import pedidoRepository from "../repositories/pedidoRepository.js";

const pedidoService = {
    recuperarPedido: async () => {
        const resultado = await pedidoRepository.selecionarPedido();
        return resultado;
    },
    recuperarPedidoPorId: async (id) => {
        const resultado = await pedidoRepository.selecionarPedidoPorId(id);
        return resultado;
    },
    recuperarPedidoporDataCompra: async (dataCompra) => {
        const resultado = await pedidoRepository.selecionarPedidoporDataCompra(dataCompra);
        return resultado;
    },

    deletarPedido: async (id) => {
        const resultado = await pedidoRepository.deletarPedido(id);
        return resultado;
    },

     criarPedido: async (pedido) => {
        const resultado = await pedidoRepository.criarPedido(pedido.dataCompra, pedido.valorTotal, pedido.idCliente, pedido.idUser);
        return resultado;
    },

     atualizarPedido: async (pedido) => {
        const resultado = await pedidoRepository.atualizarPedido(pedido.dataCompra, pedido.valorTotal, pedido.idCliente, pedido.idUser, pedido.id);
        return resultado;
    }

};

export default pedidoService;
