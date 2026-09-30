import pool from "../configs/database.js";


const pedidoRepository = {
    selecionarPedido: async () => {
        const sql = `SELECT 
                        p.*, 
                        c.nome AS "nome_cliente"
                    FROM pedido AS p
                    INNER JOIN cliente AS c 
                        ON p.id_cliente = c.id;`;
        const [rows] = await pool.execute(sql);
        return rows;
    },
    selecionarPedidoPorId: async (id) => {
        const sql = 'SELECT * FROM pedido WHERE id = ?;';
        const [rows] = await pool.execute(sql, [id]);
        return rows;
    },
    selecionarPedidoporDataCompra: async (dataCompra) => {
        const sql = 'SELECT * FROM pedido WHERE data_compra = ?;';
        const [rows] = await pool.execute(sql, [dataCompra]);
        return rows;
    },

    deletarPedido: async (id) => {
        const sql = 'DELETE FROM pedido WHERE id = ?;';
        const [rows] = await pool.execute(sql, [id]);
        return rows;
    },

    criarPedido: async (dataCompra, valorTotal, idCliente, idUser) => {        
        const sql = 'INSERT INTO pedido (valor_total, id_cliente, id_user) VALUES (?, ?, ?);';
        const [rows] = await pool.execute(sql, [valorTotal, idCliente, idUser]);
        return rows;
    },

    atualizarPedido: async (dataCompra, valorTotal, idCliente, idUser, id) => {
        const sql = 'UPDATE pedido SET data_compra = ?, valor_total = ?, id_cliente = ?, id_user = ? WHERE id = ?;';
        const [rows] = await pool.execute(sql, [dataCompra, valorTotal, idCliente, idUser, id]);
        return rows;
    }

};

export default pedidoRepository;
