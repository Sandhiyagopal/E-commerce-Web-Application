// const mongoose = require('mongoose');

// const ProductSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   price: { type: Number, required: true },
//   category: { type: String, required: true }
// });

// module.exports = mongoose.model('Product', ProductSchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Example Product Schema definition in models/Product.js
const productSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  price: Number,
  category: String
});

module.exports = mongoose.model('Product', productSchema);
