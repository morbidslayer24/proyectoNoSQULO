const express = require('express');
const router = express.Router();
const Cliente = require('../models/models');

//CRUD
// Obtener todos los clientes
router.get('/cliente', async (req, res) => {
  try {
    const clientes = await Cliente.find(); // Incluye la lista de productos
    res.json(clientes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Crear un cliente
router.post('/cliente', async (req, res) => {
  try {
    const Cliente = new Cliente(req.body);
    await Cliente.save();
    res.status(201).json(Cliente);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});



module.exports = router;