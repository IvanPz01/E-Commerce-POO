import CompraService from "../services/CompraService.js";

class CompraController {
    async registrarCompra(req, res) {
        try {
            const compra = await CompraService.registrarCompra(req.body);
            res.status(201).json({ compra });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async mostrarCompras(req, res) {
        try {
            const compras = await CompraService.mostrarCompras();
            res.status(200).json({ compras });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async mostrarCompra(req, res) {
        try {
            const compra = await CompraService.buscarCompra(req.params.id);
            if (!compra) {
                return res.status(404).json({ error: "Compra no encontrada" });
            }
            res.status(200).json({ compra });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async actualizarCompra(req, res) {
        try {
            const compra = await CompraService.actualizarCompra(req.params.id, req.body);
            if (compra[0] === 0) {
                return res.status(404).json({ error: "Compra no encontrada" });
            }
            res.status(200).json({ compra });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async eliminarCompra(req, res) {
        try {
            const compra = await CompraService.eliminarCompra(req.params.id);
            if (compra === 0) {
                return res.status(404).json({ error: "Compra no encontrada" });
            }
            res.status(200).json({ compra });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    
}

export default new CompraController();