import pool from "../configs/database.js";


const produtoRepository = {
    selecionar: async () => {
        const sql = 'SELECT * FROM produto;';
        const [rows] = await pool.execute(sql);
        return rows;
    },
    selecionarPorDescricao: async (descricao) => {
        const sql = 'SELECT * FROM produto WHERE descricao = ?;';
        const [rows] = await pool.execute(sql, [descricao]);
        return rows;
    },
    selecionarPorId: async (produtoId) => {
        const sql = 'SELECT * FROM produto WHERE id = ?;';
        const [rows] = await pool.execute(sql, [produtoId]);
        return rows;
    },
    deletar: async (produtoId) => {
        const sql = 'DELETE FROM produto WHERE id = ?;';
        const [rows] = await pool.execute(sql, [produtoId]);
        return rows;
    },

    criar: async (descricao, preco, estoqueAtual, estoqueMinimo, estoqueMaximo) => {
        console.log(descricao, preco, estoqueAtual, estoqueMinimo, estoqueMaximo);
        
        const sql = 'INSERT INTO produto VALUES (null, ?, ?, ?, ?, ?);';
        const [rows] = await pool.execute(sql, [descricao, preco, estoqueAtual, estoqueMinimo, estoqueMaximo]);
        return rows;
    },

    atualizar: async (descricao, preco, estoqueAtual, estoqueMinimo, estoqueMaximo, id) => {
        console.log(descricao, preco, estoqueAtual, estoqueMinimo, estoqueMaximo, id);
        
        const sql = 'UPDATE produto SET descricao = ?, preco = ?, estoque_atual = ?, estoque_minimo = ?, estoque_maximo = ? WHERE id = ?;';
        const [rows] = await pool.execute(sql, [descricao, preco, estoqueAtual, estoqueMinimo, estoqueMaximo, id]);
        return rows;
    },
        
}

export default produtoRepository;