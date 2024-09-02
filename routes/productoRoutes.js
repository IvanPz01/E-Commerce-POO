import e, { Router } from "express";
import ProductoControllers from "../controllers/ProductoControllers.js";
import { body } from "express-validator";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { roleMiddleware } from "../middlewares/roleMiddleware.js";

const router = Router();


router.post('/',[
    authMiddleware,
    roleMiddleware(['admin']),
    body("nombre", "El nombre es obligatorio").notEmpty(),
    body("precio", "El precio es obligatorio").notEmpty(),
    body("descripcion", "La descripción es obligatoria").notEmpty(),
    body("stock", "El stock es obligatorio").notEmpty(),
], ProductoControllers.Crear);


router.get('/', ProductoControllers.obtenerProductos);

router.get('/:id', ProductoControllers.obtenerProducto);

router.put('/:id',[
    authMiddleware,
    roleMiddleware(['admin','vendedor']),
], ProductoControllers.actualizarProducto
);

router.delete('/:id',[
    authMiddleware,
    roleMiddleware(['admin','vendedor']),
], ProductoControllers.eliminarProducto
);

router.get('/:nombre', ProductoControllers.buscarNombre);


export default router;