


const express = require('express');
const router = express.Router();
const getOrders = require('../controllers/getOrders');
const createOrder = require('../controllers/createOrder');
const updateOrder = require('../controllers/updateOrder');
const deleteOrder = require('../controllers/deleteOrder');

// GET all orders or GET order by ID
router.get('/:id?', getOrders);

// POST create a new order
router.post('/', createOrder);

// PUT update an existing order
router.put('/:id', updateOrder);

// DELETE delete an order by ID
router.delete('/:id', deleteOrder);

module.exports = router;
