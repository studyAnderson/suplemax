import pool from "../configs/database.js";


const clienteRepository = {
    selecionarCliente: async () => {
        const sql = `SELECT 
                        c.*, 
                        t.id AS "id_tel", t.numero, t.ddd,
                        e.id AS "id_end", e.cep, e.logradouro, e.numero, e.bairro, e.cidade, e.uf
                    FROM cliente AS c
                        INNER JOIN telefone AS t 
                            ON c.id = t.id_cliente
                        INNER JOIN endereco AS e 
                            ON c.id = e.id_cliente;`;
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
        const conn = await pool.getConnection();

        await conn.beginTransaction();

        try{
            const sqlTel = 'DELETE FROM telefone WHERE id_cliente = ?;';
            const [rowsT] = await pool.execute(sqlTel, [id]);

            const sqlEnd = 'DELETE FROM endereco WHERE id_cliente = ?;';
            const [rowsE] = await pool.execute(sqlEnd, [id]);

            const sqlCli = 'DELETE FROM cliente WHERE id = ?;';
            const [rowsC] = await pool.execute(sqlCli, [id]);
            return {
                rowsC,
                rowsE,
                rowsT
            };
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

    criarCliente: async (cpf, nome, email, telefone, endereco) => {
        const conn = await pool.getConnection();

        await conn.beginTransaction();

        try{

            const sqlCli = 'INSERT INTO cliente VALUES (null, ?, ?, ?);';
            const [rowsCli] = await conn.execute(sqlCli, [cpf, nome, email]);

            const idCliente = rowsCli.insertId;

            const sqlTel = 'INSERT INTO telefone (numero, ddd, id_cliente) VALUES (?, ?, ?);';
            const [rowsTel] = await conn.execute(sqlTel, [telefone.numero, telefone.ddd, idCliente]);

            const sqlEnd = 'INSERT INTO endereco VALUES (null, ?, ?, ?, ?, ?, ?, ?);';
            const [rowsEnd] = await conn.execute(sqlEnd, [
                endereco.cep,
                endereco.logradouro,
                endereco.numero, 
                endereco.bairro, 
                endereco.cidade, 
                endereco.uf, 
                idCliente
            ]);

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