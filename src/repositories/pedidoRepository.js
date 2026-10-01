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
        const conn = await pool.getConnection();

        await conn.beginTransaction();

        try{
            const sqlItens = 'DELETE FROM itens WHERE id_pedido = ?;';
            const [rowsItens] = await conn.execute(sqlItens, [id]);

            const sqlPedido = 'DELETE FROM pedido WHERE id = ?;';
            const [rowsPedido] = await conn.execute(sqlPedido, [id]);

            await conn.commit();

            return {
                rowsPedido,
                rowsItens
            };
        }
        catch(error){
            console.error(error);
            conn.rollback();
            throw error;
        }
        finally {
            conn.release();
        }
    },
    criarPedido: async (valorTotal, idCliente, idUser, itens) => {  
        const conn = await pool.getConnection();

        await conn.beginTransaction();

        try{
            const sqlPedido = 'INSERT INTO pedido (valor_total, id_cliente, id_user) VALUES (?, ?, ?);';
            const [rowsPedido] = await conn.execute(sqlPedido, [valorTotal, idCliente, idUser]);

            const idPedido = rowsPedido.insertId;

            const sqlItem = 'INSERT INTO itens (valor_produto, quantidade, id_pedido, id_produto) VALUES (?, ?, ?, ?);';
            
            itens.forEach(async item => {
                console.log(item.valorProduto, item.quantidade, idPedido, item.idProduto);
                
                const [rowsItens] = await conn.execute(sqlItem, [item.valorProduto, item.quantidade, idPedido, item.idProduto]);
            });

            //calcular total pedido
            const [rowsTotal] = await conn.execute(`
                    UPDATE pedido SET valor_total = (SELECT SUM(sub_total) AS "TOTAL" FROM itens WHERE id_pedido = ?) WHERE id = ?;
                `, [idPedido, idPedido])

            await conn.commit();

            return {
                rowsPedido
            };
        }
        catch(error){
            console.error(error);
            conn.rollback();
            throw error;
        }
        finally {
            conn.release();
        }
    },

    atualizarPedido: async (dataCompra, valorTotal, idCliente, idUser, id) => {
        const sql = 'UPDATE pedido SET data_compra = ?, valor_total = ?, id_cliente = ?, id_user = ? WHERE id = ?;';
        const [rows] = await pool.execute(sql, [dataCompra, valorTotal, idCliente, idUser, id]);
        return rows;
    }

};

export default pedidoRepository;
