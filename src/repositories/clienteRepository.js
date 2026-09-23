import pool from "../configs/database.js";


const clienteRepository = {
    selecionarCliente: async () => {
        const sql = 'SELECT c.*, t.id AS "id_tel", t.numero, t.ddd FROM cliente AS c LEFT JOIN telefone AS t ON c.id = t.id_cliente;';
        const [rows] = await pool.execute(sql);
        return rows;
    },
    selecionarClienteporEmail: async (email) => {
        const sql = 'SELECT * FROM cliente WHERE email = ?;';
        const [rows] = await pool.execute(sql, [email]);
        return rows;
    },
    selecionarClienteporId: async (id) => {
        const sql = 'SELECT * FROM cliente WHERE id = ?;';
        const [rows] = await pool.execute(sql, [id]);
        return rows;
    },
    deletarCliente: async (id) => {
        const sql = 'DELETE FROM cliente WHERE id = ?;';
        const [rows] = await pool.execute(sql, [id]);
        return rows;
    },

    criarCliente: async (cpf, nome, email, telefone) => {
        const conn = await pool.getConnection();

        await conn.beginTransaction();

        try{

            const sqlCli = 'INSERT INTO cliente VALUES (null, ?, ?, ?);';
            const [rowsCli] = await conn.execute(sqlCli, [cpf, nome, email]);

            const idCliente = rowsCli.insertId;

            const sqlTel = 'INSERT INTO telefone VALUES (null, ?, ?, ?);';
            const [rowsTel] = await conn.execute(sqlTel, [telefone.numero, telefone.ddd, idCliente]);

            await conn.commit();

            return true;
        }
        catch(error){
            console.error(error);
            await conn.rollback();
            throw new Error("Erro na transação!");
        }
        finally{
            conn.release();
        }
    },

    atualizarCliente: async (cpf, nome, email, id, telefone) => {
        const conn = await pool.getConnection();

        await conn.beginTransaction();

        try{

            const sqlCli = 'UPDATE cliente SET nome = ?, email = ?, cpf = ? WHERE id = ?;';
            const [rowsCli] = await pool.execute(sqlCli, [nome, email, cpf, id]);

            const sqlTel = 'UPDATE telefone SET numero = ?, ddd = ? WHERE id_cliente = ?;';
            const [rowTel] = await pool.execute(sqlTel, [telefone.numero, telefone.ddd, id]);

            return rowsCli;

        }
        catch(error){
            console.error(error);
            await conn.rollback();
            throw new Error("Erro na transação!");
        }
        finally{
            conn.release();
        }
    },
    
}

export default clienteRepository;