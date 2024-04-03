const Order = require('../models/Order');

// Function to generate order number
const generateOrderNumber = () => {
  const prefix = 'BURG-';
  const serialNumber = Math.floor(Math.random() * 1000);
  return `${prefix}${serialNumber}`;
};

const createOrder = async (req, res) => {
  const { slices, totalPrice, quantity, customerMobileNumber } = req.body;
  const orderNumber = generateOrderNumber();

  try {
    const newOrder = new Order({
      slices,
      totalPrice,
      quantity,
      customerMobileNumber,
      orderNumber
    });

    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = createOrder;
