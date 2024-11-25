const express = require('express');
const router = express.Router();
const Devolucion = require('../models/models');

//CRUD
// Obtener las devoluciones
router.get('/devolucion', async (req, res) => {
  try {
    const devolucion = await Devolucion.find(); // Incluye la lista de productos
    res.json(devolucion);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Crear un cliente
router.post('/devolucion', async (req, res) => {
  try {
    const Devolucion = new Devolucion(req.body);
    await Devolucion.save();
    res.status(201).json(Devolucion);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});



module.exports = router;