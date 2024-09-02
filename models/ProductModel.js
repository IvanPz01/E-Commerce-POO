import { DataTypes } from "sequelize";
import sequelize from "../config/dataBase.js";

const Productos = sequelize.define('Productos',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precio: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_vendor: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

export default Productos;