const express = require('express');
const router = express.Router();
const Tienda = require('../models/models');

//CRUD
// Obtener todas las tiendas
router.get('/tienda', async (req, res) => {
  try {
    const tienda = await Tienda.find(); // Incluye la lista de productos
    res.json(tienda);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Crear un tienda
router.post('/tienda', async (req, res) => {
  try {
    const tienda = new tienda(req.body);
    await tienda.save();
    res.status(201).json(tienda);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});



module.exports = router;