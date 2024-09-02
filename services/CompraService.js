import Compra from "../models/CompraModel.js";

class CompraService {
    async registrarCompra(datos) {
        try {
            return await Compra.create(datos);
        } catch (error) {
            throw error;
        }
    }
    async mostrarCompras() {
        try {
            return await Compra.findAll();
        } catch (error) {
            throw error;
        }
    }
    async buscarCompra(id) {
        try {
            return await Compra.findByPk(id);
        } catch (error) {
            throw error;
        }
    }
    async actualizarCompra(id, datos) {
        try {
            return await Compra.update(datos, { where: { id } });
        } catch (error) {
            throw error;
        }
    }
    async eliminarCompra(id) {
        try {
            return await Compra.destroy({ where: { id } });
        } catch (error) {
            throw error;
        }
    }
}

export default new CompraService();