import pool from "../configs/database.js";


const itensRepository = {
    selecionarItens: async () => {
        const sql = `SELECT 
                        i.*, 
                        p.nome AS "nome_produto"
                    FROM itens AS i
                        INNER JOIN produto AS p 
                            ON i.idProduto = p.id;`;
        const [rows] = await pool.execute(sql);
        return rows;
    },
    selecionarItensPorId: async (id) => {
        const sql = 'SELECT * FROM itens WHERE id = ?;';
        const [rows] = await pool.execute(sql, [id]);
        return rows;
    },
    selecionarItensporValorProduto: async (valorProduto) => {
        const sql = 'SELECT * FROM itens WHERE valorProduto = ?;';
        const [rows] = await pool.execute(sql, [valorProduto]);
        return rows;
    },
    deletarItens: async (id) => {
        const sql = 'DELETE FROM itens WHERE id = ?;';
        const [rows] = await pool.execute(sql, [id]);
        return rows;
    },
    criarItens: async (valorProduto, quantidade, idPedido, idProduto) => {
        const sql = 'INSERT INTO itens (valor_Produto, quantidade, id_pedido, id_produto) VALUES (?, ?, ?, ?);';
        const [rows] = await pool.execute(sql, [valorProduto, quantidade, idPedido, idProduto]);
        return rows;
    },
    atualizarItens: async (id, valorProduto, quantidade, idPedido, idProduto) => {
        const sql = 'UPDATE itens SET valor_Produto = ?, quantidade = ?, id_pedido = ?, id_produto = ? WHERE id = ?;';
        const [rows] = await pool.execute(sql, [valorProduto, quantidade, idPedido, idProduto, id]);
        return rows;
    }
};

export default itensRepository;