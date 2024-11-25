const express = require('express');
const router = express.Router();
const Reporte = require('../models/models');

//CRUD
// Obtener todos los reportes
router.get('/reporte', async (req, res) => {
  try {
    const reporte = await Reporte.find(); // Incluye la lista de productos
    res.json(reporte);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Crear un reporte
router.post('/reporte', async (req, res) => {
  try {
    const reporte = new reporte(req.body);
    await reporte.save();
    res.status(201).json(reporte);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});



module.exports = router;