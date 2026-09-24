import 'dotenv/config';
import express from 'express';
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';
import clienteRoutes from './routes/clienteRoutes.js';
import enderecoRoutes from './routes/enderecoRoutes.js';
import produtoRoutes from './routes/produtoRoutes.js';
import loteRoutes from './routes/loteRoutes.js';


const app = express();
const port = process.env.SERVER_PORT;

app.use(express.json());
app.use('/cliente', clienteRoutes);
app.use('/users', userRoutes);
app.use('/auth', authRoutes);
app.use('/endereco', enderecoRoutes);
app.use('/produto', produtoRoutes);
app.use('/lote', loteRoutes);

app.listen(port, () => {
    console.log("Servidor rodando na porta " + port);
});