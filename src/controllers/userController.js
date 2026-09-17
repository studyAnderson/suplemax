import User from "../models/User.js";
import userService from "../services/userService.js";

const userController = {

    selecionar: async (req, res) => {
        try{
            const resultado = await userService.recuperarUsuario();

            res.status(200).json({
                menssage: "Usuarios recuperados com sucesso:",
                data: resultado

            });
        }
        
        catch (error){
            res.status(500).json({
                message: "Erro ao recuperar usuários!",
                data: error.message
            });

        }
    },

    criar: async (req, res) => {
        try {

            const {name, email, password, role } = req.body;

            const hashedPassword = await userService.hashPassword(password);

            const user = new User(name, email, hashedPassword, role, null);

            const resultado = await userService.criarUsuario(user);

            return res.status(201).json({
                message: "Usuário criado com sucesso!",
                data: resultado
            });
        }
        catch(error){
            console.error(error);
            return res.status(500).json({
                message: "Erro ao criar usuário!",
                    data: error.resultado


            });
        }
    },

    deletar: async (req, res) => {

        try {
            const {id}= req.params;

            const resultado = await userService.deletarUsuario(id);

            return res.status(200).json({
                message: "Usuário deletado com sucesso!",
                data: resultado
            });

        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message: "Erro ao deletar usuário!",
                data: error
            });
        }
    },

      atualizar: async (req, res) => {
        try {
            const {id}= req.params;

            const {name, email, password} = req.body;

            const user = new User(name, email, password, id);

            const resultado = await userService.atualizarUsuario(user);

            return res.status(200).json({
                message: "Usuário atualizado com sucesso!",
                data: resultado
            });
        }
        catch(error){
            console.error(error);
            return res.status(500).json({
                message: "Erro na atualização do usuário!",
                    data: error.resultado


            });
        }
    }

}

export default userController;