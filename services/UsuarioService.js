import User from "../models/UserModel.js";

class UsuarioService {
    async crearUser(datos){
        try {
            return await User.create(datos);
        } catch (error) {
            throw error;
        }
    }
    async buscarUser(id){
        try {
            return await User.findByPk(id);
        } catch (error) {
            throw error;
        }
    }
    async buscarEmail(email){
        try {
            return await User.findOne({where: {email}});
        } catch (error) {
            throw error;
        }
    }
    
}

export default new UsuarioService();