import CarritoService from "../services/CarritoService.js";

class CarritoController {

    async agregarProducto(req, res) {
        try {
            const producto = await CarritoService.agregarProducto(req.body);
            res.status(201).json({ producto });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async obtenerProductos(req, res) {
        try {
            const productos = await CarritoService.obtetenerProductos(req.params.id_user);
            res.status(200).json({ productos });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async eliminarProducto(req, res) {
        try{
            const resultado = await CarritoService.eliminarProducto(req.params.id_user, req.params.id_producto);
            if(resultado === 0){
                return res.status(404).json({error: "Producto no encontrado"});
            }
            res.status(200).json({resultado});
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async vaciarCarrito(req, res) {
        try{
            const resultado = await CarritoService.VaciarCarrito(req.params.id_user);
            if(resultado === 0){
                return res.status(404).json({error: "Carrito vacio"});
            }
            res.status(200).json({resultado});
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

export default new CarritoController();