import 'dotenv/config';
import express from 'express';
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';
import enderecoRoutes from './routes/enderecoRoutes.js';
const app = express();
const port = process.env.SERVER_PORT;

app.use(express.json());
app.use('/users', userRoutes);
app.use('/auth', authRoutes);
app.use('/endereco', enderecoRoutes);

app.listen(port, () => {
    console.log("Servidor rodando na porta " + port);
});