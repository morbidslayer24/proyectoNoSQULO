const express = require('express');
const router = express.Router();
const Inventario = require('../models/models');

//CRUD
// Obtener inventario
router.get('/inventario', async (req, res) => {
  try {
    const inventario = await Inventario.find(); // Incluye la lista de productos
    res.json(inventario);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Crear un cliente
router.post('/inventario', async (req, res) => {
  try {
    const Inventario = new Inventario(req.body);
    await Inventario.save();
    res.status(201).json(Inventario);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});



module.exports = router;