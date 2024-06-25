const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'OrderItem' }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', OrderSchema);
