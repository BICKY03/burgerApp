const Order = require('../models/Order');

const getOrders = async (req, res) => {
  try {
    if (req.params.id) {
      const order = await Order.findById(req.params.id);
      if (!order) {
        return res.status(404).json({ message: 'Order not found' });
      }
      res.json(order);
    } else {
      const orders = await Order.find();
      res.json(orders);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = getOrders;
