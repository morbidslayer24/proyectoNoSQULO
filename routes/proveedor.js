const express = require('express');
const router = express.Router();
const Proveedor = require('../models/models');

//CRUD
// Obtener todos los proveedores
router.get('/proveedor', async (req, res) => {
  try {
    const proveedores = await Proveedor.find().populate('productos'); // Incluye la lista de productos
    res.json(proveedores);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Crear un proveedor
router.post('/proveedor', async (req, res) => {
  try {
    const Proveedor = new Proveedor(req.body);
    await Proveedor.save();
    res.status(201).json(Proveedor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});



module.exports = router;
