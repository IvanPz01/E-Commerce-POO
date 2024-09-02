import { DataTypes } from "sequelize";
import sequelize from "../config/dataBase.js";


const Venta = sequelize.define('Venta',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_vendedor: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    total: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    }
});

export default Venta;