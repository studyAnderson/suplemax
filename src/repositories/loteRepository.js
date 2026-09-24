import pool from "../configs/database.js";


const loteRepository = {
    selecionar: async () => {
        const sql = 'SELECT * FROM lote;';
        const [rows] = await pool.execute(sql);
        return rows;
    },
    selecionarPorNumeroLote: async (numeroLote) => {
        const sql = 'SELECT * FROM lote WHERE numeroLote = ?;';
        const [rows] = await pool.execute(sql, [numeroLote]);
        return rows;
    },
    selecionarPorId: async (loteId) => {
        const sql = 'SELECT * FROM lote WHERE id = ?;';
        const [rows] = await pool.execute(sql, [loteId]);
        return rows;
    },
    deletar: async (loteId) => {
        const sql = 'DELETE FROM lote WHERE id = ?;';
        const [rows] = await pool.execute(sql, [loteId]);
        return rows;
    },

    criar: async (numeroLote, quantidade, dataValidade, produtoId) => {
        // console.log({numeroLote, quantidade, dataValidade, produtoId});
        
        const sql = 'INSERT INTO lote VALUES (null, ?, ?, ?, ?);';
        const [rows] = await pool.execute(sql, [numeroLote, quantidade, dataValidade, produtoId]);
        return rows;
    },

    atualizar: async (numeroLote, quantidade, dataValidade, id) => {
        console.log({numeroLote, quantidade, dataValidade, id});
        
        const sql = 'UPDATE lote SET numero_lote = ?, quantidade = ?, data_validade = ? WHERE id = ?;';
        const [rows] = await pool.execute(sql, [numeroLote, quantidade, dataValidade, id]);
        return rows;
    },
        
}

export default loteRepository;