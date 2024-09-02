import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/dataBase.js';
import usuarioRoutes from './routes/UserRoutes.js';
import productoRoutes from './routes/productoRoutes.js';
import compraRoutes from './routes/compraRoutes.js';
import ventaRoutes from './routes/ventaRoutes.js';
import carritoRoutes from './routes/carritoRoutes.js';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/usuarios', usuarioRoutes);
app.use('/productos', productoRoutes);
app.use('/compras', compraRoutes);
app.use('/ventas', ventaRoutes);
app.use('/carritos', carritoRoutes);


const PORT = process.env.PORT || 5080;

sequelize.sync({force: false}).then(()=>{
    app.listen(PORT, ()=>{
        console.log(` localhost:${PORT}/`);
    });
}).catch((err)=>{
    console.log(err);
});