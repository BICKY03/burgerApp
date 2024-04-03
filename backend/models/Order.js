const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  slices: [{ type: String, required: true }],
  totalPrice: { type: Number, required: true },
  quantity: { type: Number, required: true },
  customerMobileNumber: { type: String, required: true },
  orderNumber: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Order', orderSchema);
