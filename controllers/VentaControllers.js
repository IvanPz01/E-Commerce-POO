import VentaService from "../services/VentaService.js";

class VentaControllers{
    async registrarVenta(req, res) {
        try {
            const venta = await VentaService.registrarVenta(req.body);
            res.status(201).json({ venta });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async mostrarVentas(req, res) {
        try {
            const ventas = await VentaService.mostrarVentas();
            res.status(200).json({ ventas });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async mostrarVenta(req, res) {
        try {
            const venta = await VentaService.buscarVenta(req.params.id);
            if (!venta) {
                return res.status(404).json({ error: "Venta no encontrada" });
            }
            res.status(200).json({ venta });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async actualizarVenta(req, res) {
        try {
            const venta = await VentaService.actualizarVenta(req.params.id, req.body);
            if (venta[0] === 0) {
                return res.status(404).json({ error: "Venta no encontrada" });
            }
            res.status(200).json({ venta });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async eliminarVenta(req, res) {
        try {
            const venta = await VentaService.eliminarVenta(req.params.id);
            if (venta === 0) {
                return res.status(404).json({ error: "Venta no encontrada" });
            }
            res.status(200).json({ venta });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

export default new VentaControllers();