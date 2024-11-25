const express = require('express');
const { Producto, Tienda, Inventario, cliente, pedido, devolucion, Proveedor, reporte } = require('../models/models');
const router = express.Router();

// CRUD para Productos

router.get('/productos', async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.post('/productos', async (req, res) => {
  try {
    const producto = await Producto.create(req.body);
    res.status(201).json(producto);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});




module.exports = router;
