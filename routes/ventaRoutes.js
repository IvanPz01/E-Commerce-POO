import { Router } from "express";
import VentaControllers from "../controllers/VentaControllers.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { roleMiddleware } from "../middlewares/roleMiddleware.js";


const router = Router();


router.post('/',
    authMiddleware,
    roleMiddleware(['vendedor', 'admin']), 
    VentaControllers.registrarVenta
);


router.get('/',
    authMiddleware,
    roleMiddleware(['admin']), 
    VentaControllers.mostrarVentas
);

router.get('/:id',
    authMiddleware,
    roleMiddleware(['admin']), 
    VentaControllers.mostrarVenta
);


router.put('/:id',
    authMiddleware,
    roleMiddleware(['admin']), 
    VentaControllers.actualizarVenta
);


router.delete('/:id', 
    authMiddleware,
    roleMiddleware(['admin']), 
    VentaControllers.eliminarVenta
);


export default router;