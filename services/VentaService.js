import Venta from "../models/VentaModel.js";

class VentaService {
    async registrarVenta(datos) {
        try {
            return await Venta.create(datos);
        } catch (error) {
            throw error;
        }
    }
    async mostrarVentas() {
        try {
            return await Venta.findAll();
        } catch (error) {
            throw error;
        }
    }
    async buscarVenta(id) {
        try {
            return await Venta.findByPk(id);
        } catch (error) {
            throw error;
        }
    }



}

export default new VentaService();