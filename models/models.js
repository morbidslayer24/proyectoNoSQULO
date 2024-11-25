const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema({
  nombreProducto: String,
  descripcion: String,
  numeroSerie: String,
  categoria: String,
  precio: Number,
  fechaCaducidad: {type: Date}, //es por si el producto no tiene fecha de caducidad. El tipo date lleva formato '2024-12-31'
  proveedor: { type: mongoose.Schema.Types.ObjectId, ref: 'Proveedor' }, //mongo ya coloca por defecto un id, entonces pues hace referencia a este
});


const TiendaSchema = new mongoose.Schema({
  nombreTienda: String,
  direccion: String,
  ciudad: String,
  codigoPostal: String,
  capacidadAlmacenamiento: Number,
  horario: {
    //se maneja como un objeto, ya que cada día tiene un horario diferente
    Lunes:{type: String, default: 'Cerrado'},
    Martes:{type: String, default: 'Cerrado'},
    Miercoles:{type: String, default: 'Cerrado'},
    Jueves:{type: String, default: 'Cerrado'},
    Viernes:{type: String, default: 'Cerrado'},
    Sabado:{type: String, default: 'Cerrado'},
    Domingo:{type: String, default: 'Cerrado'},

  }
});


const InventarioSchema = new mongoose.Schema({
  producto: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto' },
  tienda: { type: mongoose.Schema.Types.ObjectId, ref: 'Tienda' },
  cantidadStock: Number,
  fechaLlegada: Date,
  fechaActualizacion: Date,
  nivelAlerta: Number,
});


const Cliente = new mongoose.Schema({
  nombreCliente: String,
  direccionEnvio: String,
  HistorialPedidos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pedido' }],
});


const Pedido = new mongoose.Schema({
  Cliente:{type: mongoose.Schema.Types.ObjectId, ref: 'Cliente'},
  Producto:{type:mongoose.Schema.Types.ObjectId, ref: 'Producto'},
  cantidadPedida: Number,
});

const ProveedorSchema = new mongoose.Schema({
  nombre: String,
  direccion: String,
  contacto: String,
  listaProductos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Producto' }],
});


const Devolucion = new mongoose.Schema({
  PedidoRelacionado:{type: mongoose.Schema.Types.ObjectId, ref: 'Pedido'},
  motivo: String,
  cantidadDevuelta: Number,
  fechaDevolucion: Date,
});


const Reporte = new mongoose.Schema({
  datos: String,
});























module.exports = {
  Producto: mongoose.model('Producto', ProductoSchema),
  Tienda: mongoose.model('Tienda', TiendaSchema),
  Inventario: mongoose.model('Inventario', InventarioSchema),
  Proveedor: mongoose.model('Proveedor', ProveedorSchema),
};
