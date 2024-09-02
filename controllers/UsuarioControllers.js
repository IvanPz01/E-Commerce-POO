import UsuarioService from "../services/UsuarioService.js";
import { validationResult } from "express-validator";

class UsuarioController{
    async RegistrarUsuario(req, res){
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errores: errors.array()});
        }
        try {
            const ususario = await UsuarioService.crearUser(req.body);
            res.status(201).json({ususario});
        }catch (error) {
            res.status(400).json({error: error.message});
        }
    }
    async LoginUser(req, res){
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({error: "Faltan datos"});
        }
        try {
            const ususario = await UsuarioService.buscarEmail(email);
            if(!ususario){
                return res.status(400).json({error: "Usuario no encontrado"});
            }
            const validPassword = await bcrypt.compare(password, ususario.password);
            if(!validPassword){
                return res.status(400).json({error: "Contraseña incorrecta"});
            }
            const token = jwt.sign({id: ususario.id}, process.env.SECRET_KEY, {expiresIn: '1h'});
            res.status(200).json({token});
        }
        catch (error) {
            res.status(400).json({error: error.message});
        }
    }
    async BuscarUsuario(req,res) {
        try{
            const ususario = await UsuarioService.buscarUser(req.params.id);
            if (!ususario){
                return res.status(404).json({error: "Usuario no encontrado"});
            }
            res.status(200).json({ususario});
        }
        catch (error) {
            res.status(400).json({error: error.message});
        }
    }
}

export default new UsuarioController();