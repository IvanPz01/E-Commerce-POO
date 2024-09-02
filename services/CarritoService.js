import Carrito from "../models/CarritoModel.js";

class CarritoService {

    async agregarProducto(datos) {
        try {
            return await Carrito.create(datos);
        } catch (error) {
            throw error;
        }
    }
    async obtetenerProductos(id_user){
        try {
            return await Carrito.findAll({where: {id_user}});
        } catch (error) {
            throw error;
        }
    }
    async eliminarProducto(id_user, id_producto){
        try {
            const producto = await Carrito.findOne({where: {id_user, id_producto}});
            if(!producto){
                return 0;
            }
            return await producto.destroy();
        } catch (error) {
            throw error;
        }
    }
    async VaciarCarrito(id_user){
        try{
            const productos = await Carrito.findAll({where: {id_user}});
            if(!productos.length){
                return 0;
            }
            return await Carrito.destroy({where: {id_user}});
        }
        catch(error){
            throw error;
        }
    }
    

}

export default new CarritoService();