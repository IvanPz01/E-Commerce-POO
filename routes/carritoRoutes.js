import { Router } from "express";
import CarritoControllers from "../controllers/CarritoControllers.js";
import { body } from "express-validator";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { roleMiddleware } from "../middlewares/roleMiddleware.js";


const router = Router();

router.post('/',
    authMiddleware,
    roleMiddleware(['cliente']), 
    CarritoControllers.agregarProducto
);

router.get('/id_usuario', 
    authMiddleware,
    roleMiddleware(['cliente']), 
    CarritoControllers.obtenerProductos
);

router.delete('/:id_usuario/:idProducto',
    authMiddleware,
    roleMiddleware(['cliente']), 
    CarritoControllers.eliminarProducto
);

router.delete('vacia/:id_usuario',
    authMiddleware,
    roleMiddleware(['cliente']), 
    CarritoControllers.vaciarCarrito
);

export default router;