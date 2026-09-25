import pool from "../configs/database.js";


const enderecoRepository = {
    selecionar: async () => {
        const sql = 'SELECT * FROM endereco;';
        const [rows] = await pool.execute(sql);
        return rows;
    },
    selecionarPorCEP: async (cep) => {
        const sql = 'SELECT * FROM endereco WHERE cep = ?;';
        const [rows] = await pool.execute(sql, [cep]);
        return rows;
    },
    selecionarPorId: async (enderecoId) => {
        const sql = 'SELECT * FROM endereco WHERE id = ?;';
        const [rows] = await pool.execute(sql, [enderecoId]);
        return rows;
    },
    deletar: async (enderecoId) => {
        const sql = 'DELETE FROM endereco WHERE id = ?;';
        const [rows] = await pool.execute(sql, [enderecoId]);
        return rows;
    },

    criar: async (cep, logradouro, numero, bairro, cidade, uf, idCliente) => {
        console.log(cep, logradouro, numero, bairro, cidade, uf);

        const sql = 'INSERT INTO endereco VALUES (null, ?, ?, ?, ?, ?, ?, ?);';
        const [rows] = await pool.execute(sql, [cep, logradouro, numero, bairro, cidade, uf, idCliente]);
        return rows;
    },

    atualizar: async (cep, logradouro, numero, bairro, cidade, uf, id) => {
        console.log(cep, logradouro, numero, bairro, cidade, uf, id);
        
        const sql = 'UPDATE endereco SET cep = ?, logradouro = ?, numero = ?, bairro = ?, cidade = ?, uf = ? WHERE id = ?;';
        const [rows] = await pool.execute(sql, [cep, logradouro, numero, bairro, cidade, uf, id]);
        return rows;
    },
        
}

export default enderecoRepository;

