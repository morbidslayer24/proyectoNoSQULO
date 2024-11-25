const express = require('express');
const router = express.Router();
const Pedido = require('../models/models');

//CRUD
// Obtener todos los pedidos
router.get('/pedido', async (req, res) => {
  try {
    const pedido = await Pedido.find(); // Incluye la lista de productos
    res.json(pedido);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Crear un pedido
router.post('/pedido', async (req, res) => {
  try {
    const pedido = new pedido(req.body);
    await pedido.save();
    res.status(201).json(pedido);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});



module.exports = router;