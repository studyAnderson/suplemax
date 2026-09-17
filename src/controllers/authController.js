import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import userService from '../services/userService.js';

const authController = {
    login: async (req, res) => {
        try{
            const { email, password } = req.body;

            const userExists = await userService.recuperarUsuarioPorEmail(email);

            if(!userExists || userExists.length === 0){
                return res.status(400).json({message: "Usuario não encontado!"});
            }

            const validPassWord = await bcrypt.compare(password, userExists[0].password);

            if(!validPassWord){
                return res.status(401).json({
                    message: "Senha invalida"
                })
            }

            const accessToken = jwt.sign(
                {
                    id: userExists[0],
                    email: userExists[0].email,
                    name: userExists[0].name,
                    role: userExists[0].role
                },
                process.env.JWT_secret,
                {
                    expiresIn: '15m'

                }
            )

            res.status(200).json({
                message: "Login efetuado com sucesso.",
                token: accessToken
            })

        }
        catch (error){
            console.error(error);
            return res.status(500).json({
                message: "Ocorreu um erro no servidor!",
                erroMessage: error.message
            })

        }

    }

}
export default authController;