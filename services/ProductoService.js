import Productos from "../models/ProductModel.js";

class ProductoService {
    async crearProducto(datos){
        try {
            return await Productos.create(datos);
        } catch (error) {
            throw error;
        }
    }
    async buscarProducto(id){
        try {
            return await Productos.findByPk(id);
        } catch (error) {
            throw error;
        }
    }
    async buscarNombre(nombre){
        try {
            return await Productos.findOne({where: {nombre}});
        }
        catch (error) {
            throw error;
        }
    }
    async mostrarProductos(){
        try {
            return await Productos.findAll();
        } catch (error) {
            throw error;
        }
    }
    async actualizarProducto(id, datos){
        try {
            return await Productos.update(datos, {where: {id}});
        } catch (error) {
            throw error;
        }
    }
    async eliminarProducto(id){
        try {
            return await Productos.destroy({where: {id}});
        } catch (error) {
            throw error;
        }
    }
}

export default new ProductoService();