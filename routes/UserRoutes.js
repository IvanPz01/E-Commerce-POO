import { Router } from "express";
import UsuarioController from "../controllers/UsuarioControllers.js";
import { body } from "express-validator";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { roleMiddleware } from "../middlewares/roleMiddleware.js";

const router = Router();

router.post("/registro", [
    body("nombre", "El nombre es obligatorio").notEmpty(),
    body("email", "El email es obligatorio").notEmpty().isEmail(),
    body("password", "La contraseña es obligatoria").notEmpty().isLength({ min: 8 }),
], authMiddleware, UsuarioController.RegistrarUsuario);

router.post("/login", UsuarioController.LoginUser);

router.get('/',roleMiddleware(['admin']), UsuarioController.BuscarUsuario);


export default router;