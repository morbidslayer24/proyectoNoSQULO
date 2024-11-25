require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');


//importancion de rutas
const clienteRoutes = require('./src/routes/cliente');
const devolucionRoutes = require('./src/routes/devolucion');
const pedidoRoutes = require('./src/routes/pedido');
const reporteRoutes = require('./src/routes/reporte');
const inventarioRoutes = require('./src/routes/inventario');
const tiendaRoutes = require('./src/routes/tienda');
const productosRoutes = require('./src/routes/productos'); 
const proveedorRoutes = require('./src/routes/proveedor'); 

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());


// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
.then(() => console.log('Conexión exitosa a MongoDB'))
.catch(err => console.error('Error al conectar a MongoDB:', err));






// Ruta de productos

app.use('/api/productos', productosRoutes);  
app.use('/api/proveedor', proveedorRoutes);
app.use('/api/tienda', tiendaRoutes);
app.use('/api/inventario', inventarioRoutes);
app.use('/api/cliente', clienteRoutes);
app.use('/api/pedido', pedidoRoutes);
app.use('/api/devolucion', devolucionRoutes);
app.use('/api/reporte', reporteRoutes);


// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola, este es tu servidor Express!');
});

// Puerto y conexión
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
