import ProductoService from "../services/ProductoService.js";
import { validationResult } from "express-validator";

class ProductoController {
    async Crear(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errores: errors.array() });
        }
        try {
            const producto = await ProductoService.crearProducto(req.body);
            res.status(201).json({ producto });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async obtenerProductos(req, res) {
        try {
            const productos = await ProductoService.mostrarProductos();
            res.status(200).json({ productos });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async obtenerProducto(req, res) {
        try {
            const producto = await ProductoService.buscarProducto(req.params.id);
            if (!producto) {
                return res.status(404).json({ error: "Producto no encontrado" });
            }
            res.status(200).json({ producto });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async actualizarProducto(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errores: errors.array() });
        }
        try {
            const producto = await ProductoService.actualizarProducto(req.params.id, req.body);
            if (producto[0] === 0) {
                return res.status(404).json({ error: "Producto no encontrado" });
            }
            res.status(200).json({ producto });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async eliminarProducto(req, res) {
        try {
            const producto = await ProductoService.eliminarProducto(req.params.id);
            if (producto === 0) {
                return res.status(404).json({ error: "Producto no encontrado" });
            }
            res.status(200).json({ producto });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async buscarNombre(req, res) {
        try {
            const producto = await ProductoService.buscarNombre(req.params.nombre);
            if (!producto) {
                return res.status(404).json({ error: "Producto no encontrado" });
            }
            res.status(200).json({ producto });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

export default new ProductoController();