import { Router } from "express";
import CompraControllers from "../controllers/CompraControllers.js";
import { body } from "express-validator";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { roleMiddleware } from "../middlewares/roleMiddleware.js";

const router = Router();

router.post('/',
    authMiddleware,
    roleMiddleware(['cliente', 'admin']), 
    CompraControllers.registrarCompra
);

router.get('/', 
    authMiddleware,
    roleMiddleware(['admin']), 
    CompraControllers.mostrarCompras
);

router.get('/:id',
    authMiddleware,
    roleMiddleware(['admin']), 
    CompraControllers.mostrarCompra
);

router.put('/:id',
    authMiddleware,
    roleMiddleware(['admin']), 
    CompraControllers.actualizarCompra
);

router.delete('/:id',
    authMiddleware,
    roleMiddleware(['admin']), 
    CompraControllers.eliminarCompra
);



export default router;